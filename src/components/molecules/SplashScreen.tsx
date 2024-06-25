import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '@/assets/DALL·E-2024-06-14-13.25.png';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.img
          src={logoImage}
          alt="Logo"
          className="w-32 h-32 mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, loop: Infinity, ease: "linear" }}
        />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-bold"
        >
          AKIRA MOROOKA
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
