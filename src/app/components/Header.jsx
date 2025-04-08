import React from 'react';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='w-full px-[12%] py-20 flex flex-col md:flex-row items-center justify-between gap-10'>
      <div className='flex-1'>
        <h1 className='text-5xl md:text-6xl font-bold mb-6 font-Ovo'>
          Hi, I'm <span className='text-blue-600'>Josias Boco</span>
        </h1>
        <h2 className='text-2xl md:text-3xl mb-6 font-Ovo'>Full-Stack Web Developer</h2>
        <p className='text-gray-700 mb-8 max-w-lg font-Ovo'>
          I build responsive, user-friendly web applications that drive business growth and deliver exceptional user experiences.
        </p>
        <div className='flex flex-wrap gap-4'>
          <a 
            href='#contact' 
            className='py-3 px-6 bg-black text-white rounded-full flex items-center gap-2 hover:bg-black/80 transition-colors'
          >
            Get in touch <FaArrowRight />
          </a>
          <a 
            href='/resume.pdf' 
            download 
            className='py-3 px-6 border border-black rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors'
          >
            Download CV <FaDownload />
          </a>
        </div>
      </div>
      <div className='flex-1 flex justify-center'>
        <div className='relative w-80 h-80 rounded-full bg-gray-100 overflow-hidden border-4 border-white shadow-lg'>
          <Image src='/josias-profile.png' alt='Josias Boco' layout='fill' objectFit='cover' />
        </div>
      </div>
    </div>
  );
};

export default Header;