import { Link } from 'react-router-dom'
import ArrowLink from './ArrowLink'
import { projects, type Project } from '../data/content'

interface ProjectHighlightsProps {
  title: string
  /** Noms de projets de la page Réalisations (src/data/content.ts). */
  names: string[]
}

/** Met en avant quelques réalisations existantes, avec un lien vers la page Réalisations. */
export default function ProjectHighlights({ title, names }: ProjectHighlightsProps) {
  const items = names
    .map((name) => projects.find((project) => project.name === name))
    .filter((project): project is Project => project !== undefined)

  return (
    <section className="bg-[#F7FAFC] py-16 sm:py-20">
      <div className="container-page">
        <h2 className="text-center font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight">{title}</h2>

        <div className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {items.map((project) => (
            <div key={project.name} className="flex flex-col items-center text-center">
              <div className="size-40 overflow-hidden rounded-full" style={{ background: project.gradient }}>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    className={project.fit === 'contain' ? 'h-full w-full object-contain p-6' : 'h-full w-full object-cover'}
                  />
                )}
              </div>
              <h3 className="mt-6 font-display text-xl">{project.name}</h3>
              <p className="mt-2 max-w-[18rem] text-sm font-semibold leading-relaxed text-foreground/80">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/realisations/" className="link-arrow group justify-center">
            Voir toutes nos réalisations <ArrowLink />
          </Link>
        </div>
      </div>
    </section>
  )
}
