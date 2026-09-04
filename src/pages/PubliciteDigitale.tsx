import { Link } from 'react-router-dom'
import { Search, Share2, Monitor, UserPlus, RotateCcw, Palette } from 'lucide-react'
import ServiceTabsPanel from '../components/ServiceTabsPanel'
import ProcessTimeline from '../components/ProcessTimeline'
import TestimonialCarousel from '../components/TestimonialCarousel'
import ContactForm from '../components/ContactForm'
import { adsTabs, adsProcessSteps } from '../data/content'

const icons = [Search, Share2, Monitor, UserPlus, RotateCcw, Palette]

export default function PubliciteDigitale() {
  return (
    <>
      {/* Hero */}
      <section className="pt-6 sm:pt-8">
        <div className="mx-auto max-w-[1440px] px-2 sm:px-4">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] text-white">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
              <img
                src="/images/projects/publicite-digitale-bg.png"
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: 'calc(50% - 0cm) 50%' }}
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            <div className="relative grid items-center gap-8 px-6 py-20 sm:px-10 sm:py-28 md:py-36 lg:grid-cols-2 lg:gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary" style={{ transform: 'translateY(-1.8cm)' }}>
                  Agence de publicité digitale
                </p>
                <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1]" style={{ transform: 'translateY(-1.4cm)' }}>
                  Des campagnes qui
                  <br />
                  génèrent des résultats
                </h1>
                <Link
                  to="/demarrer-un-projet"
                  className="mt-9 inline-flex rounded-full bg-butter px-7 py-3 text-sm font-semibold text-butter-foreground transition-opacity hover:opacity-85"
                  style={{ transform: 'translateY(-1cm)' }}
                >
                  Démarrer un projet
                </Link>
              </div>

              <div className="relative hidden lg:block h-full">
                <div 
                  className="absolute top-[2%] right-[5%] w-[60%] bg-transparent rounded-xl p-5 border border-white/0" 
                  style={{ transform: 'translateY(-3cm) translateX(0.9cm)' }}
                >
                  <p className="text-[12px] leading-relaxed text-white/95">
                    Nous créons et gérons vos campagnes publicitaires sur Google, les réseaux sociaux et les plateformes digitales adaptées à votre activité.
                  </p>
                </div>
                
                <div 
                  className="absolute top-[42%] right-[5%] w-[60%] bg-transparent rounded-xl p-5 border border-white/0" 
                  style={{ transform: 'translateY(+2.8cm) translateX(0.9cm)' }}
                >
                  <p className="text-[12px] leading-relaxed text-white/95">
                    <strong> 
                      Nous définissons les bonnes audiences, les messages et les formats pour générer du trafic qualifié et atteindre vos objectifs : visibilité, prospects, rendez-vous ou ventes. 
                    </strong>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:hidden">
                <p className="text-sm sm:text-base leading-relaxed text-white/85">
                  Nous créons et gérons vos campagnes publicitaires sur Google, les réseaux sociaux et les plateformes digitales adaptées à votre activité.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-white/85">
                  Nous définissons les bonnes audiences, les messages et les formats pour générer du trafic qualifié et atteindre vos objectifs : visibilité, prospects, rendez-vous ou ventes.
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
            Des stratégies publicitaires sur mesure
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-foreground/80">
            Chaque campagne est construite autour de votre activité, de votre cible et de vos objectifs.
            Nous combinons analyse, ciblage, création publicitaire et optimisation pour concentrer votre budget sur les actions les plus performantes.
          </p>
        </div>
      </section>

      {/* Menu cliquable des services publicitaires */}
      <ServiceTabsPanel tabs={adsTabs} icons={icons} imagePrefix="publicite-digitale" />

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
                to="/strategie-de-marque"
                className="rounded-full border border-white/25 px-3 py-2 text-[10px] sm:text-xs font-semibold text-white transition-colors hover:bg-white/10 whitespace-nowrap"
              >
                Stratégie de marque
              </Link>
              <Link
                to="/service-ui-ux"
                className="rounded-full border border-white/25 px-3 py-2 text-[10px] sm:text-xs font-semibold text-white transition-colors hover:bg-white/10 whitespace-nowrap"
              >
                Service UI/UX
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
        title="Notre processus publicitaire"
        subtitle="Une méthode simple pour transformer votre budget publicitaire en résultats mesurables."
        steps={adsProcessSteps}
      />

      <TestimonialCarousel />

      <section className="container-page -mt-12 sm:-mt-16 lg:-mt-20 py-2 sm:py-4 z-10">
        <ContactForm />
      </section>
    </>
  )
}