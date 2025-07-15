import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-6 font-playfair">
      <p>&copy; {new Date().getFullYear()} Kalakshetra Events Hub. All rights reserved.</p>
      <p className="text-sm mt-2">
        📍 MC Road, Kalady | 📞 +91 81389 69095 | ✉️ bookings@kalakshetra.com
      </p>
    </footer>
  );
};

export default Footer;
