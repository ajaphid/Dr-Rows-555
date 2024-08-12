import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/About.css';
import DrRowHeadshot from '../assets/components/images/Dr. Rowena.jpeg';
import HomeButton from '../assets/components/buttons/hom_button.png';

const AboutScreen = () => {

  return (
    <div className="page-container">
      <Link to="/" className="home-button">
        <img src={HomeButton} alt="Home Button"/>
      </Link>
      <img
        src={DrRowHeadshot}
        alt="Headshot"
        className="headshot"
      />
      <div className="about-tile-container">
        <div className="about-tile-content">
          <h1 className="header about-header">About Dr. Row</h1>
          <p className="body-text main-text">
            Rowena D. Pingul-Ravano, MD, FAAFP (Dr. Row) is board certified by the  American Board of Family Medicine and is a Fellow of the American  Academy of Family Practice. She currently serves as the Chief of Family Medicine at UPMC Magee Women’s Hospital and is an Assistant Professor at  the University of Pittsburgh.
          </p>
          <p className="body-text separated-text">
            Originally from the Philippines and  raised in Southern California, she is a graduate of the University of  Southern California and received her medical training at the University of the East.
          </p>
          <br></br>
          <h1 className="header about-header">Does she practice the 555 on her own time?</h1>
          <p className="body-text main-text">
            Yes! Dr. Row loves the 555 and uses it within both the personal and professional spheres of her life. Dr. Row believes in healing mental repair and recovery of the self & finding sustainable ways to relax and find peace. Meditative breathing is a well-loved aspect of Dr. Row’s work and wants to encourage everyone, no matter what, to find ways to re-center during moments of stress.
          </p>
          <p className="body-text separated-text">
            Dr. Row created the 555 Breathing Technique during the COVID-19 pandemic after completing the Yale University ‘Happiness Course’, “The Science of Well-being,” by Dr. Laurie Santos. Dr. Row is a firm believer in meditation, healing, and seeking optimism, wellness, and gratitude in all areas of life.
          </p>
          <br></br><br></br>
        </div>
      </div>
    </div>
  );
}

export default AboutScreen;
