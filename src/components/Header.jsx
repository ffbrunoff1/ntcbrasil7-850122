import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753482363661_0.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Soluções', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src={logoUrl} alt="NTC Brasil Logo" className="h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-dark-gray hover:text-brand-blue transition-colors duration-300 font-semibold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+5544991040774"
            className="flex items-center text-brand-dark-gray hover:text-brand-blue transition-colors duration-300"
          >
            <Phone size={18} className="mr-2" />
            <span>+55 44 99104-0774</span>
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-brand-dark-gray focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-brand-white shadow-lg absolute top-full left-0 w-full"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <nav className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-xl text-brand-dark-gray hover:text-brand-blue transition-colors duration-300"
                  variants={menuItemVariants}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="tel:+5544991040774"
                className="flex items-center text-brand-dark-gray hover:text-brand-blue transition-colors duration-300 mt-4"
                variants={menuItemVariants}
              >
                <Phone size={18} className="mr-2" />
                <span>+55 44 99104-0774</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
