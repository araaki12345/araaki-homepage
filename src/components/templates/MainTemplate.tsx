import React from 'react';
import { Link } from 'react-router-dom';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
      <header className="p-4 bg-gray-800 text-white fixed w-full top-0 flex justify-between items-center shadow-md z-10">
        <div className="text-3xl font-bold">
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
  );
};

export default MainTemplate;

