'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
/* eslint-disable @next/next/no-img-element */

const navLinks = [
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const textColor = scrolled ? 'text-[#1a1a1a]' : 'text-white';
  const lineColor = scrolled ? 'bg-[#1a1a1a]' : 'bg-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#faf7f3]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a href="#" className="transition-all duration-500">
              <img
                src="/images/efe-logo.png"
                alt="Efe Constructora"
                className={`h-14 md:h-20 w-auto object-contain transition-all duration-500 ${
                  scrolled ? '' : 'invert'
                }`}
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] uppercase tracking-[0.15em] ${textColor} hover:opacity-60 transition-all duration-300`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/595981000000"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[13px] uppercase tracking-[0.15em] ${textColor} border ${scrolled ? 'border-[#1a1a1a]' : 'border-white'} px-5 py-2 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-300`}
              >
                Presupuesto
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-[6px] p-2"
              aria-label="Menu"
            >
              <span className={`block w-6 h-[1.5px] ${lineColor} transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
              <span className={`block w-6 h-[1.5px] ${lineColor} transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-[1.5px] ${lineColor} transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#1a1a1a] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="text-white text-2xl font-editorial tracking-wide hover:opacity-60 transition-opacity"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/595981000000"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white text-sm uppercase tracking-[0.2em] border border-white/40 px-8 py-3 mt-4 hover:bg-white hover:text-[#1a1a1a] transition-all"
              >
                Presupuesto
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
