import { ChartColumn, Clock, Handshake, Mail, MapPin, Megaphone, MonitorSmartphone, Palette, Phone, Target } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import FeatureGrid, { type FeatureItem } from '../components/FeatureGrid'
import PageIntro from '../components/PageIntro'
import RelatedLinks from '../components/RelatedLinks'
import { ORGANIZATION } from '../seo/site'

const expertises: FeatureItem[] = [
  {
    icon: Target,
    title: 'Acquisition & génération de prospects',
    text: 'Campagnes, référencement et pages de conversion pour attirer de nouveaux prospects et générer des rendez-vous qualifiés.',
    to: '/acquisition-clients/',
    linkLabel: "Découvrir l'acquisition clients",
  },
  {
    icon: Megaphone,
    title: 'Marketing digital',
    text: 'Une stratégie marketing adaptée à votre activité pour développer durablement votre visibilité.',
    to: '/marketing-digital/',
    linkLabel: 'Découvrir le marketing digital',
  },
  {
    icon: MonitorSmartphone,
    title: 'Sites web & expérience utilisateur',
    text: 'Des sites performants et des parcours simples, pensés pour convertir vos visiteurs en clients.',
    to: '/creation-site-web/',
    linkLabel: 'Découvrir la création de site web',
  },
  {
    icon: Palette,
    title: 'Stratégie & image de marque',
    text: 'Un positionnement clair et une identité forte qui vous distinguent de vos concurrents.',
    to: '/strategie-de-marque/',
    linkLabel: 'Découvrir la stratégie de marque',
  },
]

const commitments: FeatureItem[] = [
  {
    icon: Handshake,
    title: 'Un interlocuteur dédié',
    text: 'Un contact unique qui connaît votre activité et suit votre projet, du premier échange aux résultats.',
  },
  {
    icon: Clock,
    title: 'Une réponse sous 24h',
    text: 'Chaque demande reçoit une réponse rapide, avec un premier avis honnête sur votre projet.',
  },
  {
    icon: ChartColumn,
    title: 'Des résultats mesurables',
    text: "Des indicateurs clairs et un reporting transparent pour suivre l'impact de chaque action.",
  },
]

const { email, telephone, telephoneDisplay, address } = ORGANIZATION

export default function APropos() {
  return (
    <>
      <PageIntro eyebrow="À propos" title="OnlyClik, agence d'acquisition digitale" seed={43}>
        <p>
          OnlyClik accompagne les professionnels dans leur développement grâce au marketing digital, à l'acquisition et à
          la génération de prospects.
        </p>
        <p>
          Notre ambition : être un partenaire proche de vous, qui comprend vos enjeux et vous aide à attirer de nouveaux
          clients avec des actions concrètes et mesurables.
        </p>
      </PageIntro>

      <FeatureGrid eyebrow="Nos expertises" title="Ce que nous faisons" items={expertises} />

      <FeatureGrid
        eyebrow="Nos engagements"
        title="Notre façon de travailler"
        items={commitments}
        className="bg-[#F7FAFC]"
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-8 rounded-3xl border border-border p-8 sm:p-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] leading-tight">Nos coordonnées</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
              Une question, un projet ? Écrivez-nous ou appelez-nous : nous revenons vers vous sous 24 heures.
            </p>
          </div>
          <address className="space-y-4 text-sm not-italic sm:text-base">
            <a href={`mailto:${email}`} className="flex items-center gap-3 transition-colors hover:text-primary">
              <Mail size={18} className="shrink-0 text-primary" aria-hidden="true" />
              {email}
            </a>
            <a
              href={`tel:${telephone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <Phone size={18} className="shrink-0 text-primary" aria-hidden="true" />
              {telephoneDisplay}
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={18} className="shrink-0 text-primary" aria-hidden="true" />
              {address.streetAddress} {address.postalCode} {address.addressLocality}
            </p>
          </address>
        </div>
      </section>

      <RelatedLinks
        title={
          <>
            Pour aller <span className="italic opacity-90">plus loin</span>
          </>
        }
        links={[
          { to: '/notre-approche/', label: 'Notre approche' },
          { to: '/acquisition-clients/', label: 'Acquisition clients' },
          { to: '/marketing-digital/', label: 'Marketing digital' },
          { to: '/rendez-vous-qualifies/', label: 'Rendez-vous qualifiés' },
          { to: '/realisations/', label: 'Nos réalisations' },
        ]}
      />

      <ContactForm />
    </>
  )
}
