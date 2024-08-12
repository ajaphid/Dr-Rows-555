import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import BreatheScreen from './screens/BreatheScreen';
import LearnScreen from './screens/LearnScreen';

import './assets/styles/App.css';
import './assets/styles/Variables.css';

import HomeBackground from './assets/backgrounds/Home_Background.png';
import LearnBackground from './assets/backgrounds/Learnthe555_Background.png';
import BreatheBackground from './assets/backgrounds/Learnthe555_Background.png';
import AboutBackground from './assets/backgrounds/AboutDr.Row_BG.png';

const ScrollToTopAndChangeBackground = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Change background image based on route
    const body = document.body;

    switch (pathname) {
      case '/about':
        body.style.backgroundImage = `url(${AboutBackground})`;
        break;
      case '/breathe':
        body.style.backgroundImage = `url(${BreatheBackground})`;
        break;
      case '/learn':
        body.style.backgroundImage = `url(${LearnBackground})`;
        break;
      default:
        body.style.backgroundImage = `url(${HomeBackground})`;
        break;
    }

    // Clean up the background image when the component is unmounted or path changes
    return () => {
      body.style.backgroundImage = '';
    };
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router basename="/">
      <ScrollToTopAndChangeBackground />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/breathe" element={<BreatheScreen />} />
          <Route path="/learn" element={<LearnScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
