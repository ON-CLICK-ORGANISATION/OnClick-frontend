// Étape de build exécutée après `vite build` (voir « npm run build »).
// Pour chaque page publique déclarée dans src/seo/pages.ts, génère dist/<page>/index.html contenant :
//  - le contenu de la page déjà rendu (lisible par Google, Bing/Copilot et les robots qui n'exécutent pas JavaScript) ;
//  - les balises SEO propres à la page (title, description, canonical, Open Graph, X, JSON-LD).
// Génère aussi sitemap.xml, robots.txt et, si INDEXNOW_KEY est défini, le fichier de clé IndexNow.
// Le site reste une application React classique : au chargement, main.tsx monte l'application et remplace ce HTML.

import { existsSync } from 'node:fs'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')
const SEO_BLOCK = /<!-- SEO:START[\s\S]*?<!-- SEO:END -->/
const ROOT_DIV = '<div id="root"></div>'
const INDEXNOW_KEY_PATTERN = /^[a-zA-Z0-9-]{8,128}$/

const errors = []
const warnings = []
const withSlash = (p) => (p.endsWith('/') ? p : `${p}/`)
const escapeXml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')

const { render, seoPages, buildPageHeadTags, serializeHeadTags, SITE_URL, absoluteUrl } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

const template = await readFile(path.join(distDir, 'index.html'), 'utf8')
if (!SEO_BLOCK.test(template) || !template.includes(ROOT_DIV)) {
  throw new Error('dist/index.html : bloc « <!-- SEO:START --> … <!-- SEO:END --> » ou <div id="root"></div> introuvable.')
}

console.log(`\nPré-rendu SEO — ${SITE_URL}`)

// 1. Une page HTML par URL publique
const titles = new Map()
const descriptions = new Map()

for (const page of seoPages) {
  const appHtml = render(page.path)
  const headTags = buildPageHeadTags(page)
  const head = serializeHeadTags(headTags)
  const title = headTags.find((tag) => tag.tag === 'title')?.text ?? ''
  const h1Count = appHtml.match(/<h1[\s>]/g)?.length ?? 0

  if (!/^\/([a-z0-9-]+\/)*$/.test(page.path)) errors.push(`${page.path} : chemin invalide (minuscules, tirets, slash final).`)
  if (appHtml.includes('data-page="not-found"')) errors.push(`${page.path} : aucune route de src/App.tsx ne correspond.`)
  if (h1Count !== 1) errors.push(`${page.path} : ${h1Count} titre(s) <h1> au lieu d'un seul.`)
  if (/noindex/i.test(head)) errors.push(`${page.path} : balise noindex inattendue.`)
  if (titles.has(title)) errors.push(`${page.path} : même titre que ${titles.get(title)}.`)
  if (descriptions.has(page.description)) errors.push(`${page.path} : même meta description que ${descriptions.get(page.description)}.`)
  if (title.length > 65) warnings.push(`${page.path} : titre de ${title.length} caractères (peut être tronqué dans les résultats).`)
  if (page.description.length < 70 || page.description.length > 170) {
    warnings.push(`${page.path} : meta description de ${page.description.length} caractères (idéal : 70 à 160).`)
  }
  titles.set(title, page.path)
  descriptions.set(page.description, page.path)

  // Fonctions de remplacement : le contenu inséré ne doit pas être interprété ($&, $1…).
  const html = template.replace(SEO_BLOCK, () => head).replace(ROOT_DIV, () => `<div id="root">${appHtml}</div>`)
  const outFile = path.join(distDir, page.path, 'index.html')
  await mkdir(path.dirname(outFile), { recursive: true })
  await writeFile(outFile, html)
  console.log(`  ${page.path.padEnd(24)} ${title}`)
}

// 2. Cohérence avec src/App.tsx et public/_redirects
const seoPaths = new Set(seoPages.map((page) => page.path))
const redirectsFile = await readFile(path.join(root, 'public', '_redirects'), 'utf8').catch(() => '')
const redirects = redirectsFile
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'))
  .map((line) => {
    const [from, to] = line.split(/\s+/)
    return { from: withSlash(from), to }
  })

for (const { from, to } of redirects) {
  if (!seoPaths.has(withSlash(new URL(to, SITE_URL).pathname))) {
    errors.push(`public/_redirects : ${from} redirige vers ${to}, qui n'est pas une page indexable.`)
  }
}

const appSource = await readFile(path.join(root, 'src', 'App.tsx'), 'utf8')
for (const [, routePath] of appSource.matchAll(/<Route\s+path="([^"]+)"/g)) {
  if (routePath === '*') continue
  const normalized = withSlash(routePath)
  if (!seoPaths.has(normalized) && !redirects.some((redirect) => redirect.from === normalized)) {
    errors.push(`Route « ${routePath} » (src/App.tsx) sans entrée dans src/seo/pages.ts ni dans public/_redirects.`)
  }
}

// 3. sitemap.xml et robots.txt (générés ici pour rester alignés sur SITE_URL et sur la liste des pages)
for (const file of ['robots.txt', 'sitemap.xml']) {
  if (existsSync(path.join(root, 'public', file))) warnings.push(`public/${file} est remplacé par la version générée.`)
}

const lastmod = new Date().toISOString().slice(0, 10)
const sitemapUrls = seoPages
  .map((page) => `  <url>\n    <loc>${escapeXml(absoluteUrl(page.path))}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
  .join('\n')
await writeFile(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`,
)

await writeFile(
  path.join(distDir, 'robots.txt'),
  [
    '# Toutes les pages publiques sont ouvertes aux moteurs de recherche (Google, Bing/Copilot, etc.).',
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${absoluteUrl('/sitemap.xml')}`,
    '',
  ].join('\n'),
)

// 4. Fichier de clé IndexNow (facultatif) : la clé n'est jamais stockée dans le dépôt.
const indexNowKey = process.env.INDEXNOW_KEY?.trim()
if (indexNowKey) {
  if (INDEXNOW_KEY_PATTERN.test(indexNowKey)) {
    await writeFile(path.join(distDir, `${indexNowKey}.txt`), indexNowKey)
  } else {
    errors.push('INDEXNOW_KEY invalide : 8 à 128 caractères parmi a-z, A-Z, 0-9 et « - ».')
  }
}

await rm(ssrDir, { recursive: true, force: true })

for (const warning of warnings) console.warn(`  ⚠ ${warning}`)
if (errors.length > 0) {
  for (const error of errors) console.error(`  ✗ ${error}`)
  console.error(`\nPré-rendu SEO : ${errors.length} erreur(s).\n`)
  process.exit(1)
}
console.log(`\n${seoPages.length} pages pré-rendues, sitemap.xml et robots.txt générés${indexNowKey ? ', clé IndexNow ajoutée' : ''}.\n`)
