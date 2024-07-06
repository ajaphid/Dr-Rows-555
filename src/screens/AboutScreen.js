import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import DrRowHeadshot from '../assets/images/dr_row_headshot.png';

const AboutScreen = () => {
  return (
    <div className="page-container">
      <Link to="/" className="home-button">Home</Link>
      <div className="scrollable-content">
        <div className="container">
          <h1 className="header">About Dr. Row</h1>
          <img src={DrRowHeadshot} alt="Dr. Row Headshot" className="headshot" />
          <p className="description">
            Rowena D. Pingul-Ravano, MD, FAAFP (Dr. Row) is board certified by the American Board of Family Medicine and is a Fellow of the American Academy of Family Practice. She currently serves as the Chief of Family Medicine at UPMC Magee Women’s Hospital and is an Assistant Professor at the University of Pittsburgh.
          </p>
          <p className="description">
            Originally from the Philippines and raised in Southern California, she is a graduate of the University of Southern California and received her medical training at the University of the East.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
