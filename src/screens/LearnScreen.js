import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Learn.css';
import TutorialVideo from '../assets/videos/DrRows555.mp4';
import HomeButton from '../assets/buttons/Home_Icon_555.png';

const LearnScreen = () => {
  return (
    <div className="page-container">
      <Link to="/" className="home-button">
        <img src={HomeButton} alt="Home Button"/>
      </Link>
      <div className="scrollable-content">
        <div className="container">
          <video controls className="video">
            <source src={TutorialVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="tile-container">
            <div className="tile-content">
              <h1 className="header tile-header">Instructions</h1>
              <ol className="steps-container">
                <li className="body-text">Inhale for 5 seconds</li>
                <li className="body-text">Hold your breath for 5 seconds</li>
                <li className="body-text">Exhale for 5 seconds</li>
                <li className="body-text">Hold your breath for 5 seconds</li>
                <li className="body-text">Relax your breath; breathe normally for 5 seconds</li>
              </ol>
              <p className="body-text">Repeat 5x, or until calm.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnScreen;
