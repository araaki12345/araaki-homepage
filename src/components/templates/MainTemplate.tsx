import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MainTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <header className="fixed w-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-2 sm:mb-0"
          >
            <Link to="/" className="text-xl sm:text-2xl font-bold tracking-wider whitespace-nowrap">
              AKIRA MOROOKA
            </Link>
          </motion.div>
          <nav>
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-4 sm:space-x-6"
            >
              {['HOME', 'DEVICES', 'WORKS'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm uppercase tracking-widest hover:text-purple-400 transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </header>
      <main className="pt-24 sm:pt-20 px-4">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainTemplate;
