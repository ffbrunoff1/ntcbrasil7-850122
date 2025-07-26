import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative bg-brand-white pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-brand-dark-gray leading-tight mb-4"
              variants={itemVariants}
            >
              Construindo o Futuro com{' '}
              <span className="gradient-text">Qualidade e Inovação</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8"
              variants={itemVariants}
            >
              Na NTC Brasil, transformamos sua visão em realidade com soluções
              inteligentes e sustentáveis para a construção civil.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-brand-white font-bold rounded-lg shadow-strong hover:bg-brand-dark-blue transform hover:-translate-y-1 transition-all duration-300"
              >
                Inicie seu Projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:flex justify-center items-center"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-md h-96">
              <motion.div
                className="absolute top-10 left-10 w-64 h-64 bg-brand-blue/20 rounded-full filter blur-2xl"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              ></motion.div>
              <motion.div
                className="absolute bottom-10 right-10 w-72 h-72 bg-brand-dark-blue/10 rounded-full filter blur-2xl"
                animate={{ scale: [1, 1.05, 1], rotate: [0, -10, 0] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              ></motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
              >
                <Building2
                  className="w-64 h-64 text-brand-blue opacity-80"
                  strokeWidth={1}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
