import { Link } from 'react-router-dom'
import DotSwirl from '../components/DotSwirl'
import ArrowLink from '../components/ArrowLink'
import TestimonialCarousel from '../components/TestimonialCarousel'
import ContactForm from '../components/ContactForm'
import { LaptopMockup, PhoneMockup } from '../components/DeviceMockups'
// import MethodSection from '../components/MethodSection'
import ServicesSection from "../components/ServiceSection.tsx";
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

      {/* Hero showcase orb — "Projet Vedette" */}
      <section className="relative overflow-hidden pb-24">
        <div className="container-page relative">
          <div className="relative mx-auto aspect-square w-full max-w-[760px] rounded-full bg-slate-orb text-slate-orb-foreground">
            <div className="flex h-full flex-col items-center justify-center gap-10 px-6">
              {/* Device mockups + title/description row */}
              <a
                href={heroProject.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex w-full max-w-[26rem] flex-col items-center gap-6 sm:max-w-[30rem] sm:flex-row sm:items-center sm:gap-5"
              >
                {/* Laptop + Mobile overlap mockup, allowed to bleed past the circle's left edge */}
                <div className="relative w-full max-w-[13rem] shrink-0 sm:-ml-14">
                  <LaptopMockup
                    screenshot={heroProject.image!}
                    alt={`Aperçu du site ${heroProject.name}`}
                    className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <PhoneMockup
                    screenshot={heroProject.imageMobile}
                    alt={`Version mobile du site ${heroProject.name}`}
                    className="absolute -bottom-6 -left-7 w-[3.2rem] rotate-[-10deg] transition-transform duration-300 group-hover:rotate-[-5deg]"
                  />
                </div>

                {/* Title, description, arrow */}
                <div className="flex items-start gap-3 text-left">
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl">{heroProject.name}</h2>
                    <p className="mt-2 max-w-[13rem] text-xs font-semibold leading-relaxed opacity-90">
                      {heroProject.description}
                    </p>
                  </div>
                  <ArrowLink className="mt-1 shrink-0" />
                </div>
              </a>

              <p className="text-center font-display text-2xl md:text-3xl">
                Des résultats qui font la différence.
              </p>
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
                <span className="size-40 overflow-hidden rounded-full shadow-lg" style={{ background: project.gradient }}>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                </span>
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

      {/*<MethodSection />*/}
      <ServicesSection />
      <TestimonialCarousel />


      {/* Contact */}
     <ContactForm />
    </>
  )
}
