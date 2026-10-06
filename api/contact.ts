import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

const LIMITS = { name: 100, email: 254, company: 150, message: 5000 }

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => HTML_ESCAPES[char])

/** Neutralise les retours à la ligne pour éviter l'injection d'en-têtes SMTP. */
const singleLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim()

const asText = (value: unknown) => (typeof value === 'string' ? value.trim() : '')

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Méthode non autorisée.' })
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Requête invalide.' })
  }

  const payload = body as Record<string, unknown>

  // Piège à robots : le champ est invisible, seul un bot le remplit.
  if (asText(payload.website)) {
    return res.status(200).json({ ok: true })
  }

  const firstName = asText(payload.firstName)
  const lastName = asText(payload.lastName)
  const email = asText(payload.email)
  const company = asText(payload.company)
  const message = asText(payload.message)
  const rgpd = payload.rgpd === true

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Merci de remplir tous les champs obligatoires.' })
  }
  if (!rgpd) {
    return res.status(400).json({ error: "Merci d'accepter l'utilisation de vos données." })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Adresse email invalide.' })
  }
  if (
    firstName.length > LIMITS.name ||
    lastName.length > LIMITS.name ||
    email.length > LIMITS.email ||
    company.length > LIMITS.company ||
    message.length > LIMITS.message
  ) {
    return res.status(400).json({ error: 'Un des champs dépasse la longueur autorisée.' })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('Variables SMTP manquantes : SMTP_HOST, SMTP_USER et SMTP_PASS sont requises.')
    return res.status(500).json({ error: "Le service d'envoi n'est pas configuré." })
  }

  const port = Number(SMTP_PORT) || 465
  const fullName = singleLine(`${firstName} ${lastName}`)
  const subject = singleLine(
    company ? `Nouveau message de ${fullName} (${company})` : `Nouveau message de ${fullName}`,
  )

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465, // 465 = SSL implicite, 587 = STARTTLS
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    await transporter.sendMail({
      // Gmail réécrit l'expéditeur avec le compte authentifié : on le met directement.
      from: `"Site OnClick" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: { name: fullName, address: singleLine(email) },
      subject,
      text: [
        `Nom : ${fullName}`,
        `Email : ${email}`,
        `Entreprise : ${company || '—'}`,
        '',
        'Message :',
        message,
      ].join('\n'),
      html: `
        <h2>Nouvelle demande depuis le site</h2>
        <p><strong>Nom :</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email :</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Entreprise :</strong> ${escapeHtml(company) || '—'}</p>
        <p><strong>Message :</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error("Échec de l'envoi SMTP :", error)
    return res.status(502).json({ error: "L'envoi a échoué. Réessayez ou écrivez-nous directement." })
  }
}

function safeParse(raw: string): unknown {
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}
