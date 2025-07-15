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
        <p className="text-lg mb-4">📞 +91 81389 69095</p>
        <p className="text-lg mb-4">✉️ bookings@kalakshetra.com</p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31599.216915372553!2d80.21746599999999!3d13.0115561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266712fd97d13%3A0x30f7e4e649a7cf57!2sKalakshetra%20Foundation!5e0!3m2!1sen!2sin!4v1721021653260!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
    </motion.div>
  );
};

export default Contact;
