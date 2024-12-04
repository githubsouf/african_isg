import { motion } from 'framer-motion';

export const HeroText = () => {
  return (
    <div className="text-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white mb-8"
      >
        <span className="block">Empowering Africa's</span>
        <span className="block bg-gradient-to-r from-[#f9d322] to-[#e32b24] bg-clip-text text-transparent">
          Digital Transformation
        </span>
      </motion.h1>
    </div>
  );
};
