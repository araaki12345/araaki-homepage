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
        <div className= "relative z-10">
          <header className="p-4 bg-gray-800 text-white fixed w-full top-0 flex justify-between items-center shadow-md z-10">
          <div className='text-3xl font-bold'>
          <Link to="/">AKIRA MOROOKA</Link>
        </div>
        <nav className="space-x-4">
          <Link to="/">HOME</Link>
          <Link to="/devices">DEVICES</Link>
          <Link to="/works">WORKS</Link>
        </nav>
      </header>
      <main className="pt-16 p-4">
        {children}
      </main>
    </div>
    </div>
  );
};

export default MainTemplate;

