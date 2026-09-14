import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import DotSwirl from './DotSwirl'

interface PageIntroProps {
  eyebrow: string
  title: ReactNode
  children: ReactNode
  ctaLabel?: string
  seed?: number
}

/** En-tête de page (titre H1 unique + introduction), dans le style de la page Contact. */
export default function PageIntro({ eyebrow, title, children, ctaLabel = 'Discutons de votre projet', seed = 7 }: PageIntroProps) {
  return (
    <section className="container-page grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 font-display text-[clamp(2.3rem,5.5vw,3.75rem)] leading-[1.05]">{title}</h1>
        <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-foreground/80 sm:text-lg">{children}</div>
        <Link
          to="/contact/"
          className="mt-9 inline-flex rounded-full bg-butter px-7 py-3 text-sm font-semibold text-butter-foreground transition-opacity hover:opacity-85"
        >
          {ctaLabel}
        </Link>
      </div>
      <DotSwirl className="hidden w-full md:block" count={40} seed={seed} />
    </section>
  )
}
