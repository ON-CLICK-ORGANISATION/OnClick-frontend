import { Link } from 'react-router-dom'
import DotSwirl from '../components/DotSwirl'
import ArrowLink from '../components/ArrowLink'
import TestimonialCarousel from '../components/TestimonialCarousel'
import ContactForm from '../components/ContactForm'
import { LaptopMockup, PhoneMockup } from '../components/DeviceMockups'
import ServicesSection from "../components/ServiceSection.tsx";
import { heroProject, featuredProjects } from '../data/content'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-page grid items-center gap-8 py-8 md:grid-cols-2 md:py-12">
        <div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05]">
           <span className="text-[#FDE68A]">Only Clik,</span>
            un partenaire proche de vous.
          </h1>
          <p className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-foreground/80">
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

      {/* Hero showcase orb — "Projet Vedette" - GRAND ROND AGRANDI */}
      <section className="relative overflow-hidden pb-10 sm:pb-16">
        <div className="container-page relative">
          {/* Grand rond - AGRANDI AVEC OVERFLOW VISIBLE */}
          <div
            className="relative mx-auto w-[115%] -ml-[7.5%] sm:w-[108%] sm:-ml-[4%] md:w-[104%] md:-ml-[2%] lg:w-[102%] lg:-ml-[1%] max-w-[1280px] aspect-square rounded-full text-slate-orb-foreground overflow-visible"
            style={{ backgroundColor: '#5D6A7D' }}
          >
            <div
              className="flex h-full flex-col items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 px-3 sm:px-4 md:px-6"
            >
              {/* Bloc Mockups + Texte - ESPACE AUGMENTÉ ENTRE IMAGE ET TEXTES */}
              <a
                href={heroProject.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex w-full flex-col items-center gap-1 sm:gap-3 md:gap-4 lg:flex-row lg:items-center lg:gap-20 -mt-32 sm:-mt-40 md:-mt-48 lg:-mt-56"
              >
                {/* Mockups - AGRANDIS POUR DÉBORDER */}
                <div
                  className="relative flex items-center justify-center w-full max-w-[16rem] sm:max-w-[20rem] md:max-w-[30rem] lg:max-w-[42rem] shrink-0 scale-100 sm:scale-105 md:scale-110"
                >
                  <PhoneMockup
                    screenshot={heroProject.imageMobile}
                    alt={`Version mobile du site ${heroProject.name}`}
                    className="absolute left-[-0.5rem] sm:left-[-0.2rem] md:left-[0.2rem] lg:left-[0.8rem] bottom-0 z-10 w-[2.2rem] sm:w-[3rem] md:w-[5rem] lg:w-[7.5rem] rotate-[-6deg] transition-transform duration-300 group-hover:rotate-[-3deg] group-hover:scale-105"
                  />
                  <LaptopMockup
                    screenshot={heroProject.image!}
                    alt={`Aperçu du site ${heroProject.name}`}
                    className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                {/* Texte - POLICE AUGMENTÉE + FLÈCHE AGRANDIE */}
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6 lg:gap-8 text-center sm:text-left">
                  <div>
                    <h2 className="font-display text-base sm:text-lg md:text-3xl lg:text-4xl">
                      {heroProject.name}
                    </h2>
                    <p className="mt-0.5 sm:mt-1 md:mt-2 max-w-[10rem] sm:max-w-[13rem] md:max-w-[15rem] lg:max-w-[17rem] text-[12px] sm:text-sm md:text-lg lg:text-xl font-semibold leading-relaxed opacity-90">
                      {heroProject.description}
                    </p>
                  </div>
                  <ArrowLink className="mt-0.5 sm:mt-1 shrink-0 hidden sm:inline-flex scale-125 sm:scale-150" />
                </div>
              </a>
              {/* Texte "Des résultats..." - écart réduit */}
              <p className="text-center font-display text-[22px] sm:text-[28px] md:text-[36px] lg:text-[44px] px-1 sm:px-2 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                Des résultats qui font la différence.
              </p>
            </div>
          </div>

          {/* 3 projets en dessous - écart réduit */}
          <div className="relative -mt-40 sm:-mt-44 md:-mt-48 lg:-mt-52">
            <div className="grid gap-10 sm:gap-12 grid-cols-1 sm:grid-cols-3 sm:gap-x-24 sm:gap-y-6 max-w-6xl mx-auto">
              {featuredProjects.map((project, i) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`group flex flex-col items-center text-center ${
                    i === 1 
                      ? 'sm:-mt-24 md:-mt-28 lg:-mt-32' 
                      : 'sm:-mt-[3px] md:-mt-[4px] lg:-mt-[5px]'
                  }`}
                >
                  <span
                    className="size-56 sm:size-66 md:size-76 lg:size-96 overflow-hidden rounded-full shadow-lg border-4 border-white transition-all duration-500 ease-out hover:scale-110 hover:shadow-2xl hover:rotate-3 cursor-pointer"
                    style={{ background: project.gradient }}
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                  </span>
                  {/* NOM DU PROJET - AGRANDI */}
                  <h3 className="mt-3 sm:mt-4 md:mt-6 font-display text-base sm:text-lg md:text-2xl text-[#1E293B] group-hover:text-[#EAB308] transition-colors duration-300">
                    {project.name}
                  </h3>
                  {/* DESCRIPTION - AGRANDIE */}
                  <p className="mt-1 sm:mt-2 max-w-[12rem] sm:max-w-[14rem] md:max-w-[16rem] text-[13px] sm:text-base md:text-lg font-semibold leading-relaxed text-[#64748B]">
                    {project.description}
                  </p>
                  {/* VOIR LE PROJET - AGRANDI */}
                  <span className="link-arrow mt-2 sm:mt-3 md:mt-4 text-[#2B6CB0] group-hover:text-[#EAB308] transition-colors duration-300 text-sm sm:text-base">
                    Voir le projet <ArrowLink />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*<MethodSection />*/}
      <ServicesSection />
      <TestimonialCarousel />

      {/* Contact */}
      <section className="container-page -mt-12 sm:-mt-16 lg:-mt-20 py-2 sm:py-4 z-10">
        <ContactForm />
      </section>
    </>
  )
}
