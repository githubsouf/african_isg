import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Array of images
  const images = [
    "aisg-logo.svg", // First image to show as poster
    "bgproject.jpg",
    "carousel-1.jpg",
    "carousel-2.jpg",
  ];

  // Scroll through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // GSAP animation for the overlay
  useEffect(() => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0.6,
        duration: 2,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster={`/public/${images[currentImage]}`} // Dynamic poster
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-city-12320-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Image Fade Transition */}
      <div className="absolute inset-0 z-5">
        <AnimatePresence>
          {images.map((image, index) => (
            index === currentImage && (
              <motion.img
                key={image}
                src={`/public/${image}`}
                alt={`Background ${index}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-black opacity-40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white mb-8"
        >
          <span className="block">African Institute of Smart Governance</span>
          <span className="block bg-gradient-to-r from-[#f9d322] to-[#e32b24] bg-clip-text text-transparent">
          Développement Territorial Integré et Inclusif
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
             <button
            onClick={onContactClick}
            className="px-8 py-3 bg-[#f9d322] text-black rounded-full font-semibold 
              transform hover:scale-105 transition-all duration-300 
              hover:shadow-[0_0_15px_rgba(249,211,34,0.5)] relative overflow-hidden group"
          >
            <span className="relative z-10">En savoir plus</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>

          <button
            onClick={onContactClick}
            className="px-8 py-3 bg-transparent border-2 border-[#f9d322] text-[#f9d322] 
              rounded-full font-semibold transform hover:scale-105 transition-all duration-300 
              hover:shadow-[0_0_15px_rgba(249,211,34,0.3)] relative overflow-hidden group"
          >
            <span className="relative z-10">Contactez-nous</span>
            <div className="absolute inset-0 bg-[#f9d322] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Button */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#f9d322] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#f9d322] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
