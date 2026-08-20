export interface MiniProject {
  name: string
  url: string
  description: string
  image?: string
}

export interface Expertise {
  title: string
  text: string
  cta: string
}

export interface ServiceItem {
  title: string
  text: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export interface MethodStep {
  title: string
  text: string
  tags: string[]
}

export interface Project extends MiniProject {
  gradient: string
  /** 'contain' shows the whole image without cropping (dézoomé) — used for logos/wide shots. Defaults to 'cover'. */
  fit?: 'cover' | 'contain'
}

// Hero showcase project (large orb on home page)
export const heroProject: MiniProject & { imageMobile: string } = {
  name: 'Amalthéa Studio',
  url: 'https://amalthea-studio.com/',
  description: 'Studio de Pilates en ligne qui a augmenté son taux de réservation de +87%.',
  image: '/images/projects/stud.png',
  imageMobile: '/images/projects/mobile.png',
}

// Small featured projects strip on home page
export const featuredProjects: Project[] = [
  {
    name: 'Le Sixth',
    url: 'https://lesixth.com/',
    description: 'Restaurant qui a augmenté son taux de réservation de +67%',
    gradient: 'linear-gradient(140deg, oklch(0.55 0.08 60), oklch(0.35 0.05 50))',
    image: '/images/projects/lesixth-new.jpg',
  },
  {
    name: 'Centre Vision Laser',
    url: 'https://visionlaser.eu/',
    description:
      "La refonte du site et l'amélioration du parcours utilisateur a augmenté le nombre de leads via le site de +350%",
    gradient: 'linear-gradient(140deg, oklch(0.3 0.02 260), oklch(0.2 0.02 260))',
    image: '/images/projects/vision.png',
  },
  {
    name: 'Aude Coué Kinésiologue',
    url: 'https://aude-coue.com/',
    description: 'Aude a doublé son nombre de rendez-vous en 4 mois avec notre site internet',
    gradient: 'linear-gradient(140deg, oklch(0.45 0.07 200), oklch(0.28 0.05 210))',
    image: '/images/projects/aude-coue-manip.jpg',
  },
]

// Full projects list (Réalisations page)
// src/data/content.ts

// src/data/content.ts

export const projects: Project[] = [
  {
    name: 'Horizon Nouveau',
    url: 'https://www.horizon-nouveau.fr/',
    description: "Une stratégie SEO efficace qui a permis à ce coach d'atteindre la première place sur Google.",
    gradient: 'linear-gradient(140deg, oklch(0.55 0.08 60), oklch(0.32 0.05 50))',
    image: '/images/realisation/horizon-nouveau.jpg',
  },
  {
    name: 'Hôtel la Colongette',
    url: 'https://hotel-la-colongette.com/',
    description: 'Augmentation du taux de réservation de +130% avec le nouveau site',
    gradient: 'linear-gradient(140deg, oklch(0.45 0.07 200), oklch(0.26 0.05 210))',
    image: '/images/realisation/colongete.jpg', // Image hôtel
  },
  {
    name: 'Espace Oasium',
    url: 'https://espace-oasium.com/',
    description: 'Ce site de réservation de bureaux a atteint un taux de remplissage de 87%',
    gradient: 'linear-gradient(140deg, oklch(0.5 0.09 340), oklch(0.3 0.06 330))',
    image: '/images/realisation/oasim-new.jpg',
  },
  {
    name: 'Bénédicte Nécaille',
    url: 'https://www.lemiroiretlaplume.fr/',
    description: 'Biographe qui est passée de 1 à 6 biographies par an',
    gradient: 'linear-gradient(140deg, oklch(0.52 0.06 140), oklch(0.3 0.04 150))',
    image: '/images/realisation/mirroir.png', // Image écriture/plume
    fit: 'contain',
  },
  {
    name: 'Faune Project',
    url: 'https://fauneproject.com/',
    description: "Une refonte qui a permis une augmentation du trafic organique de +74%",
    gradient: 'linear-gradient(140deg, oklch(0.4 0.03 260), oklch(0.22 0.02 260))',
    image: '/images/realisation/faune.png', // Image design/créatif
  },
  {
    name: 'Amalthéa Pilates',
    url: 'https://amalthea-studio.com/',
    description: 'Studio de Pilates en ligne qui a augmenté son taux de réservation de +87%.',
    gradient: 'linear-gradient(140deg, oklch(0.6 0.1 90), oklch(0.35 0.06 80))',
    image: '/images/projects/stud.png', // Image pilates/fitness
    fit: 'contain',
  },
  {
    name: 'Jyretourneimmédiatement',
    url: 'https://www.jyretourneimmediatement.com/',
    description: 'Compagnie de théâtre qui a vu son taux de visite augmenter de +520%',
    gradient: 'linear-gradient(140deg, oklch(0.55 0.08 60), oklch(0.32 0.05 50))',
    image: '/images/realisation/jyr.png', // Image théâtre/scène
  },
  {
    name: 'Hôtel Royal Palace',
    url: 'https://hotel-royal-palace.com/',
    description: 'Hôtel devenu numéro 1 sur Google dans sa région',
    gradient: 'linear-gradient(140deg, oklch(0.45 0.07 200), oklch(0.26 0.05 210))',
    image: '/images/realisation/royal-new.jpg',
  },
  {
    name: 'Vision Laser',
    url: 'https://visionlaser.eu/',
    description: "La refonte du site et l'amélioration du parcours utilisateur a augmenté le nombre de leads via le site de +350%",
    gradient: 'linear-gradient(140deg, oklch(0.5 0.09 340), oklch(0.3 0.06 330))',
    image: '/images/projects/vision.png', // Image laser/médical
  },
  {
    name: 'Le Chemin de mon Histoire',
    url: 'https://lechemindemonhistoire.fr/',
    description: "Laurent a doublé son chiffre d'affaires avec son site internet",
    gradient: 'linear-gradient(140deg, oklch(0.52 0.06 140), oklch(0.3 0.04 150))',
    image: '/images/realisation/chemin.png', // Image histoire/voyage
    fit: 'contain',
  },
  {
    name: 'Aude Coué',
    url: 'https://aude-coue.com/',
    description: 'Aude a augmenté son taux de rendez-vous de +100% en 4 mois',
    gradient: 'linear-gradient(140deg, oklch(0.4 0.03 260), oklch(0.22 0.02 260))',
    image: '/images/projects/aude-coue-manip.jpg',
  },
]

// Services page cards
export const services: ServiceItem[] = [
  {
    title: 'Création de sites web',
    text: 'Conception de sites performants, sécurisés et évolutifs, pensés pour offrir une expérience optimale et convertir vos visiteurs en clients.',
  },
  {
    title: 'Publicité digitale',
    text: "Campagnes Google Ads, réseaux sociaux, publicité programmatique et stratégies d'acquisition conçues pour atteindre vos objectifs de croissance.",
  },
  {
    title: 'Data & Analytics',
    text: "Mise en place d'outils de mesure et de tableaux de bord pour suivre précisément les performances de vos campagnes et leur impact sur votre chiffre d'affaires.",
  },
  {
    title: 'Stratégie de marque',
    text: "Définissez votre positionnement, affirmez votre différence et construisez une image cohérente sur l'ensemble de vos points de contact.",
  },
  {
    title: 'SEO, AEO & GEO',
    text: "Optimisation de votre visibilité sur Google, les moteurs de recherche alimentés par l'IA et les nouveaux outils de recherche conversationnelle.",
  },
  {
    title: 'Stratégie digitale',
    text: "Élaboration d'une feuille de route claire : choix des canaux, répartition du budget et plan d'action aligné sur vos objectifs commerciaux.",
  },
]

// Home page "Vos objectifs, nos expertises" section
export const expertises: Expertise[] = [
  {
    title: 'Marketing',
    text: 'Dans un web saturé, la visibilité ne suffit plus. Nous créons des campagnes ciblées et une stratégie SEO performante pour attirer les bons prospects et générer une croissance mesurable.',
    cta: 'Développez votre visibilité',
  },
  {
    title: 'Développement',
    text: 'Nous concevons des sites web performants, évolutifs et pensés pour convertir vos visiteurs en clients.',
    cta: 'Donnez vie à votre projet',
  },
  {
    title: 'Création',
    text: 'Une identité forte inspire confiance. Nous créons une image de marque qui vous distingue et renforce votre crédibilité.',
    cta: 'Affirmez votre identité',
  },
  {
    title: 'Stratégie',
    text: 'Une croissance durable repose sur une vision claire. Nous élaborons une stratégie adaptée pour transformer vos objectifs en résultats.',
    cta: 'Clarifiez votre stratégie',
  },
]

// Home page "Notre méthode" section
export const methodSteps: MethodStep[] = [
  {
    title: 'Campagnes sur-mesure',
    text: 'Nous concevons et pilotons vos campagnes sur les canaux où se trouve votre cible, avec un seul objectif : vous fournir des prospects prêts à échanger.',
    tags: ['LinkedIn', 'Meta', 'TikTok'],
  },
  {
    title: 'Pages qui convertissent',
    text: "Nous créons et optimisons vos supports pour maximiser chaque clic : design, copywriting, preuve sociale. Rien n'est laissé au hasard.",
    tags: ['Design', 'Copywriting', 'Preuve sociale'],
  },
  {
    title: 'Qualification humaine',
    text: 'Chaque contact est vérifié par notre équipe avant de vous être transmis. Vous ne recevez que des prospects confirmés et réellement intéressés.',
    tags: ['Appel', 'Vérification', 'Qualification'],
  },
  {
    title: 'Résultats mesurables',
    text: 'Dashboard en temps réel, reporting transparent, indicateurs clairs : coût par contact, taux de qualification. Vous gardez la main sur vos données.',
    tags: ['Dashboard', 'Reporting', 'KPIs'],
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      "Un accompagnement clair et efficace. En quelques mois, notre site est devenu notre premier canal d'acquisition.",
    author: 'Marc Lefèvre',
    role: 'Dirigeant, cabinet de conseil',
  },
  {
    quote:
      "Une équipe qui comprend vraiment les enjeux d'une petite structure : des conseils concrets et des résultats visibles.",
    author: 'Camille Rousseau',
    role: 'Fondatrice, studio de bien-être',
  },
  {
    quote: 'Réactivité, pédagogie et vraie vision business. Nos demandes entrantes ont plus que doublé.',
    author: 'Sophie Marchand',
    role: 'Responsable marketing, centre médical',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Échange',
    text: 'Un premier appel pour comprendre vos objectifs.',
  },
  {
    number: '02',
    title: 'Stratégie',
    text: 'Une feuille de route claire et chiffrée.',
  },
  {
    number: '03',
    title: 'Exécution',
    text: 'Design, développement, campagnes et suivi.',
  },
]

// Page "Stratégie de marque" — processus en 4 étapes
export const brandProcessSteps: { number: string; title: string; text: string }[] = [
  {
    number: '01',
    title: 'Découvrir',
    text: 'Nous définissons vos objectifs, votre cible et vos besoins. Nous analysons également votre marché, vos supports actuels et vos concurrents.',
  },
  {
    number: '02',
    title: 'Définir',
    text: "Nous construisons votre positionnement, vos messages et les bases de votre identité de marque afin d'avoir une direction claire.",
  },
  {
    number: '03',
    title: 'Créer',
    text: 'Nous développons votre identité visuelle et ses différents éléments, puis nous les adaptons à vos supports pour vérifier leur cohérence et leur efficacité.',
  },
  {
    number: '04',
    title: 'Déployer',
    text: "Nous vous remettons l'ensemble des éléments nécessaires à votre communication : identité, charte graphique et supports. Nous vous accompagnons ensuite dans leur mise en place.",
  },
]

// Page "Création de site web" — processus en 4 étapes
export const webProcessSteps: { number: string; title: string; text: string }[] = [
  {
    number: '01',
    title: 'Analyse',
    text: "On commence par comprendre votre activité, vos clients et vos concurrents. Cet audit nous permet de définir l'arborescence du site, les priorités de contenu et les critères de réussite du projet.",
  },
  {
    number: '02',
    title: 'Design',
    text: 'On traduit la stratégie en maquettes, composants et gabarits responsive. Des prototypes interactifs vous permettent de valider les choix importants avant que la moindre ligne de code ne soit écrite.',
  },
  {
    number: '03',
    title: 'Développement',
    text: "On construit sur une base technique solide, avec l'accessibilité, la performance et le référencement intégrés dès le départ, pas ajoutés à la dernière minute.",
  },
  {
    number: '04',
    title: 'Lancement',
    text: "Tests complets, redirections, formation à la prise en main et remise des accès. Et parce qu'un site ne s'arrête pas au lancement, on identifie dès la mise en ligne les premières pistes d'amélioration.",
  },
]

export interface BrandTab {
  id: string
  label: string
  title: string
  text: string
}

// Page "Stratégie de marque" — menu cliquable (Partie 3)
export const brandTabs: BrandTab[] = [
  {
    id: 'logo',
    label: 'Création de logo',
    title: 'Création de logo',
    text: "Votre logo est l'élément qui permet d'identifier immédiatement votre marque. Nous créons des logos uniques, professionnels et facilement reconnaissables, pensés pour fonctionner sur tous vos supports : site web, réseaux sociaux, documents ou supports imprimés. L'objectif : un logo qui vous ressemble et qui reste cohérent avec l'évolution de votre entreprise.",
  },
  {
    id: 'identite',
    label: 'Identité visuelle',
    title: 'Identité visuelle',
    text: "Le logo est le point de départ. L'identité visuelle définit tout l'univers de votre marque : couleurs, typographies, images et éléments graphiques. Nous créons un ensemble cohérent et reconnaissable, adapté à tous vos supports : site web, réseaux sociaux, communication et supports imprimés.",
  },
  {
    id: 'strategie',
    label: 'Stratégie de marque',
    title: 'Stratégie de marque',
    text: 'Avant de créer une identité, il faut savoir ce que votre marque représente. Nous définissons votre positionnement, votre cible et votre message pour vous démarquer clairement de vos concurrents. Cette stratégie devient la base de votre identité, de votre site web et de votre communication.',
  },
  {
    id: 'etude',
    label: 'Étude de marque',
    title: 'Étude de marque',
    text: "Une bonne stratégie repose sur des données, pas sur des suppositions. Nous analysons votre marché, votre cible et vos concurrents pour identifier les opportunités et définir le meilleur positionnement pour votre marque. L'objectif : prendre les bonnes décisions et construire une marque qui a une vraie place sur son marché.",
  },
  {
    id: 'graphique',
    label: 'Création graphique',
    title: 'Création graphique',
    text: 'Nous donnons vie à votre identité visuelle sur tous vos supports : réseaux sociaux, publicités, présentations, supports imprimés ou commerciaux. Chaque création est pensée pour être cohérente avec votre marque et répondre à un objectif précis : vendre, informer ou valoriser votre image.',
  },
  {
    id: 'naming',
    label: 'Naming',
    title: 'Naming',
    text: 'Le nom est souvent le premier élément que vos clients retiennent de votre marque. Nous créons des noms uniques, mémorables et cohérents avec votre positionnement et votre marché. Nous vérifions également leur disponibilité afin de vous permettre de choisir un nom solide et durable.',
  },
  {
    id: 'rebranding',
    label: 'Rebranding',
    title: 'Rebranding',
    text: 'Votre entreprise évolue, votre image doit parfois évoluer avec elle. Nous modernisons votre marque tout en conservant les éléments qui font déjà sa force. Objectif : faire évoluer votre identité, votre positionnement et votre communication sans perdre la reconnaissance acquise auprès de vos clients.',
  },
  {
    id: 'charte',
    label: 'Charte graphique',
    title: 'Charte graphique',
    text: "Nous définissons les règles d'utilisation de votre marque : logo, couleurs, typographies, éléments graphiques et ton de communication. La charte permet à toute personne qui travaille sur votre communication de respecter votre identité et de garantir une image cohérente sur tous vos supports.",
  },
]
