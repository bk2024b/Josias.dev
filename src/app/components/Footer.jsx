import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
      <div className='mt-20 bg-gray-50 dark:bg-gray-900 py-10'>
          <div className='text-center flex flex-col items-center'>
              <div className='mb-4'>
                <Image src="/logo.png" alt="Josias Boco" width={80} height={40} />
              </div>
              <div className='flex items-center justify-center gap-2'>
                <FaEnvelope className="text-gray-700 dark:text-gray-300" />
                <a href="mailto:josiasboco@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">josiasboco@gmail.com</a>
              </div>
          </div>
          <div className='text-center sm:flex items-center justify-between border-t border-gray-300 dark:border-gray-700 mx-[10%] mt-12 py-6'>
              <p className='text-gray-700 dark:text-gray-300'>© 2025 Josias Boco. All rights reserved.</p>
              <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                  <li>
                    <a target='_blank' href="https://github.com/josiasboco" className='flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'>
                      <FaGithub /> GitHub
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href="https://linkedin.com/in/josiasboco" className='flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'>
                      <FaLinkedin /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href="https://instagram.com/josiasboco" className='flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'>
                      <FaInstagram /> Instagram
                    </a>
                  </li>
              </ul>
          </div>
      </div>
  )
}

export default Footer