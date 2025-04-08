import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  return (
      <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-Ovo'>Contactez-moi</h4>
          <h2 className='text-center text-5xl font-Ovo'>Entrer en contact</h2>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-200'>
              Vous avez un projet en tête ou souhaitez simplement discuter de développement web ? Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter en utilisant le formulaire ci-dessous, et je vous répondrai dès que possible.
          </p>
          <form className='max-w-2xl mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
                  <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-600 rounded-md bg-gray-800 text-gray-200' type="text" placeholder='Entrez votre nom' required/>
                  <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-600 rounded-md bg-gray-800 text-gray-200' type="email" placeholder='Entrez votre email' required />
              </div>
              <textarea className='w-full p-4 outline-none border-[0.5px] border-gray-600 rounded-md bg-gray-800 text-gray-200 mb-6' rows='6' placeholder='Entrez votre message' required></textarea>
              <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-blue-600 text-white rounded-full mx-auto hover:bg-blue-700 duration-500' type='submit'>
                Envoyer <FaArrowRight />
              </button> 
              <p className='text-center mt-4 text-gray-500 hidden'>Envoi en cours...</p>
          </form>
      </div>
  )
}

export default Contact