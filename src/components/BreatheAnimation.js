import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import BreatheCircle from './BreatheCircle';
import '../App.css';

const BreatheAnimation = () => {
  const [toggle, setToggle] = useState(false);
  const { progress } = useSpring({
    reset: true,
    reverse: toggle,
    from: { progress: 0 },
    to: { progress: 1 },
    onRest: () => setToggle(!toggle),
    config: { duration: 3000 }
  });

  return (
    <div className="breathe-container">
      {Array.from({ length: 6 }, (_, index) => (
        <BreatheCircle key={index} progress={progress} index={index} />
      ))}
    </div>
  );
};

export default BreatheAnimation;
