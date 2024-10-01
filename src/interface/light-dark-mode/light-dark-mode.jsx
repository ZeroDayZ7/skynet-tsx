import React, { useState, useEffect } from 'react';
import './light-dark-mode.css';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : true; // Domyślnie ustaw na true
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const root = document.querySelector(':root');
    root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      <span className="dark-mode-toggle__text hidden--visually">
        {isDarkMode ? 'deactivate' : 'activate'} dark mode
      </span>
      <span className="dark-mode-toggle__icon"></span>
    </button>
  );
};

export default DarkModeToggle;
