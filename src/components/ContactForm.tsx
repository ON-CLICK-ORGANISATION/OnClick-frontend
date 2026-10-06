import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: '',
  rgpd: false,
  website: '', // piège à robots, laissé vide par les humains
}

export default function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        setError(result.error || "L'envoi a échoué. Merci de réessayer.")
        return
      }

      setFormData(EMPTY_FORM)
      setSubmitted(true)
    } catch {
      setError('Connexion impossible. Vérifiez votre réseau et réessayez.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-6 sm:p-12 text-center border border-[#E2E8F0] shadow-sm max-w-5xl mx-auto"
      >
        <div className="w-18 h-18 bg-[#FFE957]/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} className="text-[#0F172A]" />
        </div>
        <h3 className="text-2xl font-semibold text-[#1E293B] mb-2">Message envoyé !</h3>
        <p className="text-[#64748B] text-sm mb-6">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#00B4D8] hover:text-[#0096C7] transition-colors"
        >
          Envoyer un autre message
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </motion.div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl shadow-sm border border-[#E2E8F0] p-6 sm:p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Colonne gauche - Texte */}
          <div>
            {/* Titre à deux couleurs */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1E293B] leading-tight mb-4">
              Construisons ensemble{' '}
              <span className="text-[#FDE68A] font-medium">votre réussite</span>.
            </h2>

            <p className="text-[#64748B] text-base leading-relaxed mb-8">
              Vous avez un projet en tête ? Contactez-nous dès aujourd'hui pour en discuter.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFE957]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#1E293B] text-sm font-medium">Réponse sous 24h garantie</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFE957]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#1E293B] text-sm font-medium">Audit gratuit offert</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFE957]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#1E293B] text-sm font-medium">Interlocuteur dédié</span>
              </div>
            </div>
          </div>

          {/* Colonne droite - Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Anti-spam : invisible et hors du parcours clavier, seuls les robots le remplissent */}
            <div className="absolute left-[-9999px] w-px h-px overflow-hidden" aria-hidden="true">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            {/* Row 1: Prénom & Nom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  name="firstName"
                  aria-label="Prénom"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Prénom"
                  className="w-full bg-[#F1F5F9] border border-[#E2E8F0] focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 rounded-xl px-4 py-3 text-[#1E293B] text-sm placeholder-[#64748B] outline-none transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  aria-label="Nom"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Nom"
                  className="w-full bg-[#F1F5F9] border border-[#E2E8F0] focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 rounded-xl px-4 py-3 text-[#1E293B] text-sm placeholder-[#64748B] outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Row 2: Email & Entreprise */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  type="email"
                  name="email"
                  aria-label="Email professionnel"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email professionnel"
                  className="w-full bg-[#F1F5F9] border border-[#E2E8F0] focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 rounded-xl px-4 py-3 text-[#1E293B] text-sm placeholder-[#64748B] outline-none transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  aria-label="Entreprise"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Entreprise"
                  className="w-full bg-[#F1F5F9] border border-[#E2E8F0] focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 rounded-xl px-4 py-3 text-[#1E293B] text-sm placeholder-[#64748B] outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                aria-label="Décrivez votre projet"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Décrivez votre projet..."
                className="w-full bg-[#F1F5F9] border border-[#E2E8F0] focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 rounded-xl px-4 py-3 text-[#1E293B] text-sm placeholder-[#64748B] outline-none transition-all duration-300 resize-none"
              />
            </div>

            {/* RGPD */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="rgpd"
                id="rgpd"
                checked={formData.rgpd}
                onChange={handleChange}
                required
                className="mt-0.5 w-4 h-4 accent-[#00B4D8] cursor-pointer rounded border-[#E2E8F0]"
              />
              <label htmlFor="rgpd" className="text-xs text-[#64748B] leading-relaxed cursor-pointer">
                J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande.
              </label>
            </div>

            {/* Message d'erreur */}
            {error && (
              <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            {/* Bouton Envoyer */}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 font-semibold text-sm py-4 px-8 rounded-full bg-[#FFE957] text-[#0F172A] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#0F172A]/30 border-t-[#0F172A] rounded-full animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer
                  <Send size={16} className="ml-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}