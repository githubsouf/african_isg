import React from 'react';
import { motion } from 'framer-motion';

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <p className="text-gray-600">
        AISG est une structure de réflexion et d'action interdisciplinaire et transdisciplinaire en Afrique spécialisée dans la création de la marque territoriale à travers la modélisation des projets, pour les territoires à dimension urbaine et rurale, et des référentiels de bonnes pratiques en matière de la gouvernance intelligente.
      </p>
      <p className="text-gray-600">
        AISG offre à ses partenaires des solutions intelligentes, intégrées et inclusives permettant un développement territorial intégré basé sur la transformation sociale, la transformation digitale et la transformation énergétique.
      </p>
    </motion.div>
  );
};

export default AboutContent;