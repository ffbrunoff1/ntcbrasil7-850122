import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-brand-blue" />,
      text: '+55 44 99104-0774',
      href: 'tel:+5544991040774',
    },
    {
      icon: <Mail className="w-6 h-6 text-brand-blue" />,
      text: 'ffbrunoff@yahoo.com.br',
      href: 'mailto:ffbrunoff@yahoo.com.br',
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-blue" />,
      text: 'Padre Lebret 801, G05 Bloco 03',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-gray">
            Vamos Construir Juntos
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco para discutir seu próximo projeto. Estamos
            prontos para transformar suas ideias em realidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-brand-dark-gray mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-brand-white p-3 rounded-lg shadow-subtle mr-4">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-lg text-gray-700 hover:text-brand-blue transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-lg text-gray-700">{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-brand-white p-8 rounded-xl shadow-strong"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-brand-blue text-brand-white font-bold rounded-lg shadow-lg hover:bg-brand-dark-blue transform hover:-translate-y-1 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin mr-2" />
                  ) : (
                    <Send className="mr-2" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
              {submitSuccess && (
                <div className="flex items-center text-green-600 bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="mr-2" /> Mensagem enviada com sucesso!
                </div>
              )}
              {submitError && (
                <div className="flex items-center text-red-600 bg-red-100 p-3 rounded-lg">
                  <AlertTriangle className="mr-2" /> Erro: {submitError}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
