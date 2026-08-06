import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {ArrowRight} from 'lucide-react'
import TestimonialCarousel from '../components/TestimonialCarousel'
import ContactForm from '../components/ContactForm'

const servicesData = [
    {
        title: 'Création de sites web',
        description:
            'Conception de sites performants, sécurisés et évolutifs, pensés pour offrir une expérience optimale et convertir vos visiteurs en clients.',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        link: '/contact',
        ctaText: 'En savoir plus',
    },
    {
        title: 'Publicité digitale',
        description:
            'Campagnes Google Ads, réseaux sociaux, publicité programmatique et stratégies d\'acquisition conçues pour atteindre vos objectifs de croissance.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        link: '/contact',
        ctaText: 'En savoir plus',
    },
    {
        title: 'Data & Analytics',
        description:
            'Mise en place d\'outils de mesure et de tableaux de bord pour suivre précisément les performances de vos campagnes et leur impact sur votre chiffre d\'affaires.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        link: '/contact',
        ctaText: 'En savoir plus',
    },
    {
        title: 'Stratégie de marque',
        description:
            'Définissez votre positionnement, affirmez votre différence et construisez une image cohérente sur l\'ensemble de vos points de contact.',
        image: 'https://images.unsplash.com/photo-1432889821006-3e44d3ad5e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        link: '/contact',
        ctaText: 'En savoir plus',
    },
    {
        title: 'SEO, AEO & GEO',
        description:
            'Optimisation de votre visibilité sur Google, les moteurs de recherche alimentés par l\'IA et les nouveaux outils de recherche conversationnelle.',
        image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        link: '/contact',
        ctaText: 'En savoir plus',
    },
    {
        title: 'Stratégie digitale',
        description:
            'Élaboration d\'une feuille de route claire : choix des canaux, répartition du budget et plan d\'action aligné sur vos objectifs commerciaux.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        link: '/contact',
        ctaText: 'En savoir plus',
    },
]

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            {/* Section principale - Grille 3x2 */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Titre de section - Style élégant */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1E293B] leading-tight tracking-tight">
                            Nos Services
                        </h1>
                    </motion.div>

                    {/* Grille 3x2 de cartes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: index * 0.08}}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col items-center text-center p-8 border border-[#E2E8F0]"
                            >
                                {/* Image circulaire */}
                                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 flex-shrink-0 bg-[#F1F5F9]">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
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
                          <span class="text-3xl font-bold text-[#EAB308] opacity-40">
                            ${service.title.charAt(0)}
                          </span>
                        `;
                                            }
                                        }}
                                    />
                                </div>

                                {/* Titre - Style semi-bold avec couleur élégante */}
                                <h3 className="text-xl font-semibold text-[#1E293B] mb-3 tracking-tight">
                                    {service.title}
                                </h3>

                                {/* Description - Gris élégant */}
                                <p className="text-sm text-[#64748B] leading-relaxed mb-6 flex-1">
                                    {service.description}
                                </p>

                                {/* Bouton CTA - Redirige vers /contact */}
                                <Link
                                    to={service.link}
                                    className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-medium text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg group"
                                >
                                    {service.ctaText}
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section "Des services pensés pour accélérer votre croissance" */}
            <section className="bg-white py-2 md:py-4 pb-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Titre principal aligné à gauche - 2 lignes distinctes */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] leading-[1.2] tracking-tight max-w-3xl mb-8">
                        Des services pensés pour
                        <br/>
                        <span className="text-[#FDE68A] text-2xl sm:text-3xl md:text-4xl font-semibold">
        accélérer votre croissance
      </span>
                    </h2>

                    {/* 2 colonnes de texte */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <p className="text-[#64748B] text-base leading-relaxed">
                            Développer son activité est un défi. Entre le marketing, le référencement,
                            les campagnes publicitaires et les nouvelles technologies, il est souvent
                            difficile de savoir où investir pour obtenir de vrais résultats.
                        </p>
                        <p className="text-[#64748B] text-base leading-relaxed">
                            OnlyCloz vous accompagne avec une stratégie claire et des solutions digitales
                            conçues pour attirer plus de prospects, renforcer votre visibilité et accélérer
                            votre croissance. De la réflexion à la mise en œuvre, nous vous apportons
                            l'expertise et les outils nécessaires pour faire de votre présence en ligne
                            un véritable levier de développement.
                        </p>
                    </div>

                    {/* Bouton CTA centré */}
                    <div className="flex justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-[#FFE957] text-[#0F172A] font-semibold text-sm py-3.5 px-8 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                        >
                            Démarrer un projet
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section Témoignages */}
            <TestimonialCarousel/>

            {/* Section CTA avec formulaire */}
            <ContactForm/>
        </div>
    )
}