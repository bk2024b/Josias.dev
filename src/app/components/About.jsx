import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
      <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
          <h2 className='text-center text-5xl font-Ovo'>About me</h2>
          <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
              <div className='w-64 sm:w-80 rounded-3xl max-w-none'><Image src='/josias.png' alt='Josias' className='w-full rounded-3xl' /></div>
              <div className='flex-1'>
                  <p className='mb-10 max-w-2xl font-Ovo'>{/* Un petit paragraphe sur moi ici */}</p>
                  <ul>
                      {/* Ici tu dois display mes compétences je maitrise les langades HTML, CSS, Javascript, Python, React Js, Next Js bien sûr avec les icônes aussi  */}
                  </ul>
                  <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>
                  <ul className='flex items-center gap-3 sm:gap-5'>{/* Display ici les outils que j'utilise avec les icônes, vs code, supabase, git, github */}</ul>
              </div>
          </div>
      </div>
  )
}

export default About