import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import DevicesPage from './components/pages/DevicesPage';
import WorksPage from './components/pages/WorkPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen dark:bg-gray-900 dark:text-white">
        <header className="p-4 bg-gray-800 text-white flex justify-between">
          <nav className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/devices">Devices</Link>
            <Link to="/works">Works</Link>
          </nav>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/devices" element={<DevicesPage />} />
            <Route path="/works" element={<WorksPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
