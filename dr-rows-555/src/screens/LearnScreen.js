import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import TutorialVideo from '../assets/videos/tutorial-video.mp4';

const LearnScreen = () => {
  return (
    <div className="container">
      <Link to="/" className="home-button">Home</Link>
      <h1>Follow along with Dr.Row & experience the 555 Breathing Technique!</h1>
      <video controls className="video">
        <source src={TutorialVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="steps-container">
        <p>1. Inhale for 5 seconds</p>
        <p>2. Hold your breath for 5 seconds</p>
        <p>3. Exhale for 5 seconds</p>
        <p>4. Hold your breath for 5 seconds</p>
        <p>5. Relax your breath; breathe normally for 5 seconds</p>
      </div>
    </div>
  );
};

export default LearnScreen;
