import { ORGANIZATION, SITE_ALTERNATE_NAMES, SITE_IMAGE, SITE_LANGUAGE, SITE_NAME, SITE_URL, absoluteUrl } from './site'
import { fullTitle, type PageSeo } from './pages'

type JsonLd = Record<string, unknown>

const ORGANIZATION_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
const LOGO_ID = `${SITE_URL}/#logo`

function organization(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAMES,
    url: absoluteUrl('/'),
    logo: {
      '@type': 'ImageObject',
      '@id': LOGO_ID,
      url: absoluteUrl(SITE_IMAGE.path),
      width: SITE_IMAGE.width,
      height: SITE_IMAGE.height,
      caption: SITE_NAME,
    },
    image: { '@id': LOGO_ID },
    description: ORGANIZATION.description,
    email: ORGANIZATION.email,
    telephone: ORGANIZATION.telephone,
    address: { '@type': 'PostalAddress', ...ORGANIZATION.address },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: ORGANIZATION.email,
      telephone: ORGANIZATION.telephone,
      url: absoluteUrl('/contact/'),
      availableLanguage: 'French',
    },
    knowsAbout: ORGANIZATION.knowsAbout,
    ...(ORGANIZATION.sameAs.length > 0 ? { sameAs: ORGANIZATION.sameAs } : {}),
  }
}

function website(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: absoluteUrl('/'),
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAMES,
    description: ORGANIZATION.description,
    inLanguage: SITE_LANGUAGE,
    publisher: { '@id': ORGANIZATION_ID },
  }
}

/** Graphe JSON-LD d'une page : Organization + WebSite + WebPage (+ BreadcrumbList, + Service). */
export function buildPageJsonLd(page: PageSeo): JsonLd {
  const url = absoluteUrl(page.path)
  const isHome = page.path === '/'
  const webPage: JsonLd = {
    '@type': page.schemaType ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: fullTitle(page),
    description: page.description,
    inLanguage: SITE_LANGUAGE,
    isPartOf: { '@id': WEBSITE_ID },
  }
  const graph: JsonLd[] = [organization(), website(), webPage]

  if (isHome || page.schemaType === 'AboutPage' || page.schemaType === 'ContactPage') {
    webPage.about = { '@id': ORGANIZATION_ID }
  }

  if (!isHome) {
    webPage.breadcrumb = { '@id': `${url}#breadcrumb` }
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: page.breadcrumb, item: url },
      ],
    })
  }

  if (page.service) {
    webPage.mainEntity = { '@id': `${url}#service` }
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: page.service,
      serviceType: page.service,
      description: page.description,
      url,
      provider: { '@id': ORGANIZATION_ID },
      audience: { '@type': 'BusinessAudience', audienceType: 'Professionnels' },
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
