import React from 'react'

const Work = () => {
  return (
      <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
          <h2 className='text-center text-5xl font-Ovo'>My latest Work </h2>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
              {/* Un petit paragraphe ici */}
          </p>
          <div className='grid grid-cols-4 gap-6 my-10'>
              {/* Alignez les projets ici j'en ai fait deux */}
          </div>
    </div>
  )
}

export default Work