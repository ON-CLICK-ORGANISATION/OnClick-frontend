interface ProcessStep {
  number: string
  title: string
  text: string
}

interface ProcessTimelineProps {
  eyebrow?: string
  title: string
  subtitle?: string
  steps: ProcessStep[]
}

export default function ProcessTimeline({ eyebrow, title, subtitle, steps }: ProcessTimelineProps) {
  return (
    <section className="bg-slate-orb text-slate-orb-foreground py-20 sm:py-24">
      <div className="container-page">
        {eyebrow && (
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        )}
        <h2 className="mt-4 text-center font-display text-[clamp(1.8rem,4vw,2.75rem)] leading-tight">{title}</h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-center text-sm sm:text-base leading-relaxed opacity-75">
            {subtitle}
          </p>
        )}

        <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Ligne de connexion (desktop uniquement) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[4.6rem] hidden h-px bg-white/15 lg:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center px-2 text-center">
              <span className="text-xs font-semibold tracking-widest opacity-60">{step.number}</span>
              <h3 className="mt-2 font-display text-lg">{step.title}</h3>
              <span className="relative z-10 my-4 size-2.5 shrink-0 rounded-full bg-primary" />
              <p className="max-w-[16rem] text-xs leading-relaxed opacity-75">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
