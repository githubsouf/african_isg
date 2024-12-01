import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Globe from './Globe';

const Contact = () => {
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
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Connect with us to transform the world, starting with Africa</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
          <div className="w-full h-[400px] lg:h-[500px] flex justify-center items-center">
  <Globe />
</div>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
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

            <form className="space-y-6 mt-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-black font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;