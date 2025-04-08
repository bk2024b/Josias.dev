'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const Navbar = () => {
    sonst [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translate(16rem)'
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])
  return (
      <>
          <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm":""}`}>
              <a href="#top">
                  {/*<Image src={} alt="" className='w-28 cursor-pointer mr-14'/>*/}
              </a>
              <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm ${isScroll ? "" : ""} bg-opacity-50`}>
                  <li><a className="font-Helvetica" href="#top">Home</a></li>
                  <li><a className="font-sans-serif" href="#about">About me</a></li>
                  <li><a className="font-sans-serif" href="#services">Services</a></li> 
                  <li><a className="font-sans-serif" href="#work">My Work</a></li>
                  <li><a className="font-sans-serif" href="#contact">Contact me</a></li>
              </ul>
              <div className='flex items-center gap-4'>
                  <button>icone de changement de thème darkmode ou lightmode avec un className de w-6</button>
                  <a href="#contact" className='font-sans-serif hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact {/*<Image src={ } alt=""className='w-3' />*/}</a>
                  <button className='block md:hidden ml-3' onClick={openMenu}>
                      menu hamburger avec className w-6
                  </button>
              </div>
              {/* mobile menu */}
              <ul ref={ sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                  <div className='absolute right-6 top-6' onClick={closeMenu}>
                      <Image iconé pour fermer le menu mobile className='w-5 cursor-pointer'/>
                  </div>
                  <li><a className="font-Helvetica"  onClick={closeMenu} href="#top">Home</a></li>
                  <li><a className="font-sans-serif" onClick={closeMenu} href="#about">About me</a></li>
                  <li><a className="font-sans-serif" onClick={closeMenu} href="#services">Services</a></li>
                  <li><a className="font-sans-serif" onClick={closeMenu} href="#work">My Work</a></li>
                  <li><a className="font-sans-serif" onClick={closeMenu} href="#contact">Contact me</a></li>
              </ul>
          </nav>
      </>
  )
}

export default Navbar;