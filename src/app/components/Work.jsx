import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ image, title, description, technologies, githubLink, liveLink }) => (
  <div className='rounded-lg overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow'>
    <div className='relative h-48'>
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className='p-6'>
      <h3 className='text-xl font-bold mb-2 font-Ovo'>{title}</h3>
      <p className='text-gray-600 mb-4'>{description}</p>
      <div className='flex flex-wrap gap-2 mb-4'>
        {technologies.map((tech, index) => (
          <span key={index} className='px-3 py-1 text-sm bg-gray-100 rounded-full'>{tech}</span>
        ))}
      </div>
      <div className='flex gap-4'>
        <a href={githubLink} target='_blank' className='flex items-center gap-2 text-gray-700 hover:text-black transition-colors'>
          <FaGithub /> Code
        </a>
        <a href={liveLink} target='_blank' className='flex items-center gap-2 text-gray-700 hover:text-black transition-colors'>
          <FaExternalLinkAlt /> Live Demo
        </a>
      </div>
    </div>
  </div>
);

const Work = () => {
  const projects = [
    {
      image: '/projects/project1.jpg',
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product catalog, cart and payment integration.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'],
      githubLink: 'https://github.com/josiasboco/ecommerce-project',
      liveLink: 'https://ecommerce-project.vercel.app'
    },
    {
      image: '/projects/project2.jpg',
      title: 'Task Management App',
      description: 'A productivity tool for organizing tasks with real-time updates and team collaboration.',
      technologies: ['React', 'Firebase', 'CSS Modules'],
      githubLink: 'https://github.com/josiasboco/task-manager',
      liveLink: 'https://task-manager-app.vercel.app'
    }
  ];

  return (
      <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
          <h2 className='text-center text-5xl font-Ovo'>My latest Work</h2>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
              Here are some of my recent projects that showcase my skills and expertise in creating modern, functional web applications.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-10'>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
          </div>
      </div>
  )
}

export default Work