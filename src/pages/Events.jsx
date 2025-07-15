// src/pages/Events.jsx

import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: 'Inaugration',
    date: 'Aug 3rd, 2025',
    time: '2:00 PM',
    description: 'Inaugration by renowned playback singer Shri R Ravishankar Followed by Music Performances by songs by Santa Babu[Playback Singer], Kalabhavan Dhanya Prasanth, Indu Ratheesh',
  },
  {
    id: 2,
    title: 'Free Open Mic',
    date: 'Aug 3rd, 2025',
    time: '5:00 PM',
    description: 'Doors open to the public at 5 PM. The first 25 registered guests will receive a chance to perform for free.',
  },
  {
    id: 3,
    title: 'Daily Karaoke Singing Batch A (Mon/Thu)',
    date: 'Aug 3rd, 2025',
    time: '5:00 PM - 8:00 PM',
    description: '',
  },
  {
    id: 4,
    title: 'Daily Karaoke Singing Batch B (Tue/Fri)',
    date: 'Aug 3rd, 2025',
    time: '5:00 PM - 8:00 PM',
    description: '',
  },
  {
    id: 5,
    title: 'Daily Karaoke Singing Batch C (Wed/Sat)',
    date: 'Aug 3rd, 2025',
    time: '5:00 PM - 8:00 PM',
    description: '',
  }
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
