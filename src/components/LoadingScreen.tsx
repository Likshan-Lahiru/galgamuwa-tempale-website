import React from 'react';
import { motion } from 'framer-motion';
const LoadingScreen = () => {
  return <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <motion.div animate={{
      rotate: 360
    }} transition={{
      duration: 2,
      repeat: Infinity,
      ease: 'linear'
    }} className="relative w-32 h-32">
        <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-xl animate-pulse"></div>
        <img src="/pngegg.png" alt="Temple Logo" className="w-full h-full object-contain relative z-10" />
      </motion.div>
    </div>;
};
export default LoadingScreen;