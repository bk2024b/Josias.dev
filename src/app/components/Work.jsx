import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ image, title, description, technologies, githubLink, liveLink }) => (
  <div className='rounded-lg overflow-hidden border border-gray-700 bg-gray-800 hover:shadow-lg transition-shadow'>
    <div className='relative h-48'>
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className='p-6'>
      <h3 className='text-xl font-bold mb-2 font-Ovo'>{title}</h3>
      <p className='text-gray-300 mb-4'>{description}</p>
      <div className='flex flex-wrap gap-2 mb-4'>
        {technologies.map((tech, index) => (
          <span key={index} className='px-3 py-1 text-sm bg-gray-700 rounded-full'>{tech}</span>
        ))}
      </div>
      <div className='flex gap-4'>
        <a href={githubLink} target='_blank' className='flex items-center gap-2 text-gray-300 hover:text-white transition-colors'>
          <FaGithub /> Code
        </a>
        <a href={liveLink} target='_blank' className='flex items-center gap-2 text-gray-300 hover:text-white transition-colors'>
          <FaExternalLinkAlt /> Démo
        </a>
      </div>
    </div>
  </div>
);

const Work = () => {
  const projects = [
    {
      image: '/projects/project1.jpg',
      title: 'Mini Blog Tech',
      description: 'Un blog minimaliste dédié aux actualités et tutoriels technologiques avec un design élégant et intuitif.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'],
      githubLink: 'https://github.com/josiasboco/tech-blog',
      liveLink: 'https://tech-blog.vercel.app'
    },
    {
      image: '/projects/project2.jpg',
      title: 'Application de Gestion de Tâches',
      description: 'Un outil de productivité pour organiser les tâches avec des mises à jour en temps réel et la collaboration d\'équipe.',
      technologies: ['React', 'Firebase', 'CSS Modules'],
      githubLink: 'https://github.com/josiasboco/task-manager',
      liveLink: 'https://task-manager-app.vercel.app'
    }
  ];

  return (
      <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-Ovo'>Mon portfolio</h4>
          <h2 className='text-center text-5xl font-Ovo'>Mes derniers Projets</h2>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-200'>
              Voici quelques-uns de mes projets récents qui démontrent mes compétences et mon expertise dans la création d'applications web modernes et fonctionnelles.
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