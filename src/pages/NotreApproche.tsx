import ContactForm from '../components/ContactForm'
import MethodSection from '../components/MethodSection'
import PageIntro from '../components/PageIntro'
import ProcessTimeline from '../components/ProcessTimeline'
import RelatedLinks from '../components/RelatedLinks'

const approachSteps = [
  {
    number: '01',
    title: 'Comprendre',
    text: 'Un premier échange pour cerner votre activité, vos clients idéaux et vos objectifs commerciaux.',
  },
  {
    number: '02',
    title: 'Attirer',
    text: 'Nous choisissons les canaux et les messages les plus adaptés pour toucher les bons prospects, au bon moment.',
  },
  {
    number: '03',
    title: 'Qualifier & convertir',
    text: "Pages de conversion et qualification des contacts transforment l'intérêt de vos prospects en opportunités commerciales.",
  },
  {
    number: '04',
    title: 'Mesurer & optimiser',
    text: 'Nous suivons le coût et la qualité de chaque contact, puis ajustons les actions pour améliorer vos résultats.',
  },
]

export default function NotreApproche() {
  return (
    <>
      <PageIntro eyebrow="Notre approche" title="Notre méthode pour générer des prospects qualifiés" seed={11}>
        <p>
          Attirer, qualifier et convertir : chez OnlyClik, chaque action digitale a un objectif précis, transformer
          l'intérêt de vos futurs clients en opportunités commerciales.
        </p>
      </PageIntro>

      <MethodSection />

      <ProcessTimeline
        eyebrow="Accompagnement"
        title="Les étapes de notre accompagnement"
        subtitle="Une démarche structurée pour transformer de nouveaux prospects en opportunités commerciales."
        steps={approachSteps}
      />

      <RelatedLinks
        title={
          <>
            Pour aller <span className="italic opacity-90">plus loin</span>
          </>
        }
        links={[
          { to: '/acquisition-clients/', label: 'Acquisition clients' },
          { to: '/rendez-vous-qualifies/', label: 'Rendez-vous qualifiés' },
          { to: '/marketing-digital/', label: 'Marketing digital' },
          { to: '/realisations/', label: 'Nos réalisations' },
          { to: '/a-propos/', label: 'À propos' },
        ]}
      />

      <ContactForm />
    </>
  )
}
