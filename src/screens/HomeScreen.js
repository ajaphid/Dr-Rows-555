import { useState } from 'react';
import '../assets/styles/Home.css';
import LotusImg from '../assets/images/logo.png';
import BreatheScreen from './BreatheScreen';
import MoreAbout555 from './MoreAbout555';
import Testimonials from './Testimonials';
import AboutCreator from './AboutCreator';
import GlowPromo from './GlowPromo';
import InstructionsPopup from './InstructionsPopup';

const HomeScreen = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="flex min-h-screen flex-col container mx-auto max-w-5xl px-12 pb-4">
      <div className="flex flex-row items-center">
        <img
          src={LotusImg}
          alt="Lotus for mindfullness"
          className="w-16 h-fit"
        />
        <h3>Dr. Row's 555 Breathing Technique</h3>
      </div>
      <h1 className="mx-auto text-darkRed mt-8 mb-4">Relax, recenter, and restore balance</h1>

      <BreatheScreen />
      
      <p className="mx-auto underline cursor-pointer" onClick={togglePopup}>
        Click here for written instructions
      </p>

      <MoreAbout555 />

      <Testimonials />

      <AboutCreator />

      <GlowPromo />

      <InstructionsPopup isVisible={isPopupVisible} onClose={togglePopup} />
    </div>
  );
}

export default HomeScreen;