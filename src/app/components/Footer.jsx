import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
      <div className='mt-20 bg-gray-900 py-10'>
          <div className='text-center flex flex-col items-center'>
              <div className='mb-4'>
                <Image src="/josias.png" alt="Josias Boco" width={80} height={40} />
              </div>
              <div className='flex items-center justify-center gap-2'>
                <FaEnvelope className="text-gray-300" />
                <a href="mailto:josiasboco@gmail.com" className="text-gray-300 hover:text-white">josiasboco@gmail.com</a>
              </div>
          </div>
          <div className='text-center sm:flex items-center justify-between border-t border-gray-700 mx-[10%] mt-12 py-6'>
              <p className='text-gray-300'>© 2025 Josias Boco. Tous droits réservés.</p>
              <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                  <li>
                    <a target='_blank' href="https://github.com/bk2024b" className='flex items-center gap-2 text-gray-300 hover:text-white transition-colors'>
                      <FaGithub /> GitHub
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href="https://www.linkedin.com/in/josias-boco-70963a219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='flex items-center gap-2 text-gray-300 hover:text-white transition-colors'>
                      <FaLinkedin /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href="https://instagram.com/josias.webdev?igsh=MWdhcTMzOHBiMGp6aQ==" className='flex items-center gap-2 text-gray-300 hover:text-white transition-colors'>
                      <FaInstagram /> Instagram
                    </a>
                  </li>
              </ul>
          </div>
      </div>
  )
}

export default Footer