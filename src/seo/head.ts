import { SITE_IMAGE, SITE_LOCALE, SITE_NAME, SITE_VERIFICATION, absoluteUrl } from './site'
import { BRAND_SUFFIX, findPageSeo, fullTitle, type PageSeo } from './pages'
import { buildPageJsonLd } from './structuredData'

/** Balise du <head> gérée par le SEO. Elle porte l'attribut data-seo pour pouvoir être remplacée à chaque page. */
export interface HeadTag {
  tag: 'title' | 'meta' | 'link' | 'script'
  attrs?: Record<string, string>
  text?: string
}

const INDEXABLE_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export function buildPageHeadTags(page: PageSeo): HeadTag[] {
  const url = absoluteUrl(page.path)
  const image = absoluteUrl(SITE_IMAGE.path)
  const meta = (key: 'name' | 'property', value: string, content: string): HeadTag => ({
    tag: 'meta',
    attrs: { [key]: value, content },
  })

  const tags: HeadTag[] = [
    { tag: 'title', text: fullTitle(page) },
    meta('name', 'description', page.description),
    meta('name', 'robots', INDEXABLE_ROBOTS),
    { tag: 'link', attrs: { rel: 'canonical', href: url } },
    meta('property', 'og:type', 'website'),
    meta('property', 'og:site_name', SITE_NAME),
    meta('property', 'og:locale', SITE_LOCALE),
    meta('property', 'og:title', page.title),
    meta('property', 'og:description', page.description),
    meta('property', 'og:url', url),
    meta('property', 'og:image', image),
    meta('property', 'og:image:width', String(SITE_IMAGE.width)),
    meta('property', 'og:image:height', String(SITE_IMAGE.height)),
    meta('property', 'og:image:alt', SITE_IMAGE.alt),
    meta('name', 'twitter:card', 'summary'),
    meta('name', 'twitter:title', page.title),
    meta('name', 'twitter:description', page.description),
    meta('name', 'twitter:image', image),
    meta('name', 'twitter:image:alt', SITE_IMAGE.alt),
    { tag: 'script', attrs: { type: 'application/ld+json' }, text: JSON.stringify(buildPageJsonLd(page)) },
  ]

  if (page.path === '/') {
    if (SITE_VERIFICATION.google) tags.push(meta('name', 'google-site-verification', SITE_VERIFICATION.google))
    if (SITE_VERIFICATION.bing) tags.push(meta('name', 'msvalidate.01', SITE_VERIFICATION.bing))
  }

  return tags
}

/** URL inconnue : la page 404 ne doit jamais être indexée. */
export function buildNotFoundHeadTags(): HeadTag[] {
  return [
    { tag: 'title', text: `Page introuvable${BRAND_SUFFIX}` },
    { tag: 'meta', attrs: { name: 'robots', content: 'noindex, follow' } },
  ]
}

export function buildHeadTagsForPath(pathname: string): HeadTag[] {
  const page = findPageSeo(pathname)
  return page ? buildPageHeadTags(page) : buildNotFoundHeadTags()
}

/** Remplace les balises SEO du document (utilisé lors de la navigation côté client). */
export function applyHeadTags(doc: Document, tags: HeadTag[]): void {
  doc.head.querySelectorAll('[data-seo]').forEach((element) => element.remove())
  for (const { tag, attrs = {}, text } of tags) {
    const element = doc.createElement(tag)
    element.setAttribute('data-seo', '')
    for (const [name, value] of Object.entries(attrs)) element.setAttribute(name, value)
    if (text !== undefined) element.textContent = text
    doc.head.appendChild(element)
  }
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Sérialise les balises pour le HTML pré-rendu au build. */
export function serializeHeadTags(tags: HeadTag[]): string {
  return tags
    .map(({ tag, attrs = {}, text = '' }) => {
      const attributes = Object.entries(attrs)
        .map(([name, value]) => ` ${name}="${escapeHtml(value)}"`)
        .join('')
      const open = `<${tag} data-seo${attributes}>`
      if (tag === 'meta' || tag === 'link') return open
      // JSON-LD : « < » échappé pour qu'aucun texte ne puisse fermer la balise <script>.
      const content = tag === 'script' ? text.replace(/</g, '\\u003c') : escapeHtml(text)
      return `${open}${content}</${tag}>`
    })
    .join('\n    ')
}
