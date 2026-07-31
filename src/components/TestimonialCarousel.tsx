import { useState } from 'react'
import { testimonials } from '../data/content'
import Stars from './Stars'

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const go = (delta: number) => {
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-mist py-24">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="size-24 shrink-0 rounded-full bg-gradient-to-br from-primary/40 to-magenta/40" />
          <div className="max-w-2xl">
            <Stars />
            <blockquote className="mt-5 font-display text-2xl leading-snug md:text-[28px]">
              {current.quote}
            </blockquote>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              {current.author}
              <br />
              {current.role}
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-6">
          <button
            aria-label="Avis précédent"
            onClick={() => go(-1)}
            className="grid size-9 place-items-center rounded-full bg-primary/25 transition-colors hover:bg-primary/40"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="h-px flex-1 bg-border" />
          <button
            aria-label="Avis suivant"
            onClick={() => go(1)}
            className="grid size-9 place-items-center rounded-full bg-primary/25 transition-colors hover:bg-primary/40"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
