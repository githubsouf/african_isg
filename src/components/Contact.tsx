import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';
import LogoBall from './LogoBall copy';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setErrorMessage('');
    setIsSent(false);

    try {
      const response = await emailjs.send(
        'service_r79xpxm', // Ton service ID
        'template_42zkzzi', // Ton template ID
        {
          from_name: formData.name,         // Nom de l'expéditeur
          from_email: formData.email,       // Email de l'expéditeur
          message: formData.message,        // Message
        },
        'UIeefX0jaDtijciZ0' // Ton User ID
      );

      setIsSending(false);
      setIsSent(true);
      console.log('Email envoyé avec succès:', response);
    } catch (error) {
      setIsSending(false);
      setErrorMessage('Une erreur est survenue lors de l\'envoi de votre message.');
      console.error('Erreur lors de l\'envoi de l\'email:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600">Connectez-vous avec nous pour transformer le monde, en commençant par l'Afrique</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-[400px] lg:h-[1000px] flex justify-center items-center">
              <LogoBall />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Info de contact */}
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                <p className="text-gray-600">contact@african-isg.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                <p className="text-gray-600">+212 661 19 00 84</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                <p className="text-gray-600">123 Innovation Hub, Tech District<br />Nairobi, Kenya</p>
              </div>
            </div>

            {/* Formulaire de contact */}
            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-primary text-black font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                {isSending ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </form>

            {isSent && <p className="text-green-600">Message envoyé avec succès !</p>}
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
