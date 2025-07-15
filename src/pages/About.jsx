import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="bg-black text-white min-h-screen px-6 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto text-center font-playfair">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-8">
          About Kalakshetra
        </h1>
        <p className="text-lg leading-relaxed text-gray-200">
          The Kalakshetra Events Hub is a vibrant cultural venue nestled in the heart of Kalady, Kochi.  
          Whether you're a performer, organizer, or enthusiast – Kalakshetra is your new home for expression.
        </p>
        <p className="text-lg leading-relaxed mt-6 text-gray-200">
          We are equipped with Professional-grade audio setup and lighting infrastructure, climate control, and a 45-seat mini theatre setting 
          to deliver an unforgettable experience for both artists and audiences.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
