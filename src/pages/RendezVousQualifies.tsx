import { ChartColumn, MousePointerClick, Target, UserCheck } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import FeatureGrid, { type FeatureItem } from '../components/FeatureGrid'
import PageIntro from '../components/PageIntro'
import ProjectHighlights from '../components/ProjectHighlights'
import RelatedLinks from '../components/RelatedLinks'

const steps: FeatureItem[] = [
  {
    icon: Target,
    title: 'Cibler les bons prospects',
    text: 'Vos campagnes sont diffusées là où se trouvent vos clients idéaux, avec des critères de ciblage définis ensemble.',
    to: '/publicite-digitale/',
    linkLabel: 'Découvrir nos campagnes',
  },
  {
    icon: MousePointerClick,
    title: 'Faciliter la prise de contact',
    text: "Pages de destination, formulaires et appels à l'action sont pensés pour transformer l'intérêt en demande de rendez-vous.",
    to: '/creation-site-web/',
    linkLabel: 'Découvrir nos sites web',
  },
  {
    icon: UserCheck,
    title: 'Qualifier chaque demande',
    text: 'Les contacts sont vérifiés avant de vous être transmis : vous consacrez votre temps aux prospects réellement intéressés.',
    to: '/notre-approche/',
    linkLabel: 'Découvrir notre méthode',
  },
  {
    icon: ChartColumn,
    title: 'Suivre les résultats',
    text: 'Coût par contact, taux de qualification, rendez-vous obtenus : vous gardez une vision claire de vos performances.',
  },
]

export default function RendezVousQualifies() {
  return (
    <>
      <PageIntro eyebrow="Rendez-vous qualifiés" title="Générez des rendez-vous qualifiés" seed={37}>
        <p>
          OnlyClik vous aide à générer des rendez-vous qualifiés avec des prospects réellement intéressés par vos produits ou
          services.
        </p>
        <p>Moins de temps perdu avec des contacts peu pertinents, plus d'échanges utiles pour développer votre activité.</p>
      </PageIntro>

      <FeatureGrid eyebrow="Notre démarche" title="Du premier contact au rendez-vous qualifié" items={steps} />

      <ProjectHighlights
        title="Ils obtiennent plus de rendez-vous"
        names={['Aude Coué', 'Amalthéa Pilates', 'Hôtel la Colongette']}
      />

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
          { to: '/realisations/', label: 'Nos réalisations' },
          { to: '/contact/', label: 'Nous contacter' },
        ]}
      />

      <ContactForm />
    </>
  )
}
