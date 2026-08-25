import { Link } from 'react-router-dom'
import DotSwirl from '../components/DotSwirl'
import BrandServicesTabs from '../components/BrandServicesTabs'
import ProcessTimeline from '../components/ProcessTimeline'
import TestimonialCarousel from '../components/TestimonialCarousel'
import ContactForm from '../components/ContactForm'
import { brandProcessSteps } from '../data/content'

export default function StrategieMarque() {
  return (
    <>
      {/* Hero */}
      <section className="pt-6 sm:pt-8">
        <div className="mx-auto max-w-[1440px] px-2 sm:px-4">
          <div className="overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-slate-orb text-slate-orb-foreground">
            <div className="grid items-center gap-10 px-6 py-14 sm:px-10 sm:py-16 md:grid-cols-2 md:py-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Stratégie de marque</p>
                <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.08]">
                  Une identité construite sur une vraie stratégie
                </h1>
                <p className="mt-6 max-w-md text-sm sm:text-base leading-relaxed opacity-80">
                  Une marque ne se résume pas à un logo. C'est une promesse faite à vos clients, qui doit se
                  retrouver dans chaque message, chaque visuel et chaque interaction.
                </p>
                <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed opacity-80">
                  Chez Only Clik, nous construisons votre identité de marque à partir d'une réflexion stratégique
                  et d'une bonne compréhension de votre marché, de vos clients et de vos objectifs. Nous
                  définissons votre positionnement, votre identité visuelle et les codes qui permettront à votre
                  entreprise d'être immédiatement reconnaissable.
                </p>
                <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed opacity-80">
                  Notre objectif : créer des marques cohérentes, mémorables et durables, capables de rester
                  pertinentes bien au-delà de leur lancement.
                </p>
                <Link
                  to="/demarrer-un-projet"
                  className="mt-9 inline-flex rounded-full bg-butter px-7 py-3 text-sm font-semibold text-butter-foreground transition-opacity hover:opacity-85"
                >
                  Démarrer un projet
                </Link>
              </div>
              <DotSwirl className="hidden w-full md:block" count={40} seed={13} />
            </div>
          </div>
        </div>
      </section>

      {/* Intro branding */}
      <section className="py-20 sm:py-24">
        <div className="container-page mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight">Nos services en Branding</h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-foreground/80">
            Découvrez nos services de stratégie de marque, d'identité et de création. Chez Only Clik, nous
            travaillons sur tous les aspects de votre marque.
          </p>
        </div>
      </section>

      {/* Menu cliquable des services de branding */}
      <BrandServicesTabs />

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
                to="/realisations"
                className="rounded-full border border-white/25 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Réalisations
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

      {/* Processus de création de marque */}
      <ProcessTimeline
        eyebrow="Processus"
        title="Notre processus de création de marque"
        subtitle="Une méthode simple et structurée pour construire une marque cohérente, de la réflexion au déploiement."
        steps={brandProcessSteps}
      />

      <TestimonialCarousel />

      <section className="container-page -mt-12 sm:-mt-16 lg:-mt-20 py-2 sm:py-4 z-10">
        <ContactForm />
      </section>
    </>
  )
}
