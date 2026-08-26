import { Link } from 'react-router-dom'
import {
  Search,
  Settings,
  MapPin,
  ShoppingCart,
  ClipboardList,
  Sparkles,
  Link2,
  PenLine,
  Building2,
} from 'lucide-react'
import ServiceTabsPanel from '../components/ServiceTabsPanel'
import ProcessTimeline from '../components/ProcessTimeline'
import TestimonialCarousel from '../components/TestimonialCarousel'
import ContactForm from '../components/ContactForm'
import { seoTabs, seoProcessSteps } from '../data/content'

const icons = [Settings, MapPin, ShoppingCart, ClipboardList, Sparkles, Link2, PenLine, Building2]

export default function SeoAeoGeo() {
  return (
    <>
      {/* Hero */}
      <section className="pt-6 sm:pt-8">
        <div className="mx-auto max-w-[1440px] px-2 sm:px-4">
          <div className="overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-slate-orb text-slate-orb-foreground">
            <div className="grid items-center gap-10 px-6 py-14 sm:px-10 sm:py-16 md:grid-cols-2 md:py-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Agence SEO & GEO</p>
                <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.08]">
                  Améliorez votre visibilité sur Google et sur l'IA
                </h1>
                <p className="mt-6 max-w-md text-sm sm:text-base leading-relaxed opacity-80">
                  Chaque marché a ses propres enjeux. Nous analysons votre site, vos contenus, vos concurrents et
                  les recherches de vos clients pour identifier les meilleures opportunités.
                </p>
                <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed opacity-80">
                  Nous construisons ensuite une stratégie SEO & GEO adaptée à votre activité pour améliorer votre
                  visibilité sur Google et dans les moteurs de recherche basés sur l'IA, avec des actions
                  concrètes et durables.
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
                    <Search className="size-16 text-primary" strokeWidth={1.1} />
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
            Des stratégies SEO sur mesure
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-foreground/80">
            Nous construisons votre stratégie SEO en fonction de votre activité, de vos objectifs et de votre
            marché. Analyse technique, étude de la concurrence, création de contenus et optimisation : chaque
            action est pensée pour améliorer votre visibilité et attirer les bons clients.
          </p>
        </div>
      </section>

      {/* Menu cliquable des services SEO */}
      <ServiceTabsPanel tabs={seoTabs} icons={icons} />

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
            <div className="flex flex-wrap gap-3">
              <Link
                to="/strategie-digitale"
                className="rounded-full border border-white/25 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Stratégie digitale
              </Link>
              <Link
                to="/creation-site-web"
                className="rounded-full border border-white/25 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Création de site web
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
        title="Nos 90 premiers jours"
        subtitle="Une méthode progressive pour améliorer rapidement votre visibilité et construire des bases solides."
        steps={seoProcessSteps}
      />

      <TestimonialCarousel />

      <section className="container-page -mt-12 sm:-mt-16 lg:-mt-20 py-2 sm:py-4 z-10">
        <ContactForm />
      </section>
    </>
  )
}
