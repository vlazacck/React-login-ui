import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className= {darkMode ? 'dark-mode' : 'light-mode'}>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? <FontAwesomeIcon icon={faSun}  size="1.5x"/> : <FontAwesomeIcon icon={faMoon} size="1.5x"/>}
        </button>
        <Routes>
          <Route path="/" element={<Login darkMode={darkMode} />} />
          <Route path="/signup" element={<SignUp darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;