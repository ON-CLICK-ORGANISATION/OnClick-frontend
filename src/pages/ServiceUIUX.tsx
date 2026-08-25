import { Link } from 'react-router-dom'
import {
  Search,
  ClipboardCheck,
  MousePointerClick,
  LayoutTemplate,
  Component,
  FileStack,
  Smartphone,
  LayoutDashboard,
} from 'lucide-react'
import ServiceTabsPanel from '../components/ServiceTabsPanel'
import ProcessTimeline from '../components/ProcessTimeline'
import TestimonialCarousel from '../components/TestimonialCarousel'
import ContactForm from '../components/ContactForm'
import { uiuxTabs, uiuxProcessSteps } from '../data/content'

const icons = [
  Search,
  ClipboardCheck,
  MousePointerClick,
  LayoutTemplate,
  Component,
  FileStack,
  Smartphone,
  LayoutDashboard,
]

export default function ServiceUIUX() {
  return (
    <>
      {/* Hero */}
      <section className="pt-6 sm:pt-8">
        <div className="mx-auto max-w-[1440px] px-2 sm:px-4">
          <div className="overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-slate-orb text-slate-orb-foreground">
            <div className="grid items-center gap-10 px-6 py-14 sm:px-10 sm:py-16 md:grid-cols-2 md:py-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Agence UI/UX Design</p>
                <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.08]">
                  Des interfaces simples, intuitives et agréables à utiliser
                </h1>
                <p className="mt-6 max-w-md text-sm sm:text-base leading-relaxed opacity-80">
                  Nous concevons des interfaces simples, intuitives et agréables à utiliser.
                </p>
                <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed opacity-80">
                  Nous travaillons l'expérience utilisateur, la navigation et le design pour rendre chaque
                  parcours plus clair et faciliter l'action, sur tous les écrans.
                </p>
                <Link
                  to="/demarrer-un-projet"
                  className="mt-9 inline-flex rounded-full bg-butter px-7 py-3 text-sm font-semibold text-butter-foreground transition-opacity hover:opacity-85"
                >
                  Démarrer un projet
                </Link>
              </div>
              <div className="hidden aspect-square w-full items-center justify-center rounded-full md:flex" style={{ background: 'radial-gradient(circle at 35% 30%, oklch(0.72 0.13 205 / 25%), transparent 65%)' }}>
                <div className="relative flex size-4/5 items-center justify-center rounded-full border border-white/10">
                  <div className="flex size-3/5 items-center justify-center rounded-full border border-primary/25 bg-white/[0.04]">
                    <LayoutTemplate className="size-16 text-primary" strokeWidth={1.1} />
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
            UI/UX, expériences digitales
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-foreground/80">
            Nous combinons stratégie, design et tests pour créer des sites, plateformes et applications plus
            simples à utiliser et plus efficaces.
          </p>
        </div>
      </section>

      {/* Menu cliquable des services UI/UX */}
      <ServiceTabsPanel tabs={uiuxTabs} icons={icons} />

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
                to="/creation-site-web"
                className="rounded-full border border-white/25 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Création de site web
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
        title="Notre processus UI/UX"
        subtitle="Une méthode structurée pour créer des interfaces simples, efficaces et adaptées aux utilisateurs."
        steps={uiuxProcessSteps}
      />

      <TestimonialCarousel />

      <section className="container-page -mt-12 sm:-mt-16 lg:-mt-20 py-2 sm:py-4 z-10">
        <ContactForm />
      </section>
    </>
  )
}
