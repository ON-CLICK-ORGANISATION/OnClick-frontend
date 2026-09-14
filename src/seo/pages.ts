import { SITE_NAME } from './site'

export type SchemaPageType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage'

export interface PageSeo {
  /** URL canonique : chemin en minuscules avec slash final, comme dans le brief SEO. */
  path: string
  /** Titre SEO. « | OnlyClik » est ajouté automatiquement s'il ne contient pas déjà la marque. */
  title: string
  description: string
  /** Libellé de la page dans le fil d'Ariane (BreadcrumbList). */
  breadcrumb: string
  schemaType?: SchemaPageType
  /** Nom du service présenté par la page (ajoute un schéma Service). */
  service?: string
}

export const BRAND_SUFFIX = ` | ${SITE_NAME}`

/**
 * Pages publiques indexables (balises SEO, pré-rendu et sitemap.xml).
 * Les 8 premières reprennent le brief « Brief SEO OnlyClik – positionnement large » (titres, descriptions, slugs) ;
 * les suivantes sont les pages de services déjà en ligne, décrites à partir de leur contenu visible.
 *
 * IMPORTANT : chaque route publique de src/App.tsx doit avoir une entrée ici (le build échoue sinon).
 */
export const seoPages: PageSeo[] = [
  // --- Brief SEO ---
  {
    path: '/',
    title: 'OnlyClik – Générez plus de prospects et de rendez-vous',
    description:
      'OnlyClik accompagne les professionnels dans l’acquisition de nouveaux prospects et la génération de rendez-vous grâce au digital.',
    breadcrumb: 'Accueil',
  },
  {
    path: '/notre-approche/',
    title: 'Notre méthode pour générer des prospects qualifiés',
    description:
      'Découvrez la méthode OnlyClik pour attirer, qualifier et convertir de nouveaux prospects en opportunités commerciales.',
    breadcrumb: 'Notre approche',
    service: 'Génération de prospects qualifiés',
  },
  {
    path: '/acquisition-clients/',
    title: 'Acquisition de clients : développez votre activité',
    description:
      'OnlyClik met en place des stratégies digitales pour aider les professionnels à attirer de nouveaux clients et développer leur activité.',
    breadcrumb: 'Acquisition clients',
    service: 'Acquisition de clients',
  },
  {
    path: '/marketing-digital/',
    title: 'Marketing digital pour les professionnels',
    description:
      'Développez votre visibilité et attirez de nouveaux prospects grâce à une stratégie de marketing digital adaptée à votre activité.',
    breadcrumb: 'Marketing digital',
    service: 'Marketing digital',
  },
  {
    path: '/rendez-vous-qualifies/',
    title: 'Générez des rendez-vous qualifiés',
    description:
      'OnlyClik vous aide à générer des rendez-vous qualifiés avec des prospects réellement intéressés par vos produits ou services.',
    breadcrumb: 'Rendez-vous qualifiés',
    service: 'Génération de rendez-vous qualifiés',
  },
  {
    path: '/realisations/',
    title: 'Nos réalisations en acquisition digitale',
    description:
      'Découvrez les stratégies digitales mises en place par OnlyClik pour développer la visibilité et l’acquisition de ses clients.',
    breadcrumb: 'Réalisations',
    schemaType: 'CollectionPage',
  },
  {
    path: '/a-propos/',
    title: 'OnlyClik – Agence d’acquisition digitale',
    description:
      'OnlyClik accompagne les professionnels dans leur développement grâce au marketing digital, à l’acquisition et à la génération de prospects.',
    breadcrumb: 'À propos',
    schemaType: 'AboutPage',
  },
  {
    path: '/contact/',
    title: 'Contactez OnlyClik',
    description:
      'Vous souhaitez développer votre activité et générer davantage de prospects ou de rendez-vous ? Échangez avec OnlyClik.',
    breadcrumb: 'Contact',
    schemaType: 'ContactPage',
  },

  // --- Pages de services existantes ---
  {
    path: '/services/',
    title: 'Services digitaux : site web, publicité, SEO',
    description:
      'Création de sites web, publicité digitale, UI/UX, stratégie de marque, SEO et stratégie digitale : découvrez les services OnlyClik pour attirer plus de prospects.',
    breadcrumb: 'Services',
    schemaType: 'CollectionPage',
  },
  {
    path: '/strategie-de-marque/',
    title: 'Stratégie de marque et identité visuelle',
    description:
      'Positionnement, logo, identité visuelle, charte graphique : OnlyClik construit des marques cohérentes et mémorables à partir d’une vraie réflexion stratégique.',
    breadcrumb: 'Stratégie de marque',
    service: 'Stratégie de marque',
  },
  {
    path: '/creation-site-web/',
    title: 'Création de site web sur mesure',
    description:
      'OnlyClik conçoit des sites web sur mesure alliant stratégie, UX, design, développement et SEO pour transformer vos visiteurs en clients.',
    breadcrumb: 'Création de site web',
    service: 'Création de site web',
  },
  {
    path: '/service-ui-ux/',
    title: 'Design UI/UX : interfaces simples et intuitives',
    description:
      'UX research, audit UX, UI design, prototypes, applications mobiles et SaaS : OnlyClik conçoit des interfaces simples, intuitives et agréables à utiliser.',
    breadcrumb: 'Service UI/UX',
    service: 'Design UI/UX',
  },
  {
    path: '/seo-aeo-geo/',
    title: 'SEO, AEO & GEO : visibilité sur Google et l’IA',
    description:
      'SEO technique, local, contenus et visibilité IA (GEO/AEO) : OnlyClik améliore votre visibilité sur Google et dans les moteurs de recherche basés sur l’IA.',
    breadcrumb: 'SEO, AEO & GEO',
    service: 'Référencement SEO, AEO et GEO',
  },
  {
    path: '/strategie-digitale/',
    title: 'Stratégie digitale et marketing sur mesure',
    description:
      'Analyse de marché, choix des canaux, budget et plan d’action : OnlyClik construit une stratégie digitale sur mesure pour attirer, convertir et fidéliser vos clients.',
    breadcrumb: 'Stratégie digitale',
    service: 'Stratégie digitale',
  },
  {
    path: '/publicite-digitale/',
    title: 'Publicité digitale : Google Ads et réseaux sociaux',
    description:
      'Google Ads, réseaux sociaux, programmatique et retargeting : OnlyClik crée des campagnes qui génèrent du trafic qualifié, des prospects et des rendez-vous.',
    breadcrumb: 'Publicité digitale',
    service: 'Publicité digitale',
  },
]

export function fullTitle(page: PageSeo): string {
  return page.title.includes(SITE_NAME) ? page.title : `${page.title}${BRAND_SUFFIX}`
}

/** « /Contact », « /contact » et « /contact/?x=1 » correspondent tous à « /contact/ ». */
export function normalizePath(pathname: string): string {
  const path = (pathname.split(/[?#]/)[0] || '/').toLowerCase()
  return path.endsWith('/') ? path : `${path}/`
}

export function findPageSeo(pathname: string): PageSeo | undefined {
  const path = normalizePath(pathname)
  return seoPages.find((page) => page.path === path)
}
