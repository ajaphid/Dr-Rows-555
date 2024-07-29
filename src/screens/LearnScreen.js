import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Learn.css';
import TutorialVideo from '../assets/components/videos/DrRows555.mp4';
import HomeButton from '../assets/components/buttons/hom_button.png';

const LearnScreen = () => {
  return (
    <div className="page-container">
      <Link to="/" className="home-button">
        <img src={HomeButton} alt="Home Button"/>
      </Link>
      <video controls className="video">
        <source src={TutorialVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="learn-tile-container">
        <div className="learn-tile-content">
          <h1 className="header learn-header">Instructions</h1>
          <ol className="steps-container">
            <li className="step-text">Inhale for 5 seconds</li>
            <li className="step-text">Hold your breath for 5 seconds</li>
            <li className="step-text">Exhale for 5 seconds</li>
            <li className="step-text">Hold your breath for 5 seconds</li>
            <li className="step-text">Relax your breath; breathe normally for 5 seconds</li>
          </ol>
          <p className="body-text">Repeat 5x, or until calm.</p>
        </div>
      </div>
    </div>
  );
};

export default LearnScreen;
