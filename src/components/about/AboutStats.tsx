import React from 'react';
import { motion } from 'framer-motion';
import { Users, Brain, HandHeart } from 'lucide-react';

const stats = [
  { 
    label: 'Réflexion', 
    description: 'Offrir une formation co-certifiante et des attestations d\'expertise (capital humain)', 
    icon: <Brain className="w-8 h-8" /> 
  },
  { 
    label: 'Action', 
    description: 'Accompagner ses partenaires (lauréats) dans la réalisation (startup...), suivi et évaluation des projets (capital immatériel)', 
    icon: <HandHeart className="w-8 h-8" /> 
  },
  { 
    label: 'Réaction', 
    description: 'Accompagner ses partenaires dans les choix des produits intelligents (capital matériel)', 
    icon: <Users className="w-8 h-8" /> 
  }
];

const AboutStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className="text-primary">{stat.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutStats;