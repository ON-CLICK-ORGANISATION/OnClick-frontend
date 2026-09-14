import { Compass, Megaphone, MonitorSmartphone, Search } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import FeatureGrid, { type FeatureItem } from '../components/FeatureGrid'
import PageIntro from '../components/PageIntro'
import ProjectHighlights from '../components/ProjectHighlights'
import RelatedLinks from '../components/RelatedLinks'

const levers: FeatureItem[] = [
  {
    icon: Search,
    title: 'Référencement naturel (SEO & GEO)',
    text: "Être visible sur Google et dans les moteurs de recherche basés sur l'IA au moment où vos futurs clients recherchent vos services.",
    to: '/seo-aeo-geo/',
    linkLabel: 'Découvrir le SEO, AEO & GEO',
  },
  {
    icon: Megaphone,
    title: 'Publicité digitale',
    text: 'Des campagnes Google Ads et réseaux sociaux ciblées pour toucher rapidement les bonnes audiences et générer des demandes.',
    to: '/publicite-digitale/',
    linkLabel: 'Découvrir la publicité digitale',
  },
  {
    icon: MonitorSmartphone,
    title: 'Un site qui convertit',
    text: 'Un site clair, rapide et rassurant, pensé pour transformer vos visiteurs en contacts, puis en clients.',
    to: '/creation-site-web/',
    linkLabel: 'Découvrir la création de site web',
  },
  {
    icon: Compass,
    title: "Une stratégie d'ensemble",
    text: 'Une feuille de route qui fixe vos canaux, votre budget et vos priorités pour une croissance mesurable.',
    to: '/strategie-digitale/',
    linkLabel: 'Découvrir la stratégie digitale',
  },
]

export default function AcquisitionClients() {
  return (
    <>
      <PageIntro eyebrow="Acquisition clients" title="Acquisition de clients : développez votre activité" seed={23}>
        <p>
          OnlyClik met en place des stratégies digitales pour aider les professionnels à attirer de nouveaux clients et
          développer leur activité.
        </p>
        <p>
          Référencement, publicité, site web : nous activons les leviers adaptés à votre marché, à votre budget et à vos
          objectifs.
        </p>
      </PageIntro>

      <FeatureGrid
        eyebrow="Nos leviers"
        title="Les leviers d'acquisition clients que nous activons"
        intro="Chaque levier est choisi en fonction de votre cible, puis mesuré pour concentrer vos efforts sur ce qui fonctionne."
        items={levers}
      />

      <ProjectHighlights
        title="Des résultats concrets pour nos clients"
        names={['Vision Laser', 'Faune Project', 'Horizon Nouveau']}
      />

      <RelatedLinks
        title={
          <>
            Pour aller <span className="italic opacity-90">plus loin</span>
          </>
        }
        links={[
          { to: '/notre-approche/', label: 'Notre approche' },
          { to: '/marketing-digital/', label: 'Marketing digital' },
          { to: '/rendez-vous-qualifies/', label: 'Rendez-vous qualifiés' },
          { to: '/realisations/', label: 'Nos réalisations' },
          { to: '/contact/', label: 'Nous contacter' },
        ]}
      />

      <ContactForm />
    </>
  )
}
