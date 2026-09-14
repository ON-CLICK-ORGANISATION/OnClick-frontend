import { Link } from 'react-router-dom'

// Page affichée pour toute URL inconnue. SeoManager y ajoute une balise « noindex ».
export default function NotFound() {
  return (
    <section data-page="not-found" className="container-page py-24 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Erreur 404</p>
      <h1 className="mt-4 font-display text-[clamp(2.3rem,5.5vw,3.75rem)] leading-[1.05]">Page introuvable</h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/80">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex rounded-full bg-butter px-7 py-3 text-sm font-semibold text-butter-foreground transition-opacity hover:opacity-85"
        >
          Retour à l'accueil
        </Link>
        <Link
          to="/contact/"
          className="inline-flex rounded-full border border-border px-7 py-3 text-sm font-semibold transition-colors hover:border-primary"
        >
          Nous contacter
        </Link>
      </div>
    </section>
  )
}
