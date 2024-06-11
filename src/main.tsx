import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@shadcn/ui/styles.css';
import App from './App.tsx'
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
