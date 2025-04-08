import React from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiSupabase, SiGit, SiGithub } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const About = () => {
  return (
      <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
          <h2 className='text-center text-5xl font-ovo'>About me</h2>
          <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
              <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src='/josias.png' alt='Josias' width={320} height={320} className='w-full rounded-3xl' />
              </div>
              <div className='flex-1'>
                  <p className='mb-10 max-w-2xl font-ovo text-foreground'>
                    I'm Josias Boco, a passionate web developer specializing in creating responsive and interactive digital experiences. With a strong foundation in both front-end and back-end technologies, I transform ideas into elegant, functional websites and applications. My approach combines technical precision with creative problem-solving to deliver solutions that exceed expectations.
                  </p>
                  <h4 className='my-6 text-gray-800 dark:text-gray-200 font-ovo'>Technologies I work with</h4>
                  <ul className='flex flex-wrap items-center gap-5 mb-8'>
                      <li className='flex flex-col items-center'>
                        <FaHtml5 size={40} className="text-orange-600" />
                        <span className='mt-1'>HTML</span>
                      </li>
                      <li className='flex flex-col items-center'>
                        <FaCss3Alt size={40} className="text-blue-500" />
                        <span className='mt-1'>CSS</span>
                      </li>
                      <li className='flex flex-col items-center'>
                        <FaJs size={40} className="text-yellow-500" />
                        <span className='mt-1'>JavaScript</span>
                      </li>
                      <li className='flex flex-col items-center'>
                        <FaPython size={40} className="text-blue-600" />
                        <span className='mt-1'>Python</span>
                      </li>
                      <li className='flex flex-col items-center'>
                        <FaReact size={40} className="text-blue-400" />
                        <span className='mt-1'>React</span>
                      </li>
                      <li className='flex flex-col items-center'>
                        <SiNextdotjs size={40} />
                        <span className='mt-1'>Next.js</span>
                      </li>
                  </ul>
                  <h4 className='my-6 text-gray-800 dark:text-gray-200 font-ovo'>Tools I use</h4>
                  <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
                    <li className='flex flex-col items-center'>
                      <VscCode size={30} className="text-blue-500" />
                      <span className='mt-1'>VS Code</span>
                    </li>
                    <li className='flex flex-col items-center'>
                      <SiSupabase size={30} className="text-green-600" />
                      <span className='mt-1'>Supabase</span>
                    </li>
                    <li className='flex flex-col items-center'>
                      <SiGit size={30} className="text-orange-600" />
                      <span className='mt-1'>Git</span>
                    </li>
                    <li className='flex flex-col items-center'>
                      <SiGithub size={30} className="text-black dark:text-white" />
                      <span className='mt-1'>GitHub</span>
                    </li>
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default About