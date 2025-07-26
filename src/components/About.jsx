import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Award className="w-10 h-10 text-brand-blue" />,
      title: 'Liderança e Expertise',
      description:
        'Com anos de experiência, a NTC Brasil é referência em projetos de construção, garantindo excelência e confiança em cada etapa.',
    },
    {
      icon: <Users className="w-10 h-10 text-brand-blue" />,
      title: 'Equipe Qualificada',
      description:
        'Nossos profissionais são altamente capacitados para entregar soluções inovadoras e eficientes, superando as expectativas dos clientes.',
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-brand-blue" />,
      title: 'Crescimento Sustentável',
      description:
        'Compromisso com práticas sustentáveis que respeitam o meio ambiente e promovem o desenvolvimento social e econômico.',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-brand-light-gray">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-gray">
            Transformando Visões em Realidade
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A NTC Brasil se destaca no setor de construção pela sua capacidade
            de executar projetos complexos com precisão e inovação. Nossa missão
            é construir o futuro, um projeto de cada vez, com a máxima qualidade
            e compromisso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-brand-white p-8 rounded-xl shadow-subtle text-center flex flex-col items-center"
              variants={itemVariants}
            >
              <div className="bg-brand-blue/10 p-4 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark-gray mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
