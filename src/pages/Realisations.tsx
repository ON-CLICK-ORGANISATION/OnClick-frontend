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
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-foreground/80">
          Chaque projet est pensé pour atteindre un objectif concret : attirer plus de clients, développer votre
          visibilité et accélérer votre croissance. Découvrez quelques-unes des entreprises que nous avons
          accompagnées et les résultats obtenus grâce à une stratégie digitale performante.
        </p>
      </section>

      <section className="container-page pb-16">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-14 max-w-6xl mx-auto">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex flex-col items-center text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] flex-shrink-0"
            >
              {/* Cercle avec image */}
              <div
                className="size-48 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
                style={{ background: project.gradient }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className={project.fit === 'contain' ? 'w-full h-full object-contain p-6' : 'w-full h-full object-cover'}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = project.gradient;
                        parent.style.display = 'flex';
                        parent.style.alignItems = 'center';
                        parent.style.justifyContent = 'center';
                        parent.innerHTML = `
                          <span class="text-4xl font-bold text-white opacity-60">
                            ${project.name.charAt(0)}
                          </span>
                        `;
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white opacity-60">
                      {project.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              <h2 className="mt-6 font-display text-xl">{project.name}</h2>
              <p className="mt-2 max-w-[18rem] text-sm sm:text-base font-semibold leading-relaxed text-foreground/80">
                {project.description}
              </p>
              <span className="link-arrow mt-4">
                Voir le projet <ArrowLink />
              </span>
            </a>
          ))}
        </div>
      </section>

      <ContactForm />
    </>
  )
}
