import React from 'react';
import { Link } from 'react-router-dom';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
      <header className="p-4 bg-gray-800 text-white flex justify-between">
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/devices">Devices</Link>
          <Link to="/works">Works</Link>
        </nav>
      </header>
      <main className="p-4">
        {children}
      </main>
    </div>
  );
};

export default MainTemplate;
