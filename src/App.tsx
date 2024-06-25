import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import DevicesPage from './components/pages/DevicesPage';
import WorksPage from './components/pages/WorkPage';
import SplashScreen from './components/molecules/SplashScreen';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minDisplayTime = 2000; // 最小表示時間（ミリ秒）
    const startTime = Date.now();

    const initializeApp = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
    };

    initializeApp().then(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

      setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    });
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
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
