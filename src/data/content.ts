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
    image: '/images/realisation/colongete.jpg',
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
    image: '/images/realisation/mirroir.png',
    fit: 'contain',
  },
  {
    name: 'Faune Project',
    url: 'https://fauneproject.com/',
    description: "Une refonte qui a permis une augmentation du trafic organique de +74%",
    gradient: 'linear-gradient(140deg, oklch(0.4 0.03 260), oklch(0.22 0.02 260))',
    image: '/images/realisation/faune.png',
  },
  {
    name: 'Amalthéa Pilates',
    url: 'https://amalthea-studio.com/',
    description: 'Studio de Pilates en ligne qui a augmenté son taux de réservation de +87%.',
    gradient: 'linear-gradient(140deg, oklch(0.6 0.1 90), oklch(0.35 0.06 80))',
    image: '/images/projects/stud.png',
    fit: 'contain',
  },
  {
    name: 'Jyretourneimmédiatement',
    url: 'https://www.jyretourneimmediatement.com/',
    description: 'Compagnie de théâtre qui a vu son taux de visite augmenter de +520%',
    gradient: 'linear-gradient(140deg, oklch(0.55 0.08 60), oklch(0.32 0.05 50))',
    image: '/images/realisation/jyr.png',
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
    image: '/images/projects/vision.png',
  },
  {
    name: 'Le Chemin de mon Histoire',
    url: 'https://lechemindemonhistoire.fr/',
    description: "Laurent a doublé son chiffre d'affaires avec son site internet",
    gradient: 'linear-gradient(140deg, oklch(0.52 0.06 140), oklch(0.3 0.04 150))',
    image: '/images/realisation/chemin.png',
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

// Page "Stratégie de marque" — menu cliquable
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

// ---------------------------------------------------------------------------
// Page "Service UI/UX"
// ---------------------------------------------------------------------------

export interface ServiceTab {
  id: string
  label: string
  title: string
  text: string
}

export const uiuxTabs: ServiceTab[] = [
  {
    id: 'ux-research',
    label: 'UX Research',
    title: 'UX Research',
    text: "Nous analysons les besoins et les comportements de vos utilisateurs pour comprendre ce qui fonctionne et ce qui les bloque. Ces informations nous permettent d'améliorer la navigation, le contenu et l'expérience globale de votre site ou application.",
  },
  {
    id: 'ux-audit',
    label: 'UX Audit',
    title: 'UX Audit',
    text: "Nous analysons votre site ou votre application pour identifier les problèmes de navigation, de compréhension et d'utilisation. Nous vous proposons ensuite des recommandations prioritaires pour améliorer l'expérience utilisateur, les conversions et la satisfaction de vos clients.",
  },
  {
    id: 'interaction-design',
    label: 'Interaction Design',
    title: 'Interaction Design',
    text: 'Nous concevons des interactions simples et intuitives pour rendre chaque action plus claire et naturelle. Boutons, animations, transitions et retours visuels sont pensés pour guider l\'utilisateur tout au long de son parcours.',
  },
  {
    id: 'ui-design',
    label: 'UI Design',
    title: 'UI Design',
    text: 'Nous créons des interfaces modernes, claires et cohérentes avec votre identité visuelle. Mise en page, couleurs, typographies et composants sont pensés pour faciliter la navigation et rendre chaque action intuitive.',
  },
  {
    id: 'design-systems',
    label: 'Design Systems',
    title: 'Design Systems',
    text: 'Nous créons un système de design cohérent avec des composants et des règles réutilisables. Cela permet de gagner du temps, de garantir une interface cohérente et de faire évoluer facilement votre site ou application.',
  },
  {
    id: 'maquettes',
    label: 'Maquettes & Prototypes',
    title: 'Maquettes & Prototypes',
    text: 'Nous créons des maquettes et prototypes pour tester la structure et la navigation avant le développement. Cela permet de valider les parcours utilisateurs et de corriger les problèmes en amont, avant de passer à la réalisation.',
  },
  {
    id: 'applications-mobiles',
    label: 'Applications Mobiles',
    title: 'Applications Mobiles',
    text: 'Nous concevons des applications mobiles simples, rapides et intuitives, adaptées aux usages sur smartphone. Navigation, boutons et interactions sont pensés pour faciliter chaque action, même en utilisation à une main.',
  },
  {
    id: 'saas',
    label: 'Design de produits SaaS',
    title: 'Design de produits SaaS',
    text: "Nous concevons des interfaces SaaS simples et intuitives, même lorsque les fonctionnalités sont complexes. Nous travaillons les parcours, tableaux de bord, onboarding et fonctionnalités clés pour faciliter la prise en main, l'utilisation et la fidélisation des utilisateurs.",
  },
]

export const uiuxProcessSteps: { number: string; title: string; text: string }[] = [
  {
    number: '01',
    title: 'Découvrir',
    text: 'Nous définissons vos objectifs et analysons les besoins, les données et les utilisateurs pour établir une direction claire.',
  },
  {
    number: '02',
    title: 'Concevoir',
    text: "Nous créons les parcours, maquettes et interfaces en pensant à chaque étape de l'expérience utilisateur.",
  },
  {
    number: '03',
    title: 'Tester & valider',
    text: 'Nous testons les designs auprès des utilisateurs et ajustons les éléments qui peuvent créer des difficultés.',
  },
  {
    number: '04',
    title: 'Livrer',
    text: "Nous préparons les fichiers, maquettes et éléments nécessaires au développement, avec un accompagnement jusqu'à la mise en ligne.",
  },
]

// ---------------------------------------------------------------------------
// Page "SEO, AEO & GEO"
// ---------------------------------------------------------------------------

export interface ServiceCard {
  id: string
  title: string
  text: string
}

export const seoCards: ServiceCard[] = [
  {
    id: 'seo-technique',
    title: 'SEO technique',
    text: 'Optimisation de la structure, de la vitesse et de l\'indexation de votre site pour améliorer ses performances sur Google.',
  },
  {
    id: 'seo-local',
    title: 'SEO local',
    text: 'Amélioration de votre visibilité sur Google et Google Maps pour attirer davantage de clients dans votre zone.',
  },
  {
    id: 'seo-ecommerce',
    title: 'SEO e-commerce',
    text: 'Optimisation de votre boutique en ligne pour mieux positionner vos produits et attirer des clients qualifiés.',
  },
  {
    id: 'audit-seo',
    title: 'Audit SEO & feuille de route',
    text: 'Analyse complète de votre site et de votre référencement pour identifier les problèmes, les opportunités et les actions prioritaires.',
  },
  {
    id: 'geo-aeo',
    title: 'SEO & visibilité IA (GEO / AEO)',
    text: "Optimisation de votre contenu pour améliorer votre visibilité sur Google et dans les réponses générées par les moteurs d'IA.",
  },
  {
    id: 'netlinking',
    title: 'Autorité & netlinking',
    text: 'Développement de votre notoriété en ligne grâce aux backlinks, partenariats et contenus externes de qualité.',
  },
  {
    id: 'strategie-contenu',
    title: 'Stratégie de contenu SEO',
    text: 'Création d\'une stratégie de contenus basée sur les recherches, les besoins de vos clients et les opportunités de votre marché.',
  },
  {
    id: 'seo-entreprise',
    title: 'SEO pour grandes entreprises',
    text: 'Mise en place d\'une stratégie SEO adaptée aux sites complexes et aux entreprises ayant de nombreux contenus, produits ou marchés.',
  },
]

export const seoTabs: ServiceTab[] = [
  {
    id: 'seo-technique',
    label: 'SEO technique',
    title: 'SEO technique',
    text: 'Optimisation de la structure, de la vitesse et de l\'indexation de votre site pour améliorer ses performances sur Google.',
  },
  {
    id: 'seo-local',
    label: 'SEO local',
    title: 'SEO local',
    text: 'Amélioration de votre visibilité sur Google et Google Maps pour attirer davantage de clients dans votre zone.',
  },
  {
    id: 'seo-ecommerce',
    label: 'SEO e-commerce',
    title: 'SEO e-commerce',
    text: 'Optimisation de votre boutique en ligne pour mieux positionner vos produits et attirer des clients qualifiés.',
  },
  {
    id: 'audit-seo',
    label: 'Audit SEO',
    title: 'Audit SEO & feuille de route',
    text: 'Analyse complète de votre site et de votre référencement pour identifier les problèmes, les opportunités et les actions prioritaires.',
  },
  {
    id: 'geo-aeo',
    label: 'GEO / AEO',
    title: 'SEO & visibilité IA (GEO / AEO)',
    text: "Optimisation de votre contenu pour améliorer votre visibilité sur Google et dans les réponses générées par les moteurs d'IA.",
  },
  {
    id: 'netlinking',
    label: 'Netlinking',
    title: 'Autorité & netlinking',
    text: 'Développement de votre notoriété en ligne grâce aux backlinks, partenariats et contenus externes de qualité.',
  },
  {
    id: 'strategie-contenu',
    label: 'Contenu SEO',
    title: 'Stratégie de contenu SEO',
    text: 'Création d\'une stratégie de contenus basée sur les recherches, les besoins de vos clients et les opportunités de votre marché.',
  },
  {
    id: 'seo-entreprise',
    label: 'Grandes entreprises',
    title: 'SEO pour grandes entreprises',
    text: 'Mise en place d\'une stratégie SEO adaptée aux sites complexes et aux entreprises ayant de nombreux contenus, produits ou marchés.',
  },
]

export const seoProcessSteps: { number: string; title: string; text: string }[] = [
  {
    number: '01',
    title: 'Stabiliser & lancer',
    text: 'Nous corrigeons les principaux problèmes techniques et lançons les premières optimisations SEO.',
  },
  {
    number: '02',
    title: 'Construire les bases',
    text: 'Nous optimisons la structure du site, les liens internes et les données structurées, tout en développant les premiers contenus.',
  },
  {
    number: '03',
    title: 'Accélérer',
    text: 'Nous renforçons la production de contenus, optimisons les pages existantes et développons la notoriété du site.',
  },
  {
    number: '04',
    title: 'Développer',
    text: 'Nous renforçons ce qui fonctionne le mieux et définissons les prochaines priorités à partir des résultats obtenus.',
  },
]

// ---------------------------------------------------------------------------
// Page "Stratégie digitale"
// ---------------------------------------------------------------------------

export const digitalTabs: ServiceTab[] = [
  {
    id: 'seo-geo',
    label: 'SEO / GEO & visibilité',
    title: 'SEO / GEO & visibilité naturelle',
    text: 'Le SEO ne sert pas uniquement à générer du trafic. Il permet aussi de comprendre ce que recherchent vos clients et ce qui influence leurs décisions. Nous utilisons le SEO et le GEO pour améliorer votre visibilité, renforcer vos contenus et mieux orienter votre stratégie marketing.',
  },
  {
    id: 'pub-en-ligne',
    label: 'Publicité en ligne',
    title: 'Publicité en ligne',
    text: 'Nous créons et gérons vos campagnes publicitaires sur Google, les réseaux sociaux et les autres plateformes adaptées à votre activité. Nous testons les messages, visuels et audiences pour identifier ce qui fonctionne le mieux et concentrer le budget sur les campagnes les plus performantes.',
  },
  {
    id: 'content-marketing',
    label: 'Content marketing',
    title: 'Content marketing & stratégie éditoriale',
    text: "Nous créons des contenus utiles et adaptés à votre cible : articles, réseaux sociaux, vidéos, newsletters ou supports commerciaux. L'objectif : développer votre visibilité, démontrer votre expertise et créer des contenus que vos clients ont réellement envie de consulter.",
  },
  {
    id: 'conseil-audit',
    label: 'Conseil & audit',
    title: 'Conseil & audit marketing',
    text: "Nous analysons votre marque, votre site, vos campagnes et vos canaux d'acquisition pour identifier ce qui fonctionne et ce qui doit être amélioré. Vous repartez avec des priorités claires, des recommandations concrètes et une feuille de route adaptée à votre budget.",
  },
  {
    id: 'branding',
    label: 'Branding',
    title: 'Branding',
    text: 'Nous construisons une identité claire et reconnaissable pour votre marque, avec un positionnement, un message et une identité visuelle cohérents. L\'objectif : renforcer votre image, améliorer la reconnaissance de votre marque et assurer une communication cohérente sur tous vos supports.',
  },
  {
    id: 'web-design',
    label: 'Web Design',
    title: 'Web Design',
    text: 'Nous créons des sites web pensés pour transformer vos visiteurs en clients. Design, expérience utilisateur, contenu et conversion sont travaillés ensemble pour créer un site cohérent avec votre marque et vos objectifs marketing.',
  },
]

export const digitalProcessSteps: { number: string; title: string; text: string }[] = [
  {
    number: '01',
    title: 'Analyser',
    text: 'Nous étudions votre marché, vos clients, vos concurrents et vos performances pour identifier les meilleures opportunités.',
  },
  {
    number: '02',
    title: 'Définir la stratégie',
    text: 'Nous construisons un plan adapté à vos objectifs : positionnement, canaux, budget et parcours client.',
  },
  {
    number: '03',
    title: 'Déployer',
    text: 'Nous mettons en place les actions sur les différents canaux avec une communication cohérente et coordonnée.',
  },
  {
    number: '04',
    title: 'Mesurer & optimiser',
    text: 'Nous suivons les résultats et ajustons les actions et le budget pour améliorer les performances au fil du temps.',
  },
]

// ============================================================================
// === PUBLICITÉ DIGITALE ===
// ============================================================================

export const adsTabs: ServiceTab[] = [
  {
    id: 'google-ads',
    label: 'Google Ads',
    title: 'Google Ads',
    text: 'Nous créons et optimisons vos campagnes Google Ads pour vous positionner au bon moment, lorsque vos clients recherchent vos produits ou services.',
  },
  {
    id: 'social-ads',
    label: 'Réseaux sociaux',
    title: 'Publicité sur les réseaux sociaux',
    text: 'Nous diffusons vos publicités sur Facebook, Instagram, LinkedIn ou les plateformes adaptées à votre cible pour développer votre visibilité et générer des prospects.',
  },
  {
    id: 'programmatic',
    label: 'Programmatique',
    title: 'Publicité programmatique',
    text: 'Nous diffusons vos campagnes sur un large réseau de sites et de plateformes en ciblant précisément les audiences qui correspondent à votre activité.',
  },
  {
    id: 'lead-gen',
    label: 'Génération de leads',
    title: 'Génération de leads',
    text: "Nous mettons en place des campagnes pensées pour générer des prospects qualifiés et les accompagner jusqu'à la prise de contact ou au rendez-vous.",
  },
  {
    id: 'retargeting',
    label: 'Retargeting',
    title: 'Retargeting',
    text: "Nous relançons les visiteurs qui ont déjà découvert votre entreprise afin de rester présent au bon moment et d'augmenter les chances de conversion.",
  },
  {
    id: 'ad-creative',
    label: 'Création publicitaire',
    title: 'Création publicitaire',
    text: "Nous concevons les visuels, messages et formats nécessaires à vos campagnes pour capter l'attention et encourager l'action.",
  },
]

export const adsProcessSteps: { number: string; title: string; text: string }[] = [
  {
    number: '01',
    title: 'Analyser',
    text: 'Nous étudions votre marché, votre cible, vos concurrents et vos objectifs pour identifier les meilleures opportunités.',
  },
  {
    number: '02',
    title: 'Préparer',
    text: 'Nous définissons les audiences, les canaux, les messages, les formats et le budget adaptés à votre stratégie.',
  },
  {
    number: '03',
    title: 'Lancer',
    text: 'Nous déployons les campagnes et suivons leurs performances dès les premiers résultats.',
  },
  {
    number: '04',
    title: 'Optimiser',
    text: 'Nous analysons les résultats et ajustons les campagnes, les audiences et les budgets pour améliorer continuellement les performances.',
  },
]

// ============================================================================
// === CRÉATION DE SITE WEB (Développement Web) ===
// ============================================================================

export const webTabs: ServiceTab[] = [
  {
    id: 'creation-sur-mesure',
    label: 'Création sur mesure',
    title: 'Création de site web sur mesure',
    text: 'Nous créons des sites web uniques, pensés autour de votre marque, de votre cible et de vos objectifs. Design, structure, contenus et fonctionnalités sont adaptés à vos besoins, avec la solution technique la plus adaptée à votre projet.',
  },
  {
    id: 'refonte',
    label: 'Refonte de site',
    title: 'Refonte de site web',
    text: 'Nous modernisons votre site tout en conservant ce qui fonctionne déjà : contenus, référencement et parcours utilisateurs. Nous améliorons le design, la structure et les performances pour obtenir un site plus moderne, efficace et adapté à vos objectifs.',
  },
  {
    id: 'responsive',
    label: 'Web Responsive',
    title: 'Web Design Responsive',
    text: 'Nous concevons des sites parfaitement adaptés à tous les écrans : ordinateur, tablette et smartphone. Chaque page s\'adapte automatiquement à la taille de l\'écran, tout en conservant une navigation claire, une bonne lisibilité et une expérience agréable. L\'objectif : un site moderne, performant et efficace, quel que soit le support utilisé.',
  },
  {
    id: 'accessible',
    label: 'Web Accessible',
    title: 'Web Design Accessible',
    text: 'Nous concevons des sites accessibles au plus grand nombre, en prenant en compte la lisibilité, les contrastes, la navigation et la facilité d\'utilisation. L\'accessibilité est intégrée dès la conception pour offrir une expérience claire et agréable à tous les utilisateurs, quel que soit leur niveau ou leur mode de navigation.',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    title: 'E-commerce',
    text: 'Nous créons des boutiques en ligne pensées pour faciliter chaque étape du parcours d\'achat : découverte des produits, fiches produits, panier et paiement. Nous travaillons le design, la navigation, les performances et la conversion pour offrir une expérience simple et rassurante, tout en restant fidèle à votre marque.',
  },
  {
    id: 'b2b',
    label: 'Sites B2B',
    title: 'Création de sites web B2B',
    text: 'Nous créons des sites B2B qui présentent clairement vos offres et facilitent la prise de décision de vos prospects. Nous structurons les contenus, les preuves et les parcours pour permettre à chaque visiteur de trouver rapidement les informations dont il a besoin et de passer à l\'action.',
  },
  {
    id: 'grandes-entreprises',
    label: 'Grandes entreprises',
    title: 'Sites web pour grandes entreprises',
    text: 'Pour les entreprises plus importantes, nous adaptons le site aux enjeux de contenu, d\'accessibilité, d\'intégration et de cohérence entre les équipes. Nous construisons des plateformes robustes, évolutives et pensées pour répondre aux exigences des grandes organisations.',
  },
  {
    id: 'ux-design',
    label: 'Web orienté UX',
    title: 'Web Design orienté UX',
    text: 'Nous concevons votre site en partant des besoins et du comportement de vos utilisateurs. Navigation, structure, parcours et interactions sont pensés avant le design pour rendre le site simple, intuitif et agréable à utiliser.',
  },
]