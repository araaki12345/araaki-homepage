import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './components/pages/HomePage';
import DevicesPage from './components/pages/DevicesPage';
import WorksPage from './components/pages/WorkPage';

const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  document.documentElement.classList.add(storedTheme);
} else {
  document.documentElement.classList.add('dark');
}

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="devices" element={<DevicesPage />} />
          <Route path="works" element={<WorksPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

