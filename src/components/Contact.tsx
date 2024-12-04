import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';
import LogoBall from './LogoBall copy';
import { Field, Label, Textarea } from '@headlessui/react';
import clsx from 'clsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Efface l'erreur correspondante
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation des champs
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Le champ "Nom" est requis.';
    if (!formData.email) newErrors.email = 'Le champ "Email" est requis.';
    if (!formData.message) newErrors.message = 'Le champ "Description" est requis.';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSending(true);
    setErrorMessage('');
    setIsSent(false);

    try {
      const response = await emailjs.send(
        'service_r79xpxm', // Ton service ID
        'template_42zkzzi', // Ton template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
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
            
            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              {/* Nom */}
              <div className="w-full max-w-md px-4">
                <Field>
                  <Label className="text-sm/6 font-medium text-black">Nom</Label>
                  <Textarea
                    className={clsx(
                      'mt-3 block w-full resize-none rounded-lg border border-gray-300 bg-white py-1.5 px-3 text-sm/6 text-black',
                      'focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200'
                    )}
                    rows={1}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </Field>
              </div>

              {/* Email */}
              <div className="w-full max-w-md px-4">
                <Field>
                  <Label className="text-sm/6 font-medium text-black">Email</Label>
                  <Textarea
                    className={clsx(
                      'mt-3 block w-full resize-none rounded-lg border border-gray-300 bg-white py-1.5 px-3 text-sm/6 text-black',
                      'focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200'
                    )}
                    rows={1}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </Field>
              </div>

              {/* Description */}
              <div className="w-full max-w-md px-4">
                <Field>
                  <Label className="text-sm/6 font-medium text-black">Description</Label>
                  <Textarea
                    className={clsx(
                      'mt-3 block w-full resize-none rounded-lg border border-gray-300 bg-white py-1.5 px-3 text-sm/6 text-black',
                      'focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200'
                    )}
                    rows={5} // Agrandissement du champ
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                </Field>
              </div>

              {/* Bouton d'envoi */}
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-auto bg-primary text-black font-semibold py-2 px-4 rounded-full border border-gray-300 hover:shadow-md transition-shadow duration-300"
                >
                  {isSending ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </div>
            </form>

            {/* Message de succès ou erreur générale */}
            {isSent && <p className="text-green-600 text-center mt-4">Message envoyé avec succès !</p>}
            {errorMessage && <p className="text-red-600 text-center mt-4">{errorMessage}</p>}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
