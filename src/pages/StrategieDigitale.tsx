import { Link } from 'react-router-dom'
import { Search, Megaphone, PenLine, ClipboardCheck, Palette, Code2 } from 'lucide-react'
import ServiceTabsPanel from '../components/ServiceTabsPanel'
import ProcessTimeline from '../components/ProcessTimeline'
import TestimonialCarousel from '../components/TestimonialCarousel'
import ContactForm from '../components/ContactForm'
import { digitalTabs, digitalProcessSteps } from '../data/content'

const icons = [Search, Megaphone, PenLine, ClipboardCheck, Palette, Code2]

export default function StrategieDigitale() {
  return (
    <>
      {/* Hero */}
      <section className="pt-6 sm:pt-8">
        <div className="mx-auto max-w-[1440px] px-2 sm:px-4">
          <div className="overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-slate-orb text-slate-orb-foreground">
            <div className="grid items-center gap-10 px-6 py-14 sm:px-10 sm:py-16 md:grid-cols-2 md:py-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Stratégie digitale</p>
                <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.08]">
                  Une agence marketing basée sur la stratégie
                </h1>
                <p className="mt-6 max-w-md text-sm sm:text-base leading-relaxed opacity-80">
                  Nous analysons votre marché, vos clients, vos concurrents et vos performances pour identifier
                  les meilleures opportunités.
                </p>
                <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed opacity-80">
                  Nous construisons ensuite un plan marketing sur mesure, avec des actions adaptées à chaque
                  canal et à vos objectifs. Chaque campagne répond à un objectif précis : attirer, convertir et
                  fidéliser vos clients.
                </p>
                <Link
                  to="/demarrer-un-projet"
                  className="mt-9 inline-flex rounded-full bg-butter px-7 py-3 text-sm font-semibold text-butter-foreground transition-opacity hover:opacity-85"
                >
                  Démarrer un projet
                </Link>
              </div>
              <div
                className="hidden aspect-square w-full items-center justify-center rounded-full md:flex"
                style={{ background: 'radial-gradient(circle at 35% 30%, oklch(0.72 0.13 205 / 25%), transparent 65%)' }}
              >
                <div className="relative flex size-4/5 items-center justify-center rounded-full border border-white/10">
                  <div className="flex size-3/5 items-center justify-center rounded-full border border-primary/25 bg-white/[0.04]">
                    <Megaphone className="size-16 text-primary" strokeWidth={1.1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-24">
        <div className="container-page mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight">
            Des stratégies marketing sur mesure
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-foreground/80">
            Nous construisons votre stratégie marketing autour de votre activité, de votre marché et de vos
            objectifs. Une approche complète basée sur l'analyse, la concurrence et les leviers les plus adaptés à
            votre croissance.
          </p>
        </div>
      </section>

      {/* Menu cliquable des services marketing */}
      <ServiceTabsPanel tabs={digitalTabs} icons={icons} />

      {/* Services liés */}
      <section className="py-16">
        <div className="container-page">
          <div
            className="flex flex-col gap-6 rounded-3xl px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10"
            style={{ background: 'linear-gradient(120deg, oklch(0.45 0.07 200), oklch(0.28 0.05 210))' }}
          >
            <h3 className="font-display text-xl text-white sm:text-2xl">
              Services <span className="italic opacity-90">liés</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/seo-aeo-geo"
                className="rounded-full border border-white/25 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                SEO, AEO & GEO
              </Link>
              <Link
                to="/strategie-de-marque"
                className="rounded-full border border-white/25 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Stratégie de marque
              </Link>
              <Link
                to="/services"
                className="rounded-full bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#1E293B] transition-opacity hover:opacity-85"
              >
                Toutes nos prestations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <ProcessTimeline
        eyebrow="Processus"
        title="Notre processus marketing"
        subtitle="Une méthode simple pour transformer l'analyse de votre marché en actions concrètes et mesurables."
        steps={digitalProcessSteps}
      />

      <TestimonialCarousel />

      <section className="container-page -mt-12 sm:-mt-16 lg:-mt-20 py-2 sm:py-4 z-10">
        <ContactForm />
      </section>
    </>
  )
}
