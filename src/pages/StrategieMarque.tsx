import { Link } from 'react-router-dom'

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
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] text-white">
            {/* Image de fond non floutée */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
              <img
                src="/images/projects/strategie-marque-bg.png"
                alt=""
                className="h-full w-full object-cover"
              />
              {/* Overlay éclairci : bg-black/55 -> bg-tblack/5 (sans teinte) */}
              <div className="absolute inset-0 bg-black/5t" />
            </div>

            <div className="relative grid items-center gap-8 px-6 py-20 sm:px-10 sm:py-28 md:py-36 lg:grid-cols-2 lg:gap-8">
              <div>
                {/* Titre bleu - modifie translateY pour le monter/descendre */}
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary" style={{ transform: 'translateY(-1.8cm)' }}>
                  Stratégie de marque
                </p>
                <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1]" style={{ transform: 'translateY(-1.2cm)' }}>
                  Une identité construite
                  <br />
                  sur une vraie 
                  <br />
                  stratégie
                </h1>
                <Link
                  to="/demarrer-un-projet"
                  className="mt-9 inline-flex rounded-full bg-butter px-7 py-3 text-sm font-semibold text-butter-foreground transition-opacity hover:opacity-85"
                  style={{ transform: 'translateY(-1cm)' }}
                >
                  Démarrer un projet
                </Link>
              </div>

              {/* Textes à droite - chaque bloc a son propre translateY */}
              <div className="relative hidden lg:block h-full">
                {/* Bloc 1 - haut */}
                <div 
                  className="absolute top-[2%] right-[5%] w-[60%] bg-transparent rounded-xl p-5 border border-white/0" 
                  style={{ transform: 'translateY(-2.4cm) translateX(0.8cm)' }}
                >
                  <p className="text-[12px] leading-relaxed text-white/95">
                    Une marque ne se résume pas à un logo. C'est une promesse faite à vos clients, qui doit se retrouver dans chaque message, chaque visuel et chaque interaction.
                  </p>
                </div>
                
                {/* Bloc 2 - milieu */}
                <div 
                  className="absolute top-[42%] right-[5%] w-[60%] bg-transparent rounded-xl p-5 border border-white/0" 
                  style={{ transform: 'translateY(-2.4cm) translateX(0.8cm)' }}
                >
                  <p className="text-[12px] leading-relaxed text-white/95">
                    <strong>
                      Chez Only Clik, nous construisons votre identité de marque à partir d'une réflexion stratégique et d'une bonne compréhension de votre marché, de vos clients et de vos objectifs. 
                    Nous définissons votre positionnement, votre identité visuelle et les codes qui permettront à votre entreprise d'être immédiatement reconnaissable.
                    </strong>
                  </p>
                </div>

                {/* Bloc 3 - bas */}
                <div 
                /* pour le fond du texte: bg-black/10 backdrop-blur-md*/
                  className="absolute bottom-[2%] right-[5%] w-[60%] bg-black/20 backdrop-blur-md rounded-xl p-5 border border-white/10" 
                  style={{ transform: 'translateY(2.4cm) translateX(0.88cm)' }}
                >
                  <p className="text-[12px] leading-relaxed text-white/95">
                     Notre objectif : créer des marques cohérentes, mémorables et durables, capables de rester pertinentes bien au-delà de leur lancement.
                  </p>
                </div>
              </div>

              {/* Version mobile/tablette : textes en colonne normale */}
              <div className="flex flex-col gap-4 lg:hidden">
                <p className="text-sm sm:text-base leading-relaxed text-white/85">
                  Une marque ne se résume pas à un logo. C'est une promesse faite à vos clients, qui doit se retrouver dans chaque message, chaque visuel et chaque interaction.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-white/85">
                  Chez Only Clik, nous construisons votre identité de marque à partir d'une réflexion stratégique et d'une bonne compréhension de votre marché, de vos clients et de vos objectifs. Nous définissons votre positionnement, votre identité visuelle et les codes qui permettront à votre entreprise d'être immédiatement reconnaissable.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-white/85">
                  Notre objectif : créer des marques cohérentes, mémorables et durables, capables de rester pertinentes bien au-delà de leur lancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro branding */}
      <section className="py-20 sm:py-24">
        <div className="container-page mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight">Nos services en Branding</h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-foreground/80">
            Découvrez nos services de stratégie de marque, d'identité et de création. Chez Only Clik, nous travaillons sur tous les aspects de votre marque.
          </p>
        </div>
      </section>

      {/* Menu cliquable des services de branding */}
      <BrandServicesTabs />

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