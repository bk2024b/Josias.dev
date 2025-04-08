import React from 'react'

const Contact = () => {
  return (
      <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
          <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
              {/* Un petit paragraphe ici */}
          </p>
          <form className='max-w-2xl mx-auto'>
              <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                  <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="text"  placeholder='Enter your name' required/>
                  <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-whie' type="email" placeholder='Enter your email' required />
              </div>
              <textarea className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' rows='6' placeholder='Enter your message' required></textarea>
              <button className='py-3 px-8 w-max flex items-center justify-betwen gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500' type='submit'>Submit now{/* Avec une icône arrow */}</button> 
              <p className='mt-4'>sending....</p>
          </form>
      </div>
  )
}

export default Contact