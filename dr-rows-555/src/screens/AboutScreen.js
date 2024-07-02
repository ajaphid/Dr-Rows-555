import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Headshot from '../assets/images/dr_row_headshot.png';

const AboutScreen = () => {
  return (
    <div className="container">
      <Link to="/" className="home-button">Home</Link>
      <h1>About Dr. Row</h1>
      <img src={Headshot} alt="Dr. Row Headshot" className="headshot" />
      <p>
        Rowena D. Pingul-Ravano, MD, FAAFP (Dr. Row) is board certified by the American Board of Family Medicine and is a Fellow of the American Academy of Family Practice. She currently serves as the Chief of Family Medicine at UPMC Magee Women’s Hospital and is an Assistant Professor at the University of Pittsburgh.
      </p>
      <p>
        Originally from the Philippines and raised in Southern California, she is a graduate of the University of Southern California and received her medical training at the University of the East.
      </p>
    </div>
  );
};

export default AboutScreen;
