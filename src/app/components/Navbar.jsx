'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Work', href: '#work' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full px-[8%] py-4 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image src="/logo.png" alt="Josias Boco" width={50} height={30} />
          <span className='ml-2 text-xl font-bold font-Ovo'>Josias</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-8'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className='font-Ovo hover:text-blue-600 transition-colors'>{link.text}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className='md:hidden text-2xl' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4'>
          <ul className='flex flex-col items-center gap-4'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className='font-Ovo hover:text-blue-600 transition-colors'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;