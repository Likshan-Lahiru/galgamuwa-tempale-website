import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EventModal from '../EventModal';
const upcomingEvents = [{
  title: 'Temple Opening Ceremony',
  description: 'Join us for the grand opening ceremony of the newly renovated temple premises. Experience the traditional Buddhist rituals, blessings, and cultural performances.',
  history: "This ceremony marks a significant milestone in our temple's history, following extensive renovations that have restored and enhanced our sacred spaces while preserving their historical significance.",
  date: '2025 ක් මාර්තු මස 22',
  time: '6:00 AM - 12:00 PM',
  location: 'ශ්‍රී උපතිස්සාරාමය Main Hall',
  images: ['https://i.ibb.co/r2XLwjcz/bodiya.jpg', 'https://i.ibb.co/fVfXvHSs/10.jpg', 'https://i.ibb.co/RT9fvkqZ/3.jpg']
}
// Add more upcoming events here
];
const UpcomingEvents = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState<(typeof upcomingEvents)[0] | null>(null);
  return <div className="min-h-screen bg-gray-50">
      <div className="bg-amber-700">
        <div className="container mx-auto px-4 py-6">
          <button onClick={() => navigate('/')} className="flex items-center text-white hover:text-amber-200 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us in these upcoming special events and ceremonies at ශ්‍රී
            උපතිස්සාරාමය
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={event.images[0]} alt={event.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>
                <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} onClick={() => setSelectedEvent(event)} className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition-colors">
                  View Details
                </motion.button>
              </div>
            </motion.div>)}
        </div>
      </div>
      {selectedEvent && <EventModal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)} event={selectedEvent} />}
    </div>;
};
export default UpcomingEvents;