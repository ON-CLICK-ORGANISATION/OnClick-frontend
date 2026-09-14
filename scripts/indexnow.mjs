// Notifie Bing (et les autres moteurs compatibles IndexNow) des URL du site, après un déploiement.
// Usage : INDEXNOW_KEY=<clé> npm run indexnow            (ajoutez « -- --dry-run » pour afficher la requête sans l'envoyer)
// Pré-requis : le site en ligne doit avoir été construit avec la même INDEXNOW_KEY (fichier https://<domaine>/<clé>.txt).

import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const key = process.env.INDEXNOW_KEY?.trim()
const dryRun = process.argv.includes('--dry-run')

if (!key || !/^[a-zA-Z0-9-]{8,128}$/.test(key)) {
  console.error('Définissez INDEXNOW_KEY (8 à 128 caractères parmi a-z, A-Z, 0-9 et « - »).')
  process.exit(1)
}

let sitemap
try {
  sitemap = await readFile(path.join(root, 'dist', 'sitemap.xml'), 'utf8')
} catch {
  console.error('dist/sitemap.xml introuvable : lancez d’abord « npm run build ».')
  process.exit(1)
}

const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const { host, origin } = new URL(urlList[0])
const payload = { host, key, keyLocation: `${origin}/${key}.txt`, urlList }

if (dryRun) {
  console.log(JSON.stringify(payload, null, 2))
  process.exit(0)
}

const keyResponse = await fetch(payload.keyLocation)
const publishedKey = keyResponse.ok ? (await keyResponse.text()).trim() : ''
if (publishedKey !== key) {
  console.error(`${payload.keyLocation} est absent ou différent : déployez le site construit avec INDEXNOW_KEY.`)
  process.exit(1)
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
})
console.log(`IndexNow : HTTP ${response.status} pour ${urlList.length} URL.`)
if (!response.ok) {
  console.error(await response.text())
  process.exit(1)
}
