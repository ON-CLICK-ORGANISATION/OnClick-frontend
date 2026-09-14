/**
 * Données de référence du site pour le SEO : balises <head>, données structurées (JSON-LD), sitemap et robots.txt.
 * Tout provient du brief SEO client ou d'informations déjà affichées sur le site (pied de page) :
 * n'ajoutez ici que des informations vérifiables.
 */

// Domaine de production, surchargeable au build : VITE_SITE_URL=https://www.onlyclik.com npm run build
const DEFAULT_SITE_URL = 'https://onlyclik.com'

function readEnv(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : undefined
}

export const SITE_URL = new URL(readEnv(import.meta.env.VITE_SITE_URL) ?? DEFAULT_SITE_URL).origin
export const SITE_NAME = 'OnlyClik'
export const SITE_ALTERNATE_NAMES = ['Only Clik']
export const SITE_LANGUAGE = 'fr-FR'
export const SITE_LOCALE = 'fr_FR'

/** Image de partage (Open Graph / X) et logo de l'organisation : icône existante du projet. */
export const SITE_IMAGE = { path: '/icons/icon-512.png', width: 512, height: 512, alt: 'Logo OnlyClik' }

export const ORGANIZATION = {
  description:
    'OnlyClik accompagne les professionnels dans leur développement grâce au marketing digital, à l’acquisition et à la génération de prospects.',
  email: 'contact@onlyclik.com',
  telephone: '+33 6 15 83 75 61',
  telephoneDisplay: '06 15 83 75 61',
  address: {
    streetAddress: '8, la Lande',
    postalCode: '37460',
    addressLocality: 'Genillé',
    addressCountry: 'FR',
  },
  knowsAbout: [
    'Acquisition digitale',
    'Génération de prospects',
    'Acquisition de clients',
    'Marketing digital',
    'Rendez-vous qualifiés',
    'Référencement naturel (SEO, AEO, GEO)',
    'Publicité digitale',
    'Création de site web',
    'Design UI/UX',
    'Stratégie de marque',
    'Stratégie digitale',
  ],
  /**
   * Profils officiels de l'entreprise (LinkedIn, Facebook, Instagram, fiche Google Business Profile…).
   * À compléter dès qu'ils existent : ils aident Google et Bing à identifier l'entité « OnlyClik ».
   */
  sameAs: [] as string[],
}

/** Codes de vérification Google Search Console et Bing Webmaster Tools (optionnels, fournis au build). */
export const SITE_VERIFICATION = {
  google: readEnv(import.meta.env.VITE_GOOGLE_SITE_VERIFICATION),
  bing: readEnv(import.meta.env.VITE_BING_SITE_VERIFICATION),
}

export function absoluteUrl(path: string): string {
  return new URL(path, `${SITE_URL}/`).href
}
