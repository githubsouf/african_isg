import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Building2, Trees, MapPin, Globe2, Users2, LandPlot } from 'lucide-react';

const services = [
  {
    title: 'Villes apprenantes',
    icon: <Building2 className="w-16 h-16" />,
    description: "Le projet renforce les compétences des acteurs politiques et administratifs africains via une approche innovante, axée sur les ODD, le coaching territorial et l'intégration des communes africaines aux réseaux mondiaux des villes durables."
  },
  {
    title: 'Villes intelligentes et durables',
    icon: <MapPin className="w-16 h-16" />,
    description: "Mettre en place un cadre stratégique pour les territoires urbains axé sur l'économie digitale, verte et sociale, afin de favoriser leur planification, valorisation et développement.",
  },
  {
    title: 'Villages intelligents et durables',
    icon: <Trees className="w-16 h-16" />,
    description: "Préparer pour les communes rurales un cadre stratégique et opérationnel de projets agricoles durables et de valorisation des produits issus des terroirs qui respectent les normes sanitaires et la chaine de valeurs agricoles.",
  },
  {
    title: 'Marque de territoire',
    icon: <Globe2 className="w-16 h-16" />,
    description: "Mettre en place un modèle de développement durable inclusif pour promouvoir l'image des territoires, en valorisant leur identité culturelle et naturelle, à travers la modernisation de l’action publique, l’animation locale et la préservation du patrimoine.",
  },
  {
    title: 'Entreprenariat social, coopérative agricole et startups',
    icon: <Users2 className="w-16 h-16" />,
    description: "Axe transverse vise à mettre en place un incubateur pour les jeunes cadres dans un centre de transfert de technologie intitulé «Cité des Métiers, des Compétences et de l'Innovation».",
  },
  {
    title: 'La gouvernance politique et institutionnelle',
    icon: <LandPlot className="w-16 h-16" />,
    description: "Renforcer et moderniser le cadre institutionnel pour favoriser une décentralisation avancée et une déconcentration, afin de rapprocher les centres de décision des citoyens et assurer une mutation stratégique.",
  },
];

const ServiceCard = ({ index, title, icon, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Tilt
      className="w-full"
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.02}
      gyroscope={true}
    >
      <motion.div
        initial={{ opacity: 0, x: 20 * (index % 2 === 0 ? 1 : -1) }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: index * 0.1 }}
        className="relative group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Animated gradient border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f9d322] to-[#e32b24] rounded-[30px] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
        
        {/* Card content */}
        <div className="relative bg-white rounded-[20px] p-8 min-h-[280px] flex flex-col items-center justify-between">
          {/* Icon container with gradient border and animated icon */}
          <div className="w-20 h-20 relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f9d322] to-[#e32b24] rounded-full animate-spin-slow opacity-75"></div>
            <div className="absolute inset-0.5 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(to right, #f9d322, #e32b24)',
                    'linear-gradient(to left, #f9d322, #e32b24)',
                    'linear-gradient(to right, #f9d322, #e32b24)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div
                className="relative z-10"
                animate={{
                  color: hovered ? ['#f9d322', '#e32b24', '#f9d322'] : '#f9d322',
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {icon}
              </motion.div>
            </div>
          </div>

          {/* Title with gradient text */}
          <h3 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-[#f9d322] to-[#e32b24] bg-clip-text text-transparent">
            {title}
          </h3>

          {/* Animated description */}
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: hovered ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-600 text-sm text-center">
              {description}
            </p>
          </motion.div>

          {/* Floating particles effect */}
          {hovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/20 rounded-full"
                  initial={{ 
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    scale: 0
                  }}
                  animate={{ 
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    scale: 1
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative py-20 bg-white overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
         <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#f9d322] to-[#e32b24] bg-clip-text text-transparent">
            Domaines stratégiques d'activité
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Les stratégies de développement en Afrique rencontrent souvent des défis majeurs en matière de gouvernance, empêchant une évolution vers une société intelligente. Cela nous appelle à réagir avec des mécanismes appropriés et adaptés pour renforcer la "gouvernance intelligente en Afrique".
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;