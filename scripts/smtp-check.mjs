// Diagnostic SMTP : vérifie la connexion et l'authentification.
// Usage : npm run smtp:check          -> teste la connexion sans rien envoyer
//         npm run smtp:check -- --send -> envoie en plus un email de test
import nodemailer from 'nodemailer'

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env
const pass = (SMTP_PASS ?? '').replace(/\s+/g, '')
const port = Number(SMTP_PORT) || 465
const recipient = CONTACT_TO || SMTP_USER
const isEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value ?? '')

console.log('Configuration lue depuis .env')
console.log(`  Hôte          : ${SMTP_HOST ?? '(manquant)'}:${port}`)
console.log(`  Compte        : ${SMTP_USER ?? '(manquant)'}`)
console.log(`  Destinataire  : ${recipient || '(manquant)'}`)
console.log(`  Mot de passe  : ${pass.length} caractères hors espaces (Gmail en attend 16)`)
console.log('')

if (!SMTP_HOST || !SMTP_USER || !pass) {
  console.error('Variables manquantes. Renseignez SMTP_HOST, SMTP_USER et SMTP_PASS dans .env')
  process.exit(1)
}

if (!isEmail(recipient)) {
  console.error(
    `CONTACT_TO invalide : "${recipient}" n'est pas une adresse email complète.\n` +
      'Attendu : quelquechose@domaine.com',
  )
  process.exit(1)
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port,
  secure: port === 465,
  auth: { user: SMTP_USER, pass },
})

try {
  await transporter.verify()
  console.log('OK — connexion et authentification réussies.')

  if (process.argv.includes('--send')) {
    const info = await transporter.sendMail({
      from: `"Site OnClick" <${SMTP_USER}>`,
      to: recipient,
      subject: 'Test du formulaire de contact OnClick',
      text: "Si vous lisez ce message, l'envoi SMTP du formulaire fonctionne.",
    })
    console.log(`Email de test accepté par le serveur pour : ${info.accepted.join(', ')}`)
    if (info.rejected.length) console.log(`Rejetés : ${info.rejected.join(', ')}`)
    console.log(`Identifiant du message : ${info.messageId}`)
  }
} catch (error) {
  console.error('ÉCHEC —', error.message)
  if (error.responseCode === 535) {
    console.error(
      "\nGmail refuse l'authentification. Causes habituelles :\n" +
        "  - ce n'est pas un mot de passe d'application (le mot de passe du compte ne marche pas)\n" +
        '  - la double authentification n\'est pas activée sur le compte\n' +
        '  - le mot de passe a été mal recopié (il fait exactement 16 caractères)',
    )
  }
  process.exit(1)
}
