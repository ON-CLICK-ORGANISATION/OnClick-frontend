import type { LucideIcon } from 'lucide-react'
import type { ServiceCard } from '../data/content'

interface ServiceCardsGridProps {
  cards: ServiceCard[]
  icons: LucideIcon[]
}

export default function ServiceCardsGrid({ cards, icons }: ServiceCardsGridProps) {
  return (
    <section className="py-4 sm:py-6">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = icons[index] ?? icons[0]
            return (
              <div
                key={card.id}
                className="flex flex-col rounded-2xl border border-border bg-mist p-7 transition-colors duration-200 hover:border-primary/40"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{card.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
