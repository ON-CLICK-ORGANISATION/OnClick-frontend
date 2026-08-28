import { Link } from 'react-router-dom'
import { Code2, Palette, Search, Rocket } from 'lucide-react'
import { LaptopMockup, PhoneMockup } from '../components/DeviceMockups'
import ProcessTimeline from '../components/ProcessTimeline'
import TestimonialCarousel from '../components/TestimonialCarousel'
import ContactForm from '../components/ContactForm'
import { heroProject, webProcessSteps } from '../data/content'

export default function CreationSiteWeb() {
  return (
    <>
      {/* Hero — reprend le style du mockup laptop/mobile de l'accueil (photo Amalthéa) */}
      <section className="pt-6 sm:pt-8">
        {/* Largeur remise à 1440px (les côtés sont parfaits) */}
        <div className="mx-auto max-w-[1440px] px-2 sm:px-4">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] text-white">
            {/* Fond photo floutée/assombrie */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-110 blur-[2px]"
              style={{ backgroundImage: `url(${heroProject.image})` }}
            />
            <div className="absolute inset-0 bg-black/55" />

            {/* Agrandissement en hauteur : py-14 -> py-20, sm:py-16 -> sm:py-28, md:py-20 -> md:py-36 */}
            <div className="relative grid items-center gap-8 px-6 py-20 sm:px-10 sm:py-28 md:py-36 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary" style={{ transform: 'translateY(-1.4cm)' }}>Création de site web</p>
                <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1]">
                  Création de site web
                  <br />
                  sur mesure
                </h1>
                <Link
                  to="/demarrer-un-projet"
                  className="mt-9 inline-flex rounded-full bg-butter px-7 py-3 text-sm font-semibold text-butter-foreground transition-opacity hover:opacity-85"
                >
                  Démarrer un projet
                </Link>
              </div>

              <div className="flex items-end justify-center gap-2 sm:gap-3 lg:px-2">
                <PhoneMockup
                  screenshot={heroProject.imageMobile}
                  alt={`Version mobile du site ${heroProject.name}`}
                  className="w-14 sm:w-16 md:w-20 shrink-0 mb-2"
                />
                <LaptopMockup
                  screenshot={heroProject.image!}
                  alt={`Aperçu du site ${heroProject.name}`}
                  className="w-full max-w-[11rem] sm:max-w-[14rem] md:max-w-xs lg:max-w-sm"
                />
              </div>

              <div className="flex flex-col gap-4">
                {/* Paragraphe du haut remonté de 3cm au total */}
                <p className="text-[11px] sm:text-xs leading-relaxed text-white/85" style={{ transform: 'translateY(-2.6cm)' }}>
                  Votre site web est souvent le premier endroit où un client potentiel se fait une opinion sur
                  vous, sans que vous soyez là pour vous présenter. En quelques secondes, il doit comprendre ce
                  que vous faites, pourquoi vous êtes la bonne option, et avoir envie d'aller plus loin.
                </p>
                {/* Paragraphe du bas descendu de 2.5cm */}
                <p className="text-[11px] sm:text-xs leading-relaxed text-white/85" style={{ transform: 'translateY(1.5cm)' }}>
                  Chez Only Clik, on ne crée pas des sites pour faire joli. On crée des sites qui travaillent pour
                  vous : visibles sur Google, clairs pour vos visiteurs, et conçus pour transformer un inconnu en
                  client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conception et développement web */}
      <section className="py-20 sm:py-24">
        <div className="container-page mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight">
            Conception et développement web
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-foreground/80">
            Notre approche combine stratégie digitale, UX, design visuel, développement web et référencement
            naturel. Chaque site que nous créons est unique et pensé autour de votre activité, de votre cible et
            de l'objectif que le site doit atteindre.
          </p>
        </div>
      </section>

      {/* Un site sur mesure, à votre image */}
      <section className="py-6 pb-20 sm:pb-24">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.25rem)] leading-tight">
              Un site web sur mesure, à votre image
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-foreground/80">
              Un bon site doit ressembler à votre entreprise. Nos prestations de création de site web démarrent
              par une analyse de votre activité, de votre clientèle cible et de vos objectifs commerciaux. On
              définit ensuite l'architecture des pages, les contenus, l'identité visuelle et les fonctionnalités
              dont vous avez besoin.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/80">
              WordPress, Webflow ou développement sur mesure : le choix de la technologie vient en dernier, une
              fois que la stratégie est claire.
            </p>
          </div>

          <div
            className="grid grid-cols-2 gap-4 rounded-3xl p-8"
            style={{ background: 'linear-gradient(140deg, oklch(0.45 0.07 200), oklch(0.26 0.05 210))' }}
          >
            {[
              { Icon: Search, label: 'Analyse & stratégie' },
              { Icon: Palette, label: 'Design & UX' },
              { Icon: Code2, label: 'Développement' },
              { Icon: Rocket, label: 'Lancement & suivi' },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white/10 p-5 text-center text-white backdrop-blur-sm"
              >
                <Icon className="size-7" strokeWidth={1.75} />
                <span className="text-xs font-semibold leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de création de site web */}
      <ProcessTimeline
        eyebrow="Processus"
        title="Notre méthode de création de site web"
        subtitle="Une démarche structurée, pensée pour livrer un site performant dès le premier jour et qui continue à produire des résultats sur le long terme."
        steps={webProcessSteps}
      />

      <TestimonialCarousel />

      <section className="container-page -mt-12 sm:-mt-16 lg:-mt-20 py-2 sm:py-4 z-10">
        <ContactForm />
      </section>
    </>
  )
}
