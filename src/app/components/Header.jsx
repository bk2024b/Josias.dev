import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
      <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
          <div>
            <Image src='/josias.png' width={128} height={128} alt='Josias' className='rounded-full w-32' />
          </div> 
          <h3 className='flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Josias BOCO
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </h3> 
          <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo leading-tight'>Full-Stack Web Developer</h1>
          <p className='max-w-2xl mx-auto font-Ovo text-gray-700 mt-2'>
            I craft responsive, elegant web experiences that combine compelling design with clean, efficient code. Passionate about transforming ideas into digital reality.
          </p>
          <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
            <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition duration-300'>
              Contact me 
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#work" className='px-10 py-3 border border-gray-300 rounded-full flex items-center gap-2 hover:border-gray-600 transition duration-300'>
              View my work
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
    </div>
  )
}

export default Header