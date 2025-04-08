'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])
    
    return (
        <>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm":""}`}>
                <a href="#top" className="font-bold text-2xl font-Ovo">Josias.dev</a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm ${isScroll ? "" : ""} bg-opacity-50`}>
                    <li><a className="font-medium hover:text-gray-700" href="#top">Home</a></li>
                    <li><a className="font-medium hover:text-gray-700" href="#about">About me</a></li>
                    <li><a className="font-medium hover:text-gray-700" href="#services">Services</a></li> 
                    <li><a className="font-medium hover:text-gray-700" href="#work">My Work</a></li>
                    <li><a className="font-medium hover:text-gray-700" href="#contact">Contact me</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button className="w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </button>
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
                        Contact
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                {/* mobile menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-50 transition duration-500'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <li><a className="font-medium" onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className="font-medium" onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className="font-medium" onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className="font-medium" onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className="font-medium" onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;