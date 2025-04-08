import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  return (
      <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
          <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-800 dark:text-gray-200'>
              Have a project in mind or just want to chat about web development? I'm always open to new opportunities and collaborations. Feel free to reach out using the form below, and I'll get back to you as soon as possible.
          </p>
          <form className='max-w-2xl mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
                  <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200' type="text" placeholder='Enter your name' required/>
                  <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200' type="email" placeholder='Enter your email' required />
              </div>
              <textarea className='w-full p-4 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 mb-6' rows='6' placeholder='Enter your message' required></textarea>
              <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 dark:bg-blue-600 text-white rounded-full mx-auto hover:bg-black dark:hover:bg-blue-700 duration-500' type='submit'>
                Submit now <FaArrowRight />
              </button> 
              <p className='text-center mt-4 text-gray-500 hidden'>Sending...</p>
          </form>
      </div>
  )
}

export default Contact
