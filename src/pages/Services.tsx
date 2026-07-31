import { Link } from 'react-router-dom'
import ArrowLink from '../components/ArrowLink'
import TestimonialCarousel from '../components/TestimonialCarousel'
import ContactForm from '../components/ContactForm'
import { services } from '../data/content'

export default function Services() {
  return (
    <>
      <section className="container-page py-20">
        <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05]">Nos Services</h1>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col justify-between border border-border p-8 transition-colors hover:border-primary"
            >
              <div>
                <h2 className="font-display text-2xl">{service.title}</h2>
                <p className="mt-4 text-xs font-semibold leading-relaxed text-foreground/80">{service.text}</p>
              </div>
              <Link to="/demarrer-un-projet" className="link-arrow group mt-8 justify-between">
                Parlons-en <ArrowLink />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] leading-tight">
            Des services pensés pour accélérer votre croissance
          </h2>
          <div className="space-y-5 text-sm leading-relaxed text-foreground/80">
            <p>
              Développer son activité est un défi. Entre le marketing, le référencement, les campagnes publicitaires
              et les nouvelles technologies, il est souvent difficile de savoir où investir pour obtenir de vrais
              résultats.
            </p>
            <p>
              Only Clik vous accompagne avec une stratégie claire et des solutions digitales conçues pour attirer
              plus de prospects, renforcer votre visibilité et accélérer votre croissance. De la réflexion à la mise
              en œuvre, nous vous apportons l'expertise et les outils nécessaires pour faire de votre présence en
              ligne un véritable levier de développement.
            </p>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <section className="container-page py-24">
        <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3rem)] leading-tight">
          Construisons ensemble votre réussite.
        </h2>
        <ContactForm />
      </section>
    </>
  )
}
