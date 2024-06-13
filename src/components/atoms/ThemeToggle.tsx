import React from 'react';

const ThemeToggle: React.FC = () => {
  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('light')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-800 text-white rounded">
      テーマを変更
    </button>
  );
};

export default ThemeToggle;
