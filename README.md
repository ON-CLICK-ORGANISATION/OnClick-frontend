# Only Clik — Site vitrine (copie)

## Aperçu du projet
- **Nom** : Only Clik — Agence digitale
- **Objectif** : Reproduction fidèle du site https://onlycloz-digital-partner.lovable.app en React + Vite + TypeScript + TailwindCSS.
- **Contenu** : textes, structure, couleurs (palette OKLCH d'origine), polices (Outfit + DM Sans) et données (services, réalisations, témoignages) copiés à l'identique depuis le site de référence.

## Stack technique
- React 19 + TypeScript
- Vite 8 (bundler)
- TailwindCSS 3 (utility-first CSS)
- React Router 7 (SPA multi-pages)
- Déploiement : Cloudflare Pages (site statique)

## Pages
| Route | Contenu |
|---|---|
| `/` | Accueil — hero, projet vedette, 3 réalisations, "Vos objectifs, nos expertises", témoignage, formulaire de contact |
| `/services` | Liste des 6 services, section positionnement, témoignage, formulaire |
| `/realisations` | Grille des 11 réalisations clients, formulaire |
| `/demarrer-un-projet` | Process en 3 étapes (Échange / Stratégie / Exécution), formulaire |

## Fonctionnalités
- ✅ Navigation multi-pages (React Router) avec en-tête sticky + menu mobile
- ✅ Carrousel de témoignages (3 avis, boutons précédent/suivant)
- ✅ Formulaire de contact (validation basique, message de confirmation à l'envoi — pas de backend branché)
- ✅ Fond animé de points (SVG généré, façon "dot swirl" de l'original)
- ✅ Palette de couleurs OKLCH fidèle à l'original (primary/magenta/lemon/butter/mist...)
- ✅ Responsive (mobile / tablette / desktop)

## Non implémenté / limites
- ❌ Le formulaire de contact n'envoie pas réellement de mail (aucun backend/CRM fourni) — il affiche juste un message de succès côté client.
- ❌ Pas de mode sombre (l'original ne l'expose pas non plus dans la navigation).
- ❌ Pas d'animation d'entrée/scroll avancée (l'original utilise probablement des librairies d'animation propriétaires non répliquées à l'identique).

## Prochaines étapes possibles
- Brancher le formulaire de contact à un service d'emailing (Resend/SendGrid) via une fonction Cloudflare Pages.
- Ajouter des tests end-to-end (Playwright) sur la navigation.
- Optimiser les images/illustrations si des visuels réels remplacent les orbes de couleur.

## Déploiement
- **Plateforme** : Cloudflare Pages
- **Build** : `npm run build` → dossier `dist/`
- **Statut** : en développement local (sandbox), prêt à déployer

## Développement local
```bash
npm install
npm run build
npm run dev:sandbox   # wrangler pages dev dist --ip 0.0.0.0 --port 3000
```
