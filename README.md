# Only Clik — Site vitrine
 
## Aperçu du projet
- **Nom** : Only Clik — Agence digitale

## Stack technique
- React 19 + TypeScript
- Vite 8 (bundler)
- TailwindCSS 3 (utility-first CSS)
- React Router 7 (SPA multi-pages)
- Déploiement : Cloudflare Pages (site statique)

## Pages
| Route | Contenu |
|---|---|
| `/` | Accueil — hero, projet vedette (mockup laptop+mobile), 3 réalisations, "Notre méthode" (4 étapes), "Vos objectifs, nos expertises", témoignage, formulaire de contact |
| `/services` | Liste des 6 services, section positionnement, témoignage, formulaire |
| `/realisations` | Grille des 11 réalisations clients, formulaire |
| `/demarrer-un-projet` | Process en 3 étapes (Échange / Stratégie / Exécution), formulaire |

## Développement local
```bash
npm install
npm run build
npm run dev:sandbox   # wrangler pages dev dist --ip 0.0.0.0 --port 3000
```
