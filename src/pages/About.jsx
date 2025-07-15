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
          Kalakshetra Events Hub is a vibrant cultural venue nestled in the heart of Kalady, Kochi.  
          We provide a platform for artists, performers, and creatives to showcase their talent through a wide range of events.
        </p>
        <p className="text-lg leading-relaxed mt-6 text-gray-200">
          Whether it's a classical music performance, a modern play, a lecture, or a celebration — 
          Kalakshetra is equipped with sound and lighting infrastructure, climate control, and a 75-seat theatre setting 
          to deliver an unforgettable experience for both artists and audiences.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
