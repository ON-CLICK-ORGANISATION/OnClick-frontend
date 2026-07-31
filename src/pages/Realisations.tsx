import ArrowLink from '../components/ArrowLink'
import ContactForm from '../components/ContactForm'
import { projects } from '../data/content'

export default function Realisations() {
  return (
    <>
      <section className="container-page py-20">
        <h1 className="max-w-3xl font-display text-[clamp(2.3rem,5.5vw,3.75rem)] leading-[1.05]">
          Des stratégies qui produisent des résultats
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/80">
          Chaque projet est pensé pour atteindre un objectif concret : attirer plus de clients, développer votre
          visibilité et accélérer votre croissance. Découvrez quelques-unes des entreprises que nous avons
          accompagnées et les résultats obtenus grâce à une stratégie digitale performante.
        </p>
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className={`group flex flex-col items-center text-center ${
                i % 3 === 1 ? 'lg:mt-14' : ''
              }`}
            >
              <span
                className="size-48 rounded-full transition-transform duration-300 group-hover:scale-105"
                style={{ background: project.gradient }}
              />
              <h2 className="mt-6 font-display text-xl">{project.name}</h2>
              <p className="mt-2 max-w-[18rem] text-xs font-semibold leading-relaxed text-foreground/80">
                {project.description}
              </p>
              <span className="link-arrow mt-4">
                Voir le projet <ArrowLink />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="container-page py-24" id="contact">
        <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight">
          Construisons ensemble votre réussite.
        </h2>
        <ContactForm />
      </section>
    </>
  )
}
