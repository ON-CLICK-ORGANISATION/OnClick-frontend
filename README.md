# OnlyClik — Site vitrine

## Aperçu du projet
- **Nom** : OnlyClik — Agence d'acquisition digitale

## Stack technique
- React 19 + TypeScript
- Vite 8 (bundler)
- TailwindCSS 3 (utility-first CSS)
- React Router 7 (SPA multi-pages)
- Pré-rendu HTML statique au build pour le SEO (`scripts/prerender.mjs`)
- Déploiement : Cloudflare Pages (site statique)

## Pages
| Route | Contenu |
|---|---|
| `/` | Accueil — hero, projet vedette (mockup laptop+mobile), 3 réalisations, liens « Acquisition digitale », "Vos objectifs, nos services", témoignages, formulaire de contact |
| `/notre-approche/` | Méthode de génération de prospects qualifiés (4 piliers + étapes d'accompagnement) |
| `/acquisition-clients/` | Leviers d'acquisition clients, résultats clients |
| `/marketing-digital/` | Expertises en marketing digital (liens vers les pages de services) |
| `/rendez-vous-qualifies/` | Démarche de génération de rendez-vous qualifiés, résultats clients |
| `/realisations/` | Grille des réalisations clients, formulaire |
| `/a-propos/` | Présentation d'OnlyClik, expertises, engagements, coordonnées |
| `/contact/` | Process en 3 étapes, formulaire (l'ancienne URL `/demarrer-un-projet` y est redirigée) |
| `/services/` | Liste des 6 services, section positionnement, témoignage, formulaire |
| `/strategie-de-marque/`, `/creation-site-web/`, `/service-ui-ux/`, `/seo-aeo-geo/`, `/strategie-digitale/`, `/publicite-digitale/` | Pages de services |

## SEO
- `src/seo/pages.ts` : titre, meta description et URL canonique de chaque page (issus du brief SEO).
  **Toute nouvelle route publique de `src/App.tsx` doit y être ajoutée** : le build échoue sinon.
- `src/seo/site.ts` : domaine, coordonnées et profils officiels (`sameAs`) repris dans les données structurées.
- `npm run build` génère dans `dist/` une page HTML par URL (contenu pré-rendu, balises SEO, Open Graph, JSON-LD),
  ainsi que `sitemap.xml` et `robots.txt`. Dans le navigateur, React remplace ce HTML au chargement.
- Redirections serveur : `public/_redirects` (Cloudflare Pages) et `vercel.json`.

Variables de build (toutes facultatives) :

| Variable | Rôle |
|---|---|
| `VITE_SITE_URL` | Domaine de production utilisé pour les URL canoniques, le sitemap et le robots.txt (défaut : `https://onlyclik.com`) |
| `VITE_GOOGLE_SITE_VERIFICATION` | Code de la balise de vérification Google Search Console |
| `VITE_BING_SITE_VERIFICATION` | Code de la balise de vérification Bing Webmaster Tools |
| `INDEXNOW_KEY` | Clé IndexNow : publie `/<clé>.txt`. Après déploiement : `INDEXNOW_KEY=<clé> npm run indexnow` |

## Développement local
```bash
npm install
npm run build
npm run dev:sandbox   # wrangler pages dev dist --ip 0.0.0.0 --port 3000
```
