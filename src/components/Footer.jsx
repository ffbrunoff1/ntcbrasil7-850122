import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753482363661_0.png';

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Soluções', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-brand-dark-blue text-brand-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="mb-4">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-12 w-auto bg-white p-2 rounded-md"
              />
            </a>
            <p className="text-brand-light-gray/80 max-w-xs">
              Liderança e expertise no setor de construção que fazem a
              diferença.
            </p>
          </div>

          <div className="md:mx-auto">
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-light-gray/80 hover:text-brand-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-brand-light-gray/80">
              <li>
                <a
                  href="tel:+5544991040774"
                  className="hover:text-brand-white transition-colors"
                >
                  +55 44 99104-0774
                </a>
              </li>
              <li>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="hover:text-brand-white transition-colors"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </li>
              <li>Padre Lebret 801, G05 Bloco 03</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-blue/30 text-center text-brand-light-gray/60">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
