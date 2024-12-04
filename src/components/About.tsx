import React from 'react';
import { motion } from 'framer-motion';
import AboutContent from './about/AboutContent';
import AboutStats from './about/AboutStats';
import AboutObjectives from './about/AboutObjectives';
import AboutScene from './about/AboutScene';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Qui sommes-nous ?</h2>
          <p className="text-xl text-gray-600">The African Institute for Smart Governance</p>
          <p className="text-xl text-gray-600">l'Institut Africain en Gouvernance Intelligente</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-8">
            <AboutContent />
            <AboutScene />
          </div>
          <AboutStats />
        </div>

        <AboutObjectives />
      </div>
    </section>
  );
};

export default About;