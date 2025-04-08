import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='w-full px-[12%] py-20 flex flex-col md:flex-row items-center justify-between gap-10'>
      <div className='flex-1'>
        <h1 className='text-5xl md:text-6xl font-bold mb-6 font-ovo'>
          Bonjour, je suis <span className='text-blue-600 dark:text-blue-500'>Josias Boco</span>
        </h1>
        <h2 className='text-2xl md:text-3xl mb-6 font-ovo'>Développeur Web Full-Stack</h2>
        <p className='text-gray-200 mb-8 max-w-lg font-ovo'>
          Je crée des applications web réactives et conviviales qui favorisent la croissance des entreprises et offrent des expériences utilisateur exceptionnelles.
        </p>
        <div className='flex flex-wrap gap-4'>
          <a 
            href='#contact' 
            className='py-3 px-6 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors'
          >
            Me contacter <FaArrowRight />
          </a>
        </div>
      </div>
      <div className='flex-1 flex justify-center'>
        <div className='relative w-80 h-80 rounded-full bg-gray-800 overflow-hidden border-4 border-gray-700 shadow-lg'>
          <Image src='/josias-profile.png' alt='Josias Boco' layout='fill' objectFit='cover' />
        </div>
      </div>
    </div>
  );
};

export default Header;