import React from 'react';
import { FaCode, FaMobileAlt, FaServer, FaSearch } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => (
  <div className='p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow'>
    <div className='text-3xl mb-4 text-black dark:text-white'>{icon}</div>
    <h3 className='text-xl font-bold mb-3 font-ovo'>{title}</h3>
    <p className='text-gray-600 dark:text-gray-300'>{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Creation of responsive, modern websites and web applications using the latest technologies.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Design',
      description: 'Building interfaces that work perfectly across all devices, from mobile to desktop.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Robust server-side solutions for data management and application functionality.'
    },
    {
      icon: <FaSearch />,
      title: 'SEO Optimization',
      description: 'Improving your site visibility and search engine rankings for better online presence.'
    }
  ];

  return (
      <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-ovo'>What I offer</h4>
          <h2 className='text-center text-5xl font-ovo'>My Services</h2>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-800 dark:text-gray-200'>
              I provide comprehensive web development services tailored to meet your specific needs. Here's what I can do for you:
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
