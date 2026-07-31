import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Realisations from './pages/Realisations'
import StartProject from './pages/StartProject'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/demarrer-un-projet" element={<StartProject />} />
      </Routes>
    </Layout>
  )
}
