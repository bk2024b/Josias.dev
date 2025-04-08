'use client'

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';

const Logo = () => (
  <div className="flex items-center">
    <span className="font-ovo text-xl font-bold">
      Josias<span className="text-blue-500">.</span>
    </span>
  </div>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { text: 'Accueil', href: '#' },
    { text: 'À propos', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Projets', href: '#work' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full px-[8%] py-4 z-50 transition-all duration-300 
        ${scrolled 
          ? 'bg-gray-900/90 backdrop-blur-sm' 
          : 'bg-transparent'}`}
    >
      <div className='flex items-center justify-between'>
        <Logo />

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-8'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className='font-ovo hover:text-blue-600 transition-colors'
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className='flex items-center gap-4 md:hidden'>
          <button 
            className='text-2xl' 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-gray-900/90 backdrop-blur-sm absolute top-full left-0 w-full shadow-md py-4'>
          <ul className='flex flex-col items-center gap-4'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className='font-ovo hover:text-blue-600 transition-colors'
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