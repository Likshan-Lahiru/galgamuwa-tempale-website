import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X as XIcon, Calendar, Clock, MapPin } from 'lucide-react';
interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    description: string;
    history: string;
    date: string;
    time: string;
    location: string;
    images: string[];
  };
}
const EventModal = ({
  isOpen,
  onClose,
  event
}: EventModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    if (isOpen && event.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % event.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isOpen, event.images.length]);
  if (!isOpen) return null;
  return <AnimatePresence>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 overflow-y-auto py-10" onClick={onClose}>
        <motion.div initial={{
        scale: 0.5,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.5,
        opacity: 0
      }} transition={{
        type: 'spring',
        duration: 0.5
      }} className="relative bg-white rounded-xl max-w-4xl w-full mx-4 overflow-hidden" onClick={e => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full">
            <XIcon size={24} />
          </button>
          <div className="relative h-72 bg-gray-900">
            <AnimatePresence mode="wait">
              <motion.img key={currentImageIndex} src={event.images[currentImageIndex]} alt={`${event.title} - Image ${currentImageIndex + 1}`} className="w-full h-full object-cover" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} transition={{
              duration: 0.5
            }} />
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h2 className="text-white text-3xl font-bold">{event.title}</h2>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{event.location}</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">History</h3>
              <p className="text-gray-600">{event.history}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>;
};
export default EventModal;