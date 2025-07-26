import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, HardHat, Lightbulb } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ClipboardCheck className="w-12 h-12 text-brand-white" />,
      title: 'Planejamento e Gestão',
      description:
        'Oferecemos um planejamento detalhado e uma gestão de projetos eficiente, garantindo o cumprimento de prazos e orçamentos com total transparência.',
    },
    {
      icon: <HardHat className="w-12 h-12 text-brand-white" />,
      title: 'Execução de Obras',
      description:
        'Executamos obras residenciais, comerciais e industriais com mão de obra qualificada e materiais de primeira linha, focando na segurança e qualidade.',
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-brand-white" />,
      title: 'Consultoria Especializada',
      description:
        'Nossa equipe de especialistas oferece consultoria para otimizar seu projeto, desde a viabilidade técnica até as soluções de engenharia mais inovadoras.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-gray">
            Nossas <span className="gradient-text">Soluções Completas</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Da concepção à entrega, a NTC Brasil oferece um portfólio de
            serviços integrados para atender todas as necessidades do seu
            projeto de construção.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-gradient-to-br from-brand-blue to-brand-dark-blue p-8 rounded-xl shadow-strong text-brand-white transform hover:-translate-y-2 transition-transform duration-300"
              variants={cardVariants}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-brand-light-gray/90 flex-grow">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-8 text-brand-white font-semibold inline-block self-start hover:underline"
              >
                Saiba Mais &rarr;
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
