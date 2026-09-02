import { Link } from 'react-router-dom'
import {
  Laptop,
  RefreshCw,
  Smartphone,
  Eye,
  ShoppingCart,
  Building,
  Building2,
  MousePointerClick,
} from 'lucide-react'
import ServiceTabsPanel from '../components/ServiceTabsPanel'
import ProcessTimeline from '../components/ProcessTimeline'
import TestimonialCarousel from '../components/TestimonialCarousel'
import ContactForm from '../components/ContactForm'
import { webTabs, webProcessSteps } from '../data/content'

const icons = [Laptop, RefreshCw, Smartphone, Eye, ShoppingCart, Building, Building2, MousePointerClick]

export default function CreationSiteWeb() {
  return (
    <>
      {/* Hero */}
      <section className="pt-6 sm:pt-8">
        <div className="mx-auto max-w-[1440px] px-2 sm:px-4">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] text-white">
            {/* Image de fond */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
              <img
                src="/images/projects/creation-site-web-bg.png"
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: 'calc(50% - 0cm) 50%' }}
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            <div className="relative grid items-center gap-8 px-6 py-20 sm:px-10 sm:py-28 md:py-36 lg:grid-cols-2 lg:gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary" style={{ transform: 'translateY(-1.8cm)' }}>
                  Expertise en création & développement web
                </p>
                <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1]" style={{ transform: 'translateY(-1.4cm)' }}>
                  Des sites web sur mesure
                  qui travaillent 
                  <br />
                  pour vous
                </h1>
                <Link
                  to="/demarrer-un-projet"
                  className="mt-9 inline-flex rounded-full bg-butter px-7 py-3 text-sm font-semibold text-butter-foreground transition-opacity hover:opacity-85"
                  style={{ transform: 'translateY(-1cm)' }}
                >
                  Démarrer un projet
                </Link>
              </div>

              {/* Textes à droite - 2 blocs */}
              <div className="relative hidden lg:block h-full">
                <div 
                  className="absolute top-[2%] right-[5%] w-[60%] bg-transparent rounded-xl p-5 border border-white/0" 
                  style={{ transform: 'translateY(-2.4cm) translateX(1cm)' }}
                >
                  <p className="text-[12px] leading-relaxed text-white/95">
                    Nous concevons des sites web sur mesure en combinant stratégie, UX, design, contenu, développement et SEO.
                  </p>
                </div>
                
                <div 
                  className="absolute top-[42%] right-[5%] w-[60%] bg-transparent rounded-xl p-5 border border-white/0" 
                  style={{ transform: 'translateY(+3.2cm) translateX(1cm)' }}
                >
                  <p className="text-[12px] leading-relaxed text-white/95">
                    <strong> 
                      Chaque site est pensé autour de votre activité, de vos clients et de vos objectifs pour offrir une expérience claire, efficace et performante. 
                    </strong>
                  </p>
                </div>
              </div>

              {/* Version mobile */}
              <div className="flex flex-col gap-4 lg:hidden">
                <p className="text-sm sm:text-base leading-relaxed text-white/85">
                  Nous concevons des sites web sur mesure en combinant stratégie, UX, design, contenu, développement et SEO.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-white/85">
                  Chaque site est pensé autour de votre activité, de vos clients et de vos objectifs pour offrir une expérience claire, efficace et performante.
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
            Conception et développement web
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-foreground/80">
            Notre approche combine stratégie digitale, UX, design visuel, développement web et référencement
            naturel. Chaque site que nous créons est unique et pensé autour de votre activité, de votre cible et
            de l'objectif que le site doit atteindre.
          </p>
        </div>
      </section>

      {/* Menu cliquable des services de création web */}
      <ServiceTabsPanel tabs={webTabs} icons={icons} imagePrefix="creation-site-web" />

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