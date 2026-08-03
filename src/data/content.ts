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
}

// Hero showcase project (large orb on home page)
export const heroProject: MiniProject & { imageMobile: string } = {
  name: 'Amalthéa Studio',
  url: 'https://amalthea-studio.com/',
  description: 'Studio de Pilates en ligne qui a augmenté son taux de réservation de +87%.',
  image: '/images/projects/pilates-laptop.jpg',
  imageMobile: '/images/projects/pilates-mobile.jpg',
}

// Small featured projects strip on home page
export const featuredProjects: Project[] = [
  {
    name: 'Le Sixth',
    url: 'https://lesixth.com/',
    description: 'Restaurant qui a augmenté son taux de réservation de +67%',
    gradient: 'linear-gradient(140deg, oklch(0.55 0.08 60), oklch(0.35 0.05 50))',
    image: '/images/projects/lesixth.jpg',
  },
  {
    name: 'Centre Vision Laser',
    url: 'https://visionlaser.eu/',
    description:
      "La refonte du site et l'amélioration du parcours utilisateur a augmenté le nombre de leads via le site de +350%",
    gradient: 'linear-gradient(140deg, oklch(0.3 0.02 260), oklch(0.2 0.02 260))',
    image: '/images/projects/visionlaser.jpg',
  },
  {
    name: 'Aude Coué Kinésiologue',
    url: 'https://aude-coue.com/',
    description: 'Aude a doublé son nombre de rendez-vous en 4 mois avec notre site internet',
    gradient: 'linear-gradient(140deg, oklch(0.45 0.07 200), oklch(0.28 0.05 210))',
    image: '/images/projects/audecoue.jpg',
  },
]

// Full projects list (Réalisations page)
export const projects: Project[] = [
  {
    name: 'Horizon Nouveau',
    url: 'https://www.horizon-nouveau.fr/',
    description: "Une stratégie SEO efficace qui a permis à ce coach d'atteindre la première place sur Google.",
    gradient: 'linear-gradient(140deg, oklch(0.55 0.08 60), oklch(0.32 0.05 50))',
  },
  {
    name: 'Hôtel la Colongette',
    url: 'https://hotel-la-colongette.com/',
    description: 'Augmentation du taux de réservation de +130% avec le nouveau site',
    gradient: 'linear-gradient(140deg, oklch(0.45 0.07 200), oklch(0.26 0.05 210))',
  },
  {
    name: 'Espace Oasium',
    url: 'https://espace-oasium.com/',
    description: 'Ce site de réservation de bureaux a atteint un taux de remplissage de 87%',
    gradient: 'linear-gradient(140deg, oklch(0.5 0.09 340), oklch(0.3 0.06 330))',
  },
  {
    name: 'Bénédicte Nécaille',
    url: 'https://www.lemiroiretlaplume.fr/',
    description: 'Biographe qui est passée de 1 à 6 biographies par an',
    gradient: 'linear-gradient(140deg, oklch(0.52 0.06 140), oklch(0.3 0.04 150))',
  },
  {
    name: 'Faune Project',
    url: 'https://fauneproject.com/',
    description: "Une refonte qui a permis une augmentation du trafic organique de +74%",
    gradient: 'linear-gradient(140deg, oklch(0.4 0.03 260), oklch(0.22 0.02 260))',
  },
  {
    name: 'Amalthéa Pilates',
    url: 'https://amalthea-studio.com/',
    description: 'Studio de Pilates en ligne qui a augmenté son taux de réservation de +87%.',
    gradient: 'linear-gradient(140deg, oklch(0.6 0.1 90), oklch(0.35 0.06 80))',
  },
  {
    name: 'Jyretourneimmédiatement',
    url: 'https://www.jyretourneimmediatement.com/',
    description: 'Compagnie de théâtre qui a vu son taux de visite augmenter de +520%',
    gradient: 'linear-gradient(140deg, oklch(0.55 0.08 60), oklch(0.32 0.05 50))',
  },
  {
    name: 'Hôtel Royal Palace',
    url: 'https://hotel-royal-palace.com/',
    description: 'Hôtel devenu numéro 1 sur Google dans sa région',
    gradient: 'linear-gradient(140deg, oklch(0.45 0.07 200), oklch(0.26 0.05 210))',
  },
  {
    name: 'Vision Laser',
    url: 'https://visionlaser.eu/',
    description:
      "La refonte du site et l'amélioration du parcours utilisateur a augmenté le nombre de leads via le site de +350%",
    gradient: 'linear-gradient(140deg, oklch(0.5 0.09 340), oklch(0.3 0.06 330))',
  },
  {
    name: 'Le Chemin de mon Histoire',
    url: 'https://lechemindemonhistoire.fr/',
    description: "Laurent a doublé son chiffre d'affaires avec son site internet",
    gradient: 'linear-gradient(140deg, oklch(0.52 0.06 140), oklch(0.3 0.04 150))',
  },
  {
    name: 'Aude Coué',
    url: 'https://aude-coue.com/',
    description: 'Aude a augmenté son taux de rendez-vous de +100% en 4 mois',
    gradient: 'linear-gradient(140deg, oklch(0.4 0.03 260), oklch(0.22 0.02 260))',
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
