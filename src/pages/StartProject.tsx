import DotSwirl from '../components/DotSwirl'
import ContactForm from '../components/ContactForm'
import { processSteps } from '../data/content'

export default function StartProject() {
  return (
    <section className="container-page grid items-center gap-10 py-16 md:grid-cols-2">
      <div>
        <h1 className="font-display text-[clamp(2.3rem,5.5vw,3.75rem)] leading-[1.05]">
          Construisons ensemble votre réussite.
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/80">
          Décrivez votre projet en quelques lignes : nous revenons vers vous sous 24 heures avec un premier avis
          honnête et des recommandations actionnables.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.number}>
              <span className="font-display text-2xl text-primary">{step.number}</span>
              <h2 className="mt-1 text-sm font-bold">{step.title}</h2>
              <p className="mt-1 text-xs text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>

        <ContactForm />
      </div>

      <DotSwirl className="hidden w-full md:block" count={40} seed={21} />
    </section>
  )
}
