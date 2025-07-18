import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Accessible marquee alternative */}
      <div className="bg-yellow-400 overflow-hidden whitespace-nowrap text-black font-bold text-sm py-2 shadow-md">
        <div className="inline-block animate-marquee px-4">
          🚧 This website is under construction. Some features may not work as expected. Any inconvenience is regretted, Thank you 🚧
        </div>
      </div>

      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
