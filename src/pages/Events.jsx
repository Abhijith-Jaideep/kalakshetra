// src/pages/Events.jsx

import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: 'Open Mic Night',
    date: 'Aug 10, 2025',
    time: '7:00 PM',
    description: 'An open stage for singers, poets, and storytellers.',
  },
  {
    id: 2,
    title: 'Classical Dance Showcase',
    date: 'Aug 14, 2025',
    time: '6:00 PM',
    description: 'Experience traditional Indian dance performances by talented artists.',
  },
  {
    id: 3,
    title: 'Karaoke Night',
    date: 'Aug 17, 2025',
    time: '8:00 PM',
    description: 'Sing your heart out under the spotlight. Open for all ages!',
  },
];

const Events = () => {
  return (
    <motion.div
      className="bg-black text-white min-h-screen px-6 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 text-center mb-12 font-playfair">
        Upcoming Events
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-gray-900 rounded-xl shadow-lg p-6 border border-yellow-400 hover:scale-105 transform transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 font-playfair">
              {event.title}
            </h2>
            <p className="text-sm text-gray-400 mb-2">
              📅 {event.date} &nbsp; 🕒 {event.time}
            </p>
            <p className="text-base text-gray-200 leading-relaxed">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Events;
