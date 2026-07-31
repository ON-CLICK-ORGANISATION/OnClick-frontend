import { useState } from 'react'
import type { FormEvent } from 'react'

const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary'

const labelClass = 'mb-1.5 block text-xs font-bold uppercase tracking-widest text-muted-foreground'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="mt-10 max-w-3xl rounded-xl border border-border bg-mist px-6 py-8">
        <p className="font-display text-xl">Merci pour votre message !</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Nous revenons vers vous sous 24 heures avec des premières pistes concrètes.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-10 max-w-3xl">
      <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Nom
            </label>
            <input id="name" name="name" className={inputClass} placeholder="Votre nom" required />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={inputClass}
              placeholder="vous@entreprise.com"
              required
            />
          </div>
          <div>
            <label htmlFor="company" className={labelClass}>
              Entreprise
            </label>
            <input id="company" name="company" className={inputClass} placeholder="Nom de votre structure" />
          </div>
          <div>
            <label htmlFor="budget" className={labelClass}>
              Budget estimé
            </label>
            <select id="budget" name="budget" className={inputClass} defaultValue="">
              <option value="" disabled>
                Sélectionner
              </option>
              <option>Moins de 3 000 €</option>
              <option>3 000 € – 8 000 €</option>
              <option>8 000 € – 20 000 €</option>
              <option>Plus de 20 000 €</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Votre projet
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={inputClass}
            placeholder="Parlez-nous de vos objectifs…"
          />
        </div>

        <button
          type="submit"
          className="justify-self-start rounded-full bg-butter px-7 py-3 text-sm font-semibold text-butter-foreground transition-opacity hover:opacity-85"
        >
          Envoyer ma demande
        </button>
      </form>
    </div>
  )
}
