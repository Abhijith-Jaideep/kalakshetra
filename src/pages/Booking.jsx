import { useState } from 'react';
import { motion } from 'framer-motion';

const Booking = () => {
    const [formData, setFormData] = useState({ name: '', email: '', event: '', date: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Booking request submitted!');
        console.log(formData);
    };

    return (
        <motion.div
            className="px-6 py-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
        >
            <div className="p-10 max-w-xl mx-auto text-white">
                <h1 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Book the Venue</h1>
                <form onSubmit={handleSubmit} className="space-y-4 bg-black/60 p-6 rounded-lg">
                    <input type="text" name="name" placeholder="Your Name" className="w-full p-2 rounded bg-white text-black" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" className="w-full p-2 rounded bg-white text-black" onChange={handleChange} required />
                    <input type="date" name="date" className="w-full p-2 rounded bg-white text-black" onChange={handleChange} required />
                    <input type="text" name="event" placeholder="Type of Event" className="w-full p-2 rounded bg-white text-black" onChange={handleChange} required />
                    <textarea name="message" placeholder="Additional Message" className="w-full p-2 rounded bg-white text-black" onChange={handleChange} rows="4" />
                    <button type="submit" className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-300">
                        Submit Booking
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default Booking;
