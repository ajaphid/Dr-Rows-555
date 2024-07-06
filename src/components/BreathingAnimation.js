import React, { useRef, useEffect } from 'react';

const BreathingAnimation = ({ isAnimating, step, animationSteps }) => {
  const animationRef = useRef(null);

  useEffect(() => {
    if (isAnimating) {
      animationRef.current.className = `circle ${animationSteps[step]}`;
    } else {
      animationRef.current.className = 'circle';
    }
  }, [isAnimating, step, animationSteps]);

  return <div ref={animationRef} className="circle"></div>;
};

export default BreathingAnimation;
