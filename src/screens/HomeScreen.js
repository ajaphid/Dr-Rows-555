import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Home.css';

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="scrollable-content">
        <div className="container">
          <img
            src={require('../assets/images/fixed logo 3.png')}
            alt="Lotus"
            className="header-image"
          />
          <h1 className="header home-header">Experience Dr. Row’s 555 Breathing Technique</h1>
          <h2 className="subheader">Hello there & welcome. My name is Dr. Rowena Pingul-Ravano!</h2>
          <p className="body-text main-text">
            Dr. Row’s 555 is my meditation breathing technique. The 555 is a meditative technique that I created for myself and my patients. The 555 technique is meant to help calm your nervous system, help you recenter, and restore a sense of balance.
          </p>
          <p className="body-text separated-text">
            Dr. Row's 555 is 5 steps, 5 seconds each, 5 times.
          </p>
          <div className="home-nav-container">
            <button className="button navigation" onClick={() => navigate('/breathe')}>
              Breathe the 555
            </button>
            <button className="button navigation" onClick={() => navigate('/learn')}>
              Learn the 555
            </button>
            <button className="button navigation" onClick={() => navigate('/about')}>
              About Dr. Row
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;

