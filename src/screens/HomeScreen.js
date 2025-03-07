import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Home.css';
import LotusImg from '../assets/images/logo.png';
import BreatheScreen from './BreatheScreen';
import MoreAbout555 from './MoreAbout555';

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col container mx-auto max-w-5xl px-12 pb-4">
      <div className="flex flex-row items-center">
        <img
          src={LotusImg}
          alt="Lotus"
          className="w-16 h-fit"
        />
        <h3>Dr. Row's 555</h3>
      </div>
      <h1 className="mx-auto text-darkRed mt-8 mb-4">Calm down, recenter, and restore balance</h1>

      <BreatheScreen />
      
      <p className="mx-auto underline">
        Click here for written instructions
      </p>

      <MoreAbout555 />
    </div>
  );
}

export default HomeScreen;

