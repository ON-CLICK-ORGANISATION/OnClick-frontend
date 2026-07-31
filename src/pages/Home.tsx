import { Link } from 'react-router-dom'
import DotSwirl from '../components/DotSwirl'
import ArrowLink from '../components/ArrowLink'
import TestimonialCarousel from '../components/TestimonialCarousel'
import ContactForm from '../components/ContactForm'
import { heroProject, featuredProjects, expertises } from '../data/content'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05]">
            Only Clik, un partenaire proche de vous.
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/80">
            Only Clik, l'agence digitale qui aide les professionnels à exister en ligne, attirer plus de clients et
            développer leur activité.
          </p>
          <Link
            to="/demarrer-un-projet"
            className="mt-9 inline-flex rounded-full bg-butter px-7 py-3 text-sm font-semibold text-butter-foreground transition-opacity hover:opacity-85"
          >
            Discutons-en
          </Link>
        </div>
        <DotSwirl className="w-full" count={40} seed={7} />
      </section>

      {/* Hero showcase orb */}
      <section className="relative overflow-hidden pb-24">
        <div className="container-page relative">
          <div className="relative mx-auto aspect-square w-full max-w-[760px] rounded-full bg-slate-orb px-8 py-16 text-slate-orb-foreground sm:px-16">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <a href={heroProject.url} target="_blank" rel="noreferrer noopener" className="group block max-w-sm">
                <div className="mx-auto mb-8 aspect-[16/10] w-full max-w-xs overflow-hidden rounded-xl bg-background/95 p-3 shadow-2xl">
                  <div className="flex h-full flex-col justify-between rounded-lg bg-mist p-4 text-left text-foreground">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      amalthea-studio.com
                    </span>
                    <span className="font-display text-xl">Pilates en ligne</span>
                    <span className="text-3xl font-bold text-primary">+87%</span>
                  </div>
                </div>
                <h2 className="font-display text-3xl">Amalthéa Studio</h2>
                <p className="mt-3 text-xs font-semibold leading-relaxed opacity-90">{heroProject.description}</p>
                <span className="mt-5 inline-flex">
                  <ArrowLink />
                </span>
              </a>
              <p className="mt-12 font-display text-2xl md:text-3xl">Des résultats qui font la différence.</p>
            </div>
          </div>

          <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-6">
            {featuredProjects.map((project, i) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                className={`group flex flex-col items-center text-center ${i === 1 ? 'sm:-mt-10' : ''}`}
              >
                <span className="size-40 rounded-full" style={{ background: project.gradient }} />
                <h3 className="mt-6 font-display text-xl">{project.name}</h3>
                <p className="mt-2 max-w-[16rem] text-xs font-semibold leading-relaxed text-foreground/80">
                  {project.description}
                </p>
                <span className="link-arrow mt-4">
                  Voir le projet <ArrowLink />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="bg-mist py-24">
        <div className="container-page">
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)]">Vos objectifs, nos expertises</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {expertises.map((item) => (
              <article key={item.title} className="flex flex-col justify-between bg-card p-8">
                <div>
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-4 text-xs font-semibold leading-relaxed text-foreground/80">{item.text}</p>
                </div>
                <Link to="/demarrer-un-projet" className="link-arrow group mt-8 justify-between">
                  {item.cta} <ArrowLink />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      {/* Contact */}
      <section className="container-page py-24" id="contact">
        <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight">
          Construisons ensemble votre réussite.
        </h2>
        <p className="mt-4 max-w-xl text-sm text-muted-foreground">
          Parlez-nous de votre activité et de vos objectifs. Nous vous répondons sous 24 heures avec des premières
          pistes concrètes.
        </p>
        <ContactForm />
      </section>
    </>
  )
}
