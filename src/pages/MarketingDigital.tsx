import { Compass, Megaphone, MonitorSmartphone, MousePointerClick, Palette, Search } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import FeatureGrid, { type FeatureItem } from '../components/FeatureGrid'
import PageIntro from '../components/PageIntro'
import RelatedLinks from '../components/RelatedLinks'

const expertises: FeatureItem[] = [
  {
    icon: Compass,
    title: 'Stratégie digitale',
    text: "Analyse de votre marché et de vos concurrents, choix des canaux et plan d'action aligné sur vos objectifs commerciaux.",
    to: '/strategie-digitale/',
    linkLabel: 'Voir la stratégie digitale',
  },
  {
    icon: Megaphone,
    title: 'Publicité digitale',
    text: 'Campagnes Google Ads, réseaux sociaux et retargeting pour gagner rapidement en visibilité auprès de votre cible.',
    to: '/publicite-digitale/',
    linkLabel: 'Voir la publicité digitale',
  },
  {
    icon: Search,
    title: 'SEO, AEO & GEO',
    text: "Un référencement durable sur Google et une présence renforcée dans les réponses des outils de recherche basés sur l'IA.",
    to: '/seo-aeo-geo/',
    linkLabel: 'Voir le référencement',
  },
  {
    icon: Palette,
    title: 'Stratégie de marque',
    text: 'Un positionnement clair et une identité reconnaissable qui renforcent la confiance de vos prospects.',
    to: '/strategie-de-marque/',
    linkLabel: 'Voir la stratégie de marque',
  },
  {
    icon: MonitorSmartphone,
    title: 'Création de site web',
    text: 'Un site performant qui met en valeur vos offres et convertit vos visiteurs en contacts.',
    to: '/creation-site-web/',
    linkLabel: 'Voir la création de site web',
  },
  {
    icon: MousePointerClick,
    title: 'Expérience utilisateur (UI/UX)',
    text: 'Des parcours simples et intuitifs qui facilitent chaque prise de contact, sur tous les écrans.',
    to: '/service-ui-ux/',
    linkLabel: 'Voir le design UI/UX',
  },
]

export default function MarketingDigital() {
  return (
    <>
      <PageIntro eyebrow="Marketing digital" title="Marketing digital pour les professionnels" seed={31}>
        <p>
          Développez votre visibilité et attirez de nouveaux prospects grâce à une stratégie de marketing digital adaptée à
          votre activité.
        </p>
        <p>
          OnlyClik réunit stratégie, publicité, référencement, image de marque et site web pour construire une présence en
          ligne cohérente et efficace.
        </p>
      </PageIntro>

      <FeatureGrid
        eyebrow="Nos expertises"
        title="Un marketing digital complet, au service de votre croissance"
        items={expertises}
      />

      <RelatedLinks
        title={
          <>
            Pour aller <span className="italic opacity-90">plus loin</span>
          </>
        }
        links={[
          { to: '/acquisition-clients/', label: 'Acquisition clients' },
          { to: '/notre-approche/', label: 'Notre approche' },
          { to: '/rendez-vous-qualifies/', label: 'Rendez-vous qualifiés' },
          { to: '/realisations/', label: 'Nos réalisations' },
          { to: '/contact/', label: 'Nous contacter' },
        ]}
      />

      <ContactForm />
    </>
  )
}
