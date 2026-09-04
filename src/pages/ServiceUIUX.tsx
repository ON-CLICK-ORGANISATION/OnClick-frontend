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
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] text-white">
            {/* Image de fond non floutée */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
              <img
                src="/images/projects/uiux-design-bg.png"
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: 'calc(50% -0cm) 50%' }}
              />
              {/* Overlay très léger à 5% */}
              <div className="absolute inset-0 bg-black/5" />
            </div>

            <div className="relative grid items-center gap-8 px-6 py-20 sm:px-10 sm:py-28 md:py-36 lg:grid-cols-2 lg:gap-8">
              <div>
                {/* Titre bleu - modifie translateY pour le monter/descendre */}
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary" style={{ transform: 'translateY(-1.8cm)' }}>
                  Agence UI/UX Design
                </p>
                <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1]" style={{ transform: 'translateY(-1.2cm)' }}>
                  Des interfaces simples, intuitives et
                  <br />
                  agréables à utiliser
                </h1>
                <Link
                  to="/demarrer-un-projet"
                  className="mt-9 inline-flex rounded-full bg-butter px-7 py-3 text-sm font-semibold text-butter-foreground transition-opacity hover:opacity-85"
                  style={{ transform: 'translateY(-1cm)' }}
                >
                  Démarrer un projet
                </Link>
              </div>

              {/* Textes à droite - 2 blocs uniquement */}
              <div className="relative hidden lg:block h-full">
                {/* Bloc 1 - haut */}
                <div 
                  className="absolute top-[2%] right-[5%] w-[60%] bg-black/30 backdrop-blur-md rounded-xl p-5 border border-white/10" 
                  style={{ transform: 'translateY(-3.2cm) translateX(0.8cm)' }}
                >
                  <p className="text-[12px] leading-relaxed text-white/95">
                    Nous concevons des interfaces simples, intuitives et agréables à utiliser.
                  </p>
                </div>
                
                {/* Bloc 2 - milieu */}
                <div 
                  className="absolute top-[42%] right-[5%] w-[60%] bg-black/30 backdrop-blur-md rounded-xl p-5 border border-white/10" 
                  style={{ transform: 'translateY(+3.4cm) translateX(0.8cm)' }}
                >
                  <p className="text-[12px] leading-relaxed text-white/95">
                    <strong> 
                      Nous travaillons l'expérience utilisateur, la navigation et le design pour rendre chaque parcours plus clair et faciliter l'action, sur tous les écrans. 
                    </strong>
                  </p>
                </div>
              </div>

              {/* Version mobile/tablette : textes en colonne normale (2 paragraphes uniquement) */}
              <div className="flex flex-col gap-4 lg:hidden">
                <p className="text-sm sm:text-base leading-relaxed text-white/85">
                  Nous concevons des interfaces simples, intuitives et agréables à utiliser.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-white/85">
                  Nous travaillons l'expérience utilisateur, la navigation et le design pour rendre chaque parcours plus clair et faciliter l'action, sur tous les écrans.
                </p>
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
      <ServiceTabsPanel tabs={uiuxTabs} icons={icons} imagePrefix="uiux" />

      {/* Services liés */}
      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-2 sm:px-4">
          <div
            className="flex flex-col gap-6 rounded-3xl px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10"
            style={{ background: 'linear-gradient(120deg, oklch(0.45 0.07 200), oklch(0.28 0.05 210))' }}
          >
            <h3 className="font-display text-xl text-white sm:text-2xl">
              Services <span className="italic opacity-90">liés</span>
            </h3>
            <div className="flex flex-nowrap gap-1.5 overflow-x-auto pb-2">
              <Link
                to="/creation-site-web"
                className="rounded-full border border-white/25 px-3 py-2 text-[10px] sm:text-xs font-semibold text-white transition-colors hover:bg-white/10 whitespace-nowrap"
              >
                Création de site web
              </Link>
              <Link
                to="/publicite-digitale"
                className="rounded-full border border-white/25 px-3 py-2 text-[10px] sm:text-xs font-semibold text-white transition-colors hover:bg-white/10 whitespace-nowrap"
              >
                Publicité digitale
              </Link>
              <Link
                to="/strategie-de-marque"
                className="rounded-full border border-white/25 px-3 py-2 text-[10px] sm:text-xs font-semibold text-white transition-colors hover:bg-white/10 whitespace-nowrap"
              >
                Stratégie de marque
              </Link>
              <Link
                to="/seo-aeo-geo"
                className="rounded-full border border-white/25 px-3 py-2 text-[10px] sm:text-xs font-semibold text-white transition-colors hover:bg-white/10 whitespace-nowrap"
              >
                SEO, AEO & GEO
              </Link>
              <Link
                to="/strategie-digitale"
                className="rounded-full border border-white/25 px-3 py-2 text-[10px] sm:text-xs font-semibold text-white transition-colors hover:bg-white/10 whitespace-nowrap"
              >
                Stratégie digitale
              </Link>
              <Link
                to="/services"
                className="rounded-full bg-white px-3 py-2 text-[10px] sm:text-xs font-semibold text-[#1E293B] transition-opacity hover:opacity-85 whitespace-nowrap"
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
