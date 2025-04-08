import React from 'react';
import { FaCode, FaMobileAlt, FaServer, FaSearch } from 'react-icons/fa';

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
      title: 'Développement Web',
      description: 'Création de sites web et d\'applications web modernes et réactifs avec les dernières technologies.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Design Responsive',
      description: 'Conception d\'interfaces qui fonctionnent parfaitement sur tous les appareils, du mobile au bureau.'
    },
    {
      icon: <FaServer />,
      title: 'Développement Backend',
      description: 'Solutions robustes côté serveur pour la gestion des données et les fonctionnalités des applications.'
    },
    {
      icon: <FaSearch />,
      title: 'Optimisation SEO',
      description: 'Amélioration de la visibilité de votre site et de son classement dans les moteurs de recherche pour une meilleure présence en ligne.'
    }
  ];

  return (
      <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-ovo'>Ce que je propose</h4>
          <h2 className='text-center text-5xl font-ovo'>Mes Services</h2>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-200'>
              Je propose des services complets de développement web adaptés à vos besoins spécifiques. Voici ce que je peux faire pour vous :
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
          </div>
      </div>
  )
}

export default Services