import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X as XIcon } from 'lucide-react';
interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}
const ImageModal = ({
  isOpen,
  onClose,
  imageUrl
}: ImageModalProps) => {
  if (!isOpen) return null;
  return <AnimatePresence>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
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
      }} className="relative max-w-4xl w-full mx-4" onClick={e => e.stopPropagation()}>
          <button onClick={onClose} className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors">
            <XIcon size={24} />
          </button>
          <img src={imageUrl} alt="Gallery Image" className="w-full h-auto rounded-lg" />
        </motion.div>
      </motion.div>
    </AnimatePresence>;
};
export default ImageModal;