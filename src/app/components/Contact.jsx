'use client'

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';


const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Envoi....");
        const formData = new FormData(event.target);

        formData.append("access_key", "67acd708-20a2-40f3-aa9f-2e436a8241b4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Formulaire envoyée avec succès.");
            event.target.reset();
        } else {
            console.log("Erreur", data);
            setResult(data.message);
        }
    };

  return (
      <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-Ovo'>Contactez-moi</h4>
          <h2 className='text-center text-5xl font-Ovo'>Entrons en contact</h2>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-8 font-Ovo text-gray-200'>
              Vous avez un projet en tête ou simplement envie d'échanger autour du développement web ? Je suis toujours à l'écoute de nouvelles idées, opportunités et collaborations. Remplissez le formulaire ci-dessous et je reviendrai vers vous rapidement.
          </p>
          <p className='text-center max-w-2xl mx-auto mb-12 font-Ovo text-blue-500 font-bold text-lg'>
              Je suis là pour transformer vos idées en réalité numérique.
          </p>
          <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
                  <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-600 rounded-md bg-gray-800 text-gray-200' name='name' type="text" placeholder='Entrez votre nom' required/>
                  <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-600 rounded-md bg-gray-800 text-gray-200' name='email' type="email" placeholder='Entrez votre email' required />
              </div>
              <textarea className='w-full p-4 outline-none border-[0.5px] border-gray-600 rounded-md bg-gray-800 text-gray-200 mb-6' rows='6' name='message' placeholder='Entrez votre message' required></textarea>
              <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-blue-600 text-white rounded-full mx-auto hover:bg-blue-700 duration-500' type='submit'>
                Envoyer <FaArrowRight />
              </button> 
              <p className='text-center mt-4 text-gray-500 hidden'>{result}</p>
          </form>
      </div>
  )
}

export default Contact