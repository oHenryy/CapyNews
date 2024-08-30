import React, { useState, useEffect } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <h1>Capy News</h1>
      <nav>
        <a href="/">Home</a>
      </nav>
      <div className="theme-toggle">
        <label htmlFor="theme-switch">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </label>
        <label className="switch">
          <input 
            id="theme-switch"
            type="checkbox" 
            checked={darkMode} 
            onChange={toggleDarkMode} 
          />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
