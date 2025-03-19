import React, { useEffect, useState } from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageModal from './ImageModal';
const galleryImages = ['https://i.ibb.co/N27KCPLb/1.jpg', 'https://i.ibb.co/QFzdH7yq/2.jpg', 'https://i.ibb.co/RT9fvkqZ/3.jpg', 'https://i.ibb.co/dwBzZPv7/4.jpg', 'https://i.ibb.co/SD8fFNtb/5.jpg', 'https://i.ibb.co/Z0HnrwC/6.jpg', 'https://i.ibb.co/JFWHRv0M/7.jpg', 'https://i.ibb.co/k6hYwsgB/8.jpg', 'https://i.ibb.co/r2XLwjcz/bodiya.jpg', 'https://i.ibb.co/fVfXvHSs/10.jpg'];
const SocialMedia = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % galleryImages.length);
    }, 60000); // Rotate every minute
    return () => clearInterval(interval);
  }, []);
  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };
  return <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-amber-700 text-4xl font-bold mb-2">Gallery</h2>
            <p className="text-gray-600">
              Explore the beauty and serenity of our temple through these images
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="flex items-center justify-center w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-full transition-colors">
              <Instagram className="mr-2" size={20} />
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center justify-center w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-full transition-colors">
              <Facebook className="mr-2" size={20} />
              <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center justify-center w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-full transition-colors">
              <Youtube className="mr-2" size={20} />
              <span>YouTube</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => <motion.div key={image} className="aspect-square overflow-hidden rounded-lg cursor-pointer" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} layoutId={`gallery-image-${index}`}>
              <motion.img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" initial={false} animate={{
            scale: currentImageIndex === index ? 1.1 : 1
          }} transition={{
            duration: 0.5
          }} onClick={() => handleImageClick(image)} />
            </motion.div>)}
        </div>
        <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} imageUrl={selectedImage} />
      </div>
    </div>;
};
export default SocialMedia;