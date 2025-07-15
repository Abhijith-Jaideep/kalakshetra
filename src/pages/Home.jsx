import React from 'react';
import heroImage from '../hero-bg.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="px-6 py-12 text-white bg-black"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
        {/* Background Image with blur */}
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover filter blur-md scale-105 animate-fade-in-up"
        />

        {/* Overlay Content */}
        <div className="relative z-10 text-white text-center px-4 animate-fade-in-up font-playfair">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Where dreams take CENTRE STAGE
          </h2>
          <p className="text-lg mb-6">
            📍 Kalady, Kochi | 🎧 Sound-ready | ❄️ Air Conditioned
          </p>
          <div className="space-x-4">
            <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300">
              Book the Venue
            </button>
            <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200">
              View Upcoming Events
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
