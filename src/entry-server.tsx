/* oxlint-disable react/only-export-components -- point d'entrée du build, jamais rechargé à chaud */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'

// Utilisé uniquement au build (scripts/prerender.mjs) pour générer le HTML statique de chaque page publique.
// Dans le navigateur, main.tsx monte l'application normalement et remplace ce HTML.
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}

export { seoPages } from './seo/pages'
export { buildPageHeadTags, serializeHeadTags } from './seo/head'
export { SITE_URL, absoluteUrl } from './seo/site'
