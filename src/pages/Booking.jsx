import { useState } from 'react';
import { motion } from 'framer-motion';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        event: '',
        date: '',
        message: '',
        facilities: {
            airConditioning: false,
            halfSystem: false,
            fullSystem: false,
            wifiAccess: false,
            digitalRecording: false,
            projector: false,
            lyricsDisplay: false,
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFacilityChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            facilities: { ...prev.facilities, [name]: checked },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Booking request submitted!');
        console.log(formData);
    };

    const facilitiesList = [
        { label: 'Air Conditioning', name: 'airConditioning', charge: '500₹/hr' },
        {
            label: 'Half System',
            name: 'halfSystem',
            charge: '4000₹ full program',
            note: 'Includes on-site sound engineer',
        },
        {
            label: 'Full System',
            name: 'fullSystem',
            charge: '6000₹ full program',
            note: 'Includes on-site sound engineer',
        },
        { label: 'Wifi Access', name: 'wifiAccess', charge: 'Free' },
        {
            label: 'Digital Audio/Video Recording',
            name: 'digitalRecording',
            charge: '500₹/hr',
        },
        { label: 'Projector', name: 'projector', charge: '500₹ full program' },
        { label: 'Lyrics Display', name: 'lyricsDisplay', charge: '500₹ full program' },
    ];

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
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-2 rounded bg-white text-black"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-2 rounded bg-white text-black"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="date"
                        className="w-full p-2 rounded bg-white text-black"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="event"
                        placeholder="Type of Event"
                        className="w-full p-2 rounded bg-white text-black"
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Additional Message"
                        className="w-full p-2 rounded bg-white text-black"
                        onChange={handleChange}
                        rows="4"
                    />

                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Facilities to be availed</h1>
                        {facilitiesList.map((facility) => (
                            <div
                                key={facility.name}
                                className="flex flex-col bg-white/10 p-3 rounded-lg space-y-1"
                            >
                                <div className="flex items-center justify-between">
                                    <label className="inline-flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            name={facility.name}
                                            checked={formData.facilities[facility.name]}
                                            onChange={handleFacilityChange}
                                            className="accent-yellow-400"
                                        />
                                        <span className="text-white">{facility.label}</span>
                                    </label>
                                    <span className="text-yellow-400 text-sm font-semibold whitespace-nowrap">
                                        {facility.charge}
                                    </span>
                                </div>
                                {facility.note && (
                                    <span className="text-sm text-gray-300 italic ml-7">{facility.note}</span>
                                )}
                            </div>
                        ))}
                    </div>


                    <button
                        type="submit"
                        className="mt-4 bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-300"
                    >
                        Submit Booking
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default Booking;
