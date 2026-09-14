import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import ArrowLink from './ArrowLink'

export interface FeatureItem {
  title: string
  text: string
  icon: LucideIcon
  to?: string
  linkLabel?: string
}

interface FeatureGridProps {
  eyebrow?: string
  title: string
  intro?: string
  items: FeatureItem[]
  className?: string
}

/** Grille de cartes (même style que la section « Notre méthode »), avec lien facultatif vers la page détaillée. */
export default function FeatureGrid({ eyebrow, title, intro, items, className = '' }: FeatureGridProps) {
  const columns = items.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'

  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="container-page">
        {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>}
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight">{title}</h2>
        {intro && <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">{intro}</p>}

        <div className={`mt-12 grid gap-6 md:grid-cols-2 ${columns}`}>
          {items.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="group flex flex-col border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-lg leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{item.text}</p>
                {item.to && (
                  <Link to={item.to} className="link-arrow mt-auto pt-6">
                    {item.linkLabel} <ArrowLink />
                  </Link>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
