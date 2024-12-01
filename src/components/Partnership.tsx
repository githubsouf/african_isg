import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partners = [
  {
    name: 'Geria',
    logo: '/geria.png',
  },
  {
    name: 'CG',
    logo: '/cg.jpg',
  },{
    name: 'IFGIST',
    logo: '/IFGIST.png',
  },
  {
    name: 'Club Des Dirigeants',
    logo: '/club des dirigeants.png',
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 w-auto mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partnership;
