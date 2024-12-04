import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partners = [
  {
    name: 'GERIA',
    logo: '/geria.png',
  },
  {
    name: (
      <>
        Centre International <br /> d'Opportunités <br /> Commerciales
      </>
    ),
    logo: '/cg.jpg',
  },
  {
    name: 'IFGIST',
    logo: '/IFGIST.png',
  },
  {
    name: 'Club Des Dirigeants',
    logo: '/club des dirigeants.png',
  },
  {
    name: 'International Federation Mediators',
    logo: './image.png',
  },
  {
    name: 'CONFIMPRESA',
    logo: './confimpresa.jpg',
  },
  {
    name: 'B-CRYOJET',
    logo: '/B-CRYOJET.png', // Relative path to the 'public' folder
  },
];


const PartnerCard = ({ partner }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-center">
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-20 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center overflow-hidden ml-4"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
                className="w-8 h-[2px] bg-gradient-to-r from-[#f9d322] to-[#e32b24] mx-3"
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-gray-800 font-medium whitespace-nowrap"
              >
                {partner.name}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Partnership = () => {
  return (
    <section id="partnership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600">
            Collaborating with global leaders to drive innovation in Africa
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="partner-swiper"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.name}>
              <PartnerCard partner={partner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partnership;