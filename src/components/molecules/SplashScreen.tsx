import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white z-50">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center"
      >
        <motion.h1 
          className="text-5xl font-bold mb-4"
          variants={item}
        >
          AKIRA MOROOKA
        </motion.h1>
        <motion.p 
          className="text-xl mb-8"
          variants={item}
        >
          Portfolio
        </motion.p>
        <motion.div
          className="flex justify-center space-x-2"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {['Designer', 'Developer', 'Creator'].map((text, index) => (
            <motion.span
              key={index}
              variants={item}
              className="inline-block px-3 py-1 bg-white bg-opacity-10 rounded-full text-sm"
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="mt-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="w-24 h-1 bg-purple-500 mx-auto" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
