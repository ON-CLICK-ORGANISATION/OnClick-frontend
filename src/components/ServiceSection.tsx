import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Marketing',
    description:
      'Dans un web saturé, la visibilité ne suffit plus. Nous créons des campagnes ciblées et une stratégie SEO performante pour attirer les bons prospects et générer une croissance mesurable.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/services/marketing',
    linkText: 'Découvrir le marketing',
    reverse: false,
  },
  {
    title: 'Développement',
    description:
      'Nous concevons des sites web performants, évolutifs et pensés pour convertir vos visiteurs en clients.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/services/developpement',
    linkText: 'En savoir plus',
    reverse: true,
  },
  {
    title: 'Création',
    description:
      'Une identité forte inspire confiance. Nous créons une image de marque qui vous distingue et renforce votre crédibilité.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/services/creation',
    linkText: 'Découvrir la création',
    reverse: false,
  },
  {
    title: 'Stratégie',
    description:
      'Une croissance durable repose sur une vision claire. Nous élaborons une stratégie adaptée pour transformer vos objectifs en résultats.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/services/strategie',
    linkText: 'En savoir plus',
    reverse: true,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F7FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A5568] mb-3">
            CE QUE NOUS FAISONS
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Vos objectifs, nos services
          </h2>
        </motion.div>

        {/* Liste verticale de cartes carrées - TOUTES PARFAITEMENT CARRÉES */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col md:flex-row ${
                service.reverse ? 'md:flex-row-reverse' : ''
              }`}
              style={{ height: '400px', maxWidth: '100%' }}
            >
              {/* Partie Image - 50% de la carte carrée */}
              <div className="w-full md:w-1/2 h-full bg-[#F1F5F9] overflow-hidden flex-shrink-0 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{
                    objectPosition: 'center 30%',
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background = 'linear-gradient(135deg, #EAB30820, #CA8A0420)';
                      parent.style.display = 'flex';
                      parent.style.alignItems = 'center';
                      parent.style.justifyContent = 'center';
                      parent.innerHTML = `
                        <span class="text-6xl font-bold text-[#EAB308] opacity-30">
                          ${service.title.charAt(0)}
                        </span>
                      `;
                    }
                  }}
                />
              </div>

              {/* Partie Texte - 50% de la carte carrée */}
              <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center h-full">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B6CB0] hover:text-[#1A4F7A] transition-colors group w-fit"
                >
                  {service.linkText}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}