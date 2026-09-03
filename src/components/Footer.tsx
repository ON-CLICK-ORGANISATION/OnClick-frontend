import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  pages: [
    { label: 'Accueil', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Stratégie de marque', path: '/strategie-de-marque' },
    { label: 'Création de site web', path: '/creation-site-web' },
    { label: 'Service UI/UX', path: '/service-ui-ux' },
    { label: 'SEO, AEO & GEO', path: '/seo-aeo-geo' },
    { label: 'Stratégie digitale', path: '/strategie-digitale' },
    { label: 'Réalisations', path: '/realisations' },
    { label: 'Démarrer un projet', path: '/demarrer-un-projet' },
  ],
  legal: [
    'Mentions légales',
    'Politique de confidentialité',
    'CGV',
    'RGPD',
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden text-white mt-10"
      style={{ background: 'linear-gradient(180deg, #0a0f14 0%, #0d3a44 100%)' }}
    >
      {/* Diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 16px)',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute -top-20 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(0, 180, 216, 0.10)' }}
      />

      <div className="relative container-page pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-10 sm:mb-12">

          {/* Brand block */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5 w-fit group">
              <img
                  src="/images/logo-mark.png"
                  alt="Only Clik"
                  className="h-14 w-15 object-contain"
              />
              <span className="font-display text-xl font-bold tracking-[0.22em]">
                <span style={{ color: '#00D4F5' }}>ONLY CLIK</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed mb-6 text-white/55 max-w-xs">
              L'agence digitale qui aide les professionnels à exister en ligne et à développer leur activité.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-2xs font-bold uppercase tracking-widest mb-5 text-white/70">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm flex items-center gap-2 group transition-colors duration-200 text-white/55 hover:text-[#00D4F5]"
                  >
                    <span
                      className="h-px transition-all duration-300 group-hover:w-5"
                      style={{ width: '12px', background: 'rgba(0, 212, 245, 0.7)' }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xs font-bold uppercase tracking-widest mb-5 text-white/70">
              Contact
            </h3>
            <ul className="space-y-3.5">
              {[
                { icon: Mail, text: 'contact@onlyclik.com' },
                { icon: Phone, text: '+33 1 23 45 67 89' },
                { icon: MapPin, text: 'Paris, France' },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/55">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0, 212, 245, 0.14)', border: '1px solid rgba(0, 212, 245, 0.30)' }}
                  >
                    <Icon size={13} style={{ color: '#00D4F5' }} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>

            <Link
              to="/demarrer-un-projet"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium group transition-colors duration-200"
              style={{ color: '#00D4F5' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={e => e.currentTarget.style.color = '#00D4F5'}
            >
              Nous contacter
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {year} ONLY CLIK. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-5">
              {footerLinks.legal.map((l, i) => (
                <span
                  key={i}
                  className="text-2xs cursor-pointer whitespace-nowrap transition-colors duration-200 text-white/40 hover:text-white/75"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
