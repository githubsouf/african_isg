import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Building2, Trees, MapPin, Globe2, Users2, LandPlot } from 'lucide-react';

const services = [
  {
    title: 'Villes apprenantes',
    icon: <Building2 className="w-16 h-16" />,
    description: "Strengthening human capital for political, administrative, and associative actors through an innovative approach focused on achieving the SDGs, centered around territorial coaching aimed at ensuring societal transformation. Qualifying African municipalities to integrate into the global networks of learning and sustainable cities...",
  },
  {
    title: 'Villes intelligentes et durables',
    icon: <MapPin className="w-16 h-16" />,
    description: "Establishing a strategic and operational framework for urban-oriented territories, focused on the digital economy, green economy, and social and solidarity economy, enabling the planning, enhancement, and development of the territories.",
  },
  {
    title: 'Villages intelligents et durables',
    icon: <Trees className="w-16 h-16" />,
    description: "Preparing a strategic and operational framework for rural municipalities focused on sustainable agricultural projects and the valorization of local products that comply with health standards and the agricultural value chain.",
  },
  {
    title: 'Marque de territoire',
    icon: <Globe2 className="w-16 h-16" />,
    description: "Establishing an integrated and inclusive sustainable development model that promotes the brand image of territories, based on the cultural identity and natural vocation of each area, through the modernization of local public action, territorial animation, and the enhancement of tangible and intangible heritage.",
  },
  {
    title: 'Entreprenariat social, coopérative agricole et startups',
    icon: <Users2 className="w-16 h-16" />,
    description: "The transversal focus is to establish an incubator for young professionals within a technology transfer center called 'City of Trades, Skills, and Innovation.'",
  },
  {
    title: 'La gouvernance politique et institutionnelle',
    icon: <LandPlot className="w-16 h-16" />,
    description: "Strengthening and modernizing the institutional and political framework to promote advanced decentralization and deep deconcentration. This approach aims to ensure a major strategic transformation with the transfer of decision-making centers closer to the citizens.",
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
            Strategic areas of activity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Development strategies in Africa often face major governance
            challenges preventing an evolution towards a smart society. This
            calls on us to react with appropriate and adapted mechanisms to
            strengthen "smart governance in Africa."
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