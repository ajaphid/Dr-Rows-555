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
    'Inhale for 5 seconds',
    'Hold your breath for 5 seconds',
    'Exhale for 5 seconds',
    'Hold your breath for 5 seconds',
    'Breathe regularly for 5 seconds',
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
    <div>
      <Link to="/" className="home-button">Home</Link>
      <div className="scrollable-content">
        <div className="container">
          <h1 className="countdown">{countdown}</h1>
          <h2 className="breathe-instruction">{instruction}</h2>
          <div className="button-container">
            <button className="button-fixed" onClick={toggleAnimation}>
              {isAnimating ? 'Pause' : 'Play'}
            </button>
            <button className="button-fixed" onClick={resetAnimation}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreatheScreen;
