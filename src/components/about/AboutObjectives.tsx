import React from 'react';
import { motion } from 'framer-motion';

const AboutObjectives = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Nos Objectifs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold flex items-center gap-3">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            Objectifs lié au territoire urbain
          </h3>
          <ul className="space-y-4 text-gray-600">
            <li>Le développement et la valorisation du patrimoine matériel et immatériel local à travers le mangement des services publics locaux</li>
            <li>Création d'une synergie collaborative entre les acteurs locaux et la société civile</li>
            <li>Accompagner les acteurs locaux afin de créer un écosystème de coopératives professionnelles</li>
            <li>Animation et développement du territoire par les activités sportives (économie du sport) et culturelles (l'industrie de la culture)</li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold flex items-center gap-3">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.055 13H1v-2h2.055A9.004 9.004 0 0 1 13 1.055V3h-2v-.945a7.004 7.004 0 0 0-7.945 7.945H4v2h-.945A7.004 7.004 0 0 0 11 19.945V19h2v.945a7.004 7.004 0 0 0 7.945-7.945H20v-2h.945A7.004 7.004 0 0 0 13 2.055V3h-2v-.945A9.004 9.004 0 0 1 1.055 13zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            Objectifs lié au territoire rural
          </h3>
          <ul className="space-y-4 text-gray-600">
            <li>Accompagner les acteurs locaux afin de créer un écosystème de coopératives agricoles et de services</li>
            <li>Développer les chaînes de valeur agricole locales (production, transformation, commercialisation et industrialisation)</li>
            <li>Soutenir la capacité de production des petits et moyens producteurs</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutObjectives;