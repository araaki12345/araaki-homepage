import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '@/assets/bg.jpg';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className="relative z-10">
        <header className="p-4 bg-gray-800 text-white fixed w-full top-0 shadow-md z-10">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <div className='text-2xl sm:text-3xl font-bold mb-2 sm:mb-0'>
              <Link to="/">AKIRA MOROOKA</Link>
            </div>
            <nav className="space-x-2 sm:space-x-4">
              <Link to="/" className="text-sm sm:text-base">HOME</Link>
              <Link to="/devices" className="text-sm sm:text-base">DEVICES</Link>
              <Link to="/works" className="text-sm sm:text-base">WORKS</Link>
            </nav>
          </div>
        </header>
        <main className="pt-24 sm:pt-16 p-4 container mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainTemplate;
