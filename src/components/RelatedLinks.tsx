import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export interface RelatedLink {
  to: string
  label: string
}

interface RelatedLinksProps {
  title: ReactNode
  links: RelatedLink[]
  className?: string
}

/** Bandeau de liens internes, même style que les bandeaux « Services liés » des pages de services. */
export default function RelatedLinks({ title, links, className = 'py-16' }: RelatedLinksProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-[1440px] px-2 sm:px-4">
        <div
          className="flex flex-col gap-6 rounded-3xl px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10"
          style={{ background: 'linear-gradient(120deg, oklch(0.45 0.07 200), oklch(0.28 0.05 210))' }}
        >
          <h2 className="shrink-0 font-display text-xl text-white sm:text-2xl">{title}</h2>
          <ul className="flex flex-wrap gap-1.5 sm:justify-end">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-flex whitespace-nowrap rounded-full border border-white/25 px-3 py-2 text-[10px] font-semibold text-white transition-colors hover:bg-white/10 sm:text-xs"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
