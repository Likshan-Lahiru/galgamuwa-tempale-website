import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import EventModal from './EventModal';
import { useNavigate } from 'react-router-dom';
const slides = [{
  image: 'https://i.ibb.co/5WtCc1PZ/1692593809-Kandy-Esala-Perahera-6.jpg',
  title: ''
}, {
  image: 'https://i.ibb.co/fVfXvHSs/10.jpg',
  title: 'ශ්‍රී උපතිස්සාරාමය ස්තූපය'
}, {
  image: 'https://i.ibb.co/RT9fvkqZ/3.jpg',
  title: ''
}, {
  image: 'https://i.ibb.co/Z0HnrwC/6.jpg',
  title: 'ටැම්පිට සම්බුද්ධ මන්දිරය'
}];
const upcomingEvent = {
  title: 'ටැම්පිට සම්බුද්ධ මන්දිරය විවෘත කීරීම',
  description: 'Join us for the grand opening ceremony of the newly renovated temple premises. Experience the traditional Buddhist rituals, blessings, and cultural performances.',
  history: "This ceremony marks a significant milestone in our temple's history, following extensive renovations that have restored and enhanced our sacred spaces while preserving their historical significance.",
  date: '',
  time: '2025 ක් මාර්තු මස 22',
  location: 'ශ්‍රී උපතිස්සාරාමය Main Hall',
  images: ['https://i.ibb.co/r2XLwjcz/bodiya.jpg', 'https://i.ibb.co/fVfXvHSs/10.jpg', 'https://i.ibb.co/RT9fvkqZ/3.jpg']
};
const Hero = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
  }, []);
  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  const handleLearnMore = () => {
    navigate('/upcoming-events');
  };
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextSlide]);
  return <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-black" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
      <AnimatePresence mode="wait">
        <motion.div key={currentIndex} className="absolute inset-0 w-full h-full" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.5
      }}>
          <img src={slides[currentIndex].image} alt={slides[currentIndex].title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.h1 key={slides[currentIndex].title} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-md">
          {slides[currentIndex].title}
        </motion.h1>
      </div>
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-20" aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-20" aria-label="Next slide">
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
        <div className="container mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="bg-white/10 backdrop-blur-md rounded-lg p-4 max-w-lg">
            <div className="flex items-center text-amber-400 mb-2">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">UPCOMING EVENT</span>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">
              {upcomingEvent.title}
            </h3>
            <p className="text-white/80 text-sm mb-4">
              {upcomingEvent.date} | {upcomingEvent.time}
            </p>
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-600 transition-colors" onClick={handleLearnMore}>
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
      <EventModal isOpen={isEventModalOpen} onClose={() => setIsEventModalOpen(false)} event={upcomingEvent} />
    </div>;
};
export default Hero;