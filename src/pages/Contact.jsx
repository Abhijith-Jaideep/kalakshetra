import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      className="bg-black text-white min-h-screen px-6 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 sm:p-10 max-w-3xl mx-auto text-center font-playfair">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-8">
          Contact Us
        </h1>

        <p className="text-lg mb-4">📍 MC Road, Kalady, Kerala</p>
        <p className="text-lg mb-4">📞 +91 85901 09095</p>
        <p className="text-lg mb-4">✉️ bookings@kalakshetra.com</p>

        <iframe
          title="Kalakshetra Map"
          className="w-full h-64 sm:h-80 mt-8 rounded-lg border-4 border-yellow-400 shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.009097665261!2d76.3469!3d10.1969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b240b71a3c1%3A0x4f37b33aee79fe4d!2sKalady%2C%20Kerala!5e0!3m2!1sen!2sin!4v1629476974871!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Contact;
