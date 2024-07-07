import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';
import LotusLogo from '../assets/images/lotus.png';

const HomeScreen = () => {
  return (
    <div className="scrollable-content">
      <h1 className="header">Experience Dr.Row’s 555 Breathing Technique</h1>
      <img src={LotusLogo} alt="Lotus Logo" className="lotus" />
      <h2 className="subheader">Dr.Row’s 555 is 5 steps, 5 seconds each, 5 times.</h2>
      <div className="button-container">
        <Link to="/breathe" className="button">Breathe the 555</Link>
        <Link to="/learn" className="button">Learn the 555</Link>
        <Link to="/about" className="button">About Dr.Row</Link>
      </div>
      <p className="description">
        Hello there & welcome! My name is Dr. Rowena Pingul-Ravano. Dr.Row’s 555 is my meditation breathing technique. It’s a technique I created for myself and my patients during COVID after taking the Yale University Happiness Course, “The Science of Well-being,” by Dr.Laurie Santos.
      </p>
    </div>
  );
};

export default HomeScreen;
