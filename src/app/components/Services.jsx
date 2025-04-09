import React from 'react';
import { FaCode, FaMobileAlt, FaServer, FaSearch, FaHandsHelping } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => (
  <div className='p-6 rounded-lg border border-gray-700 bg-gray-800 hover:shadow-lg transition-shadow'>
    <div className='text-3xl mb-4 text-white'>{icon}</div>
    <h3 className='text-xl font-bold mb-3 font-ovo'>{title}</h3>
    <p className='text-gray-300'>{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Développement Web personnalisé',
      description: 'Je conçois des sites et des applications web modernes, rapides et pensés pour vos utilisateurs. Chaque projet est adapté à vos besoins spécifiques.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Design Responsive et Expérience Utilisateur',
      description: 'Votre site sera impeccable sur tous les supports — smartphone, tablette, ordinateur. Je soigne chaque détail pour offrir une expérience fluide et agréable à vos visiteurs.'
    },
    {
      icon: <FaServer />,
      title: 'Développement Backend solide',
      description: 'Je développe des systèmes fiables pour gérer vos données et automatiser vos processus, afin que votre application fonctionne parfaitement en toutes circonstances.'
    },
    {
      icon: <FaSearch />,
      title: 'Optimisation de la visibilité (SEO)',
      description: 'Je m\'assure que votre site soit bien référencé pour attirer plus de visiteurs naturellement, avec de bonnes pratiques SEO intégrées dès la création.'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Accompagnement & Suivi',
      description: 'Au-delà du développement, je vous accompagne avec des conseils personnalisés pour faire évoluer votre projet dans le temps.'
    }
  ];

  return (
      <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-ovo'>Ce que je propose</h4>
          <h2 className='text-center text-5xl font-ovo'>Mes Services</h2>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-200'>
              Je propose des services complets de développement web adaptés à vos besoins spécifiques. Voici ce que je peux faire pour vous :
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
          </div>
      </div>
  )
}

export default Services