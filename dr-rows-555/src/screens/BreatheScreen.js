import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BreatheScreen = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [instruction, setInstruction] = useState('Press Play to start');
  const [step, setStep] = useState(0);
  const intervalRef = useRef(null);

  const instructions = useMemo(() => [
    'Inhale',
    'Hold your breath',
    'Exhale',
    'Hold your breath',
    'Breathe regularly',
    ], []);

  useEffect(() => {
    if (isAnimating) {
      intervalRef.current = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            const nextStep = (step + 1) % instructions.length;
            setStep(nextStep);
            setInstruction(instructions[nextStep]);
            return 5;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAnimating, step, instructions]);

  const toggleAnimation = () => {
    if (!isAnimating && step === 0 && countdown === 5) {
      setInstruction(instructions[0]);
    }
    setIsAnimating(!isAnimating);
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    clearInterval(intervalRef.current);
    setStep(0);
    setCountdown(5);
    setInstruction('Press Play to start');
  };

  return (
    <div className="container">
      <Link to="/" className="home-button">Home</Link>
      <h1>{countdown}</h1>
      <h2>{instruction}</h2>
      <div className="button-container">
        <button className="button-fixed" onClick={toggleAnimation}>
          {isAnimating ? 'Pause' : 'Play'}
        </button>
        <button className="button-fixed" onClick={resetAnimation}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default BreatheScreen;
