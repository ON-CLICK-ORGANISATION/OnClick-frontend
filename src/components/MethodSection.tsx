import { Link } from 'react-router-dom'
import ArrowLink from './ArrowLink'
import { FunnelIcon, LayoutIcon, UsersIcon, GaugeIcon } from './MethodIcons'
import { methodSteps } from '../data/content'

const icons = [FunnelIcon, LayoutIcon, UsersIcon, GaugeIcon]

export default function MethodSection() {
  return (
    <section className="py-24">
      <div className="container-page">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Notre méthode</p>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,2.75rem)] leading-tight">
          Des prospects qualifiés, du premier clic jusqu'au rendez-vous.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map((step, i) => {
            const Icon = icons[i]
            return (
              <article
                key={step.title}
                className="group flex flex-col border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-6 font-display text-lg leading-snug">{step.title}</h3>
                <p className="mt-3 text-xs font-semibold leading-relaxed text-foreground/80">{step.text}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold text-muted-foreground transition-colors group-hover:border-primary/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services" className="link-arrow group justify-center">
            Découvrir tous nos services <ArrowLink />
          </Link>
        </div>
      </div>
    </section>
  )
}
