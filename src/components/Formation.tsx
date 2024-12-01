import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Brain, Leaf, Heart } from 'lucide-react';

interface FormationProps {
  onContactClick: () => void;
}

const formations = [
  {
    type: 'Diplômante',
    programs: [
      { name: 'Métiers de la santé', icon: <Heart className="w-6 h-6" /> },
      { name: 'Licence et master', icon: <GraduationCap className="w-6 h-6" /> },
      { name: 'MBA et doctorat exécutif', icon: <GraduationCap className="w-6 h-6" /> },
    ]
  },
  {
    type: 'Certifiante',
    programs: [
      { name: 'Intelligence et innovation', icon: <Brain className="w-6 h-6" /> },
      { name: 'Agriculture durable et participative', icon: <Leaf className="w-6 h-6" /> },
      { name: 'Santé globale', icon: <Heart className="w-6 h-6" /> },
    ]
  }
];

const Formation = ({ onContactClick }: FormationProps) => {
  return (
    <section id="formation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Formation</h2>
          <p className="text-xl text-gray-600">Développez vos compétences avec nos programmes de formation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.type}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f9d322] to-[#e32b24] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-10 group-hover:duration-200 animate-gradient-xy"></div>
              <div className="relative bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">{formation.type}</h3>
                <div className="space-y-6">
                  {formation.programs.map((program) => (
                    <motion.div
                      key={program.name}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md"
                    >
                      <div className="text-primary">{program.icon}</div>
                      <span className="text-lg">{program.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <button
            onClick={onContactClick}
            className="btn btn-primary"
          >
            En savoir plus sur nos formations
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Formation;