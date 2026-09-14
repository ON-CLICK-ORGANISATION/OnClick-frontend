import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { applyHeadTags, buildHeadTagsForPath } from '../seo/head'

/**
 * Met à jour les balises SEO (title, description, canonical, Open Graph, JSON-LD…) à chaque changement de page.
 * Au premier chargement, ces mêmes balises sont déjà dans le HTML pré-généré au build (scripts/prerender.mjs).
 */
export default function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    applyHeadTags(document, buildHeadTagsForPath(pathname))
  }, [pathname])

  return null
}
