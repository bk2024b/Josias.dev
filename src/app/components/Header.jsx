import Image from 'next/image'
import React from 'react'


const Header = () => {
  return (
      <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex fles-col items-center justify-center gap-4'>
          <div>
            <Image src='/josias.png' alt='Josias' className='rounded-full w-32' />
          </div> 
          <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo '>Hi! I'm Josias BOCO {/* Ajouter une iconé ici */}
          </h3> 
          <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Web developer {/* Reformule le texte ici */}</h1>
          <p className='max-w-2xl mx-auto font-Ovo'>{/* Un petit texte ici */}</p>
          <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact me <Image className='rounded-full w-32' /> {/* Une icône de flèche vers le droit c'est ça qui doit être l'image */}</a>
          </div>
    </div>
  )
}

export default Header 