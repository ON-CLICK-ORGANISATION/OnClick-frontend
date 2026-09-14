import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Realisations from './pages/Realisations'
import StartProject from './pages/StartProject'
import StrategieMarque from './pages/StrategieMarque'
import CreationSiteWeb from './pages/CreationSiteWeb'
import ServiceUIUX from './pages/ServiceUIUX'
import SeoAeoGeo from './pages/SeoAeoGeo'
import StrategieDigitale from './pages/StrategieDigitale'
import PubliciteDigitale from './pages/PubliciteDigitale'
import NotreApproche from './pages/NotreApproche'
import AcquisitionClients from './pages/AcquisitionClients'
import MarketingDigital from './pages/MarketingDigital'
import RendezVousQualifies from './pages/RendezVousQualifies'
import APropos from './pages/APropos'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'
import SeoManager from './components/SeoManager'

// Chaque route publique doit avoir son entrée SEO dans src/seo/pages.ts (vérifié au build par scripts/prerender.mjs).
export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <SeoManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        {/* Pages du brief SEO */}
        <Route path="/notre-approche" element={<NotreApproche />} />
        <Route path="/acquisition-clients" element={<AcquisitionClients />} />
        <Route path="/marketing-digital" element={<MarketingDigital />} />
        <Route path="/rendez-vous-qualifies" element={<RendezVousQualifies />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<StartProject />} />
        {/* Ancienne URL de la page contact : redirigée (aussi côté serveur via public/_redirects et vercel.json) */}
        <Route path="/demarrer-un-projet" element={<Navigate to="/contact/" replace />} />
        <Route path="/strategie-de-marque" element={<StrategieMarque />} />
        <Route path="/creation-site-web" element={<CreationSiteWeb />} />
        <Route path="/service-ui-ux" element={<ServiceUIUX />} />
        <Route path="/seo-aeo-geo" element={<SeoAeoGeo />} />
        <Route path="/strategie-digitale" element={<StrategieDigitale />} />
        <Route path="/publicite-digitale" element={<PubliciteDigitale />} /> {/* <-- AJOUTÉ */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
