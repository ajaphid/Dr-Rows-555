import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Learn.css';
import TutorialVideo from '../assets/videos/tutorial-video.mp4';

const LearnScreen = () => {
  return (
    <div className="page-container">
      <Link to="/" className="home-button">Home</Link>
      <div className="scrollable-content">
        <div className="container">
          <h1 className="header">Follow along with Dr.Row & experience the 555 Breathing Technique!</h1>
          <video controls className="video">
            <source src={TutorialVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <ol className="steps-container">
            <li className="step-text">Inhale for 5 seconds</li>
            <li className="step-text">Hold your breath for 5 seconds</li>
            <li className="step-text">Exhale for 5 seconds</li>
            <li className="step-text">Hold your breath for 5 seconds</li>
            <li className="step-text">Relax your breath; breathe normally for 5 seconds</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default LearnScreen;
