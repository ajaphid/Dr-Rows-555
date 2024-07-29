import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Breathe.css';
import HomeButton from '../assets/components/buttons/hom_button.png';

import BreatheAudio from '../assets/components/audios/555audio1.m4a';

import PauseButton from '../assets/components/buttons/pause_button.png';
import PlayButton from '../assets/components/buttons/play_button.png';
import RestartButton from '../assets/components/buttons/restart_button.png';
import MuteButton from '../assets/components/buttons/volume_up.png';
import UnmuteButton from '../assets/components/buttons/volume_down.png';

const BreatheScreen = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [instruction, setInstruction] = useState('Press Play to start');
  const [step, setStep] = useState(0);
  const [repetition, setRepetition] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const intervalRef = useRef(null);
  const animationRef = useRef([]);
  const audioRef = useRef(null);

  const instructions = useMemo(() => [
    'Inhale',
    'Hold your breath',
    'Exhale',
    'Hold your breath',
    'Breathe regularly',
  ], []);

  const animationSteps = useMemo(() => [
    'breatheIn',
    'holdIn',
    'breatheOut',
    'holdOut',
    'breatheRegular',
  ], []);

  useEffect(() => {
    if (isAnimating) {
      intervalRef.current = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            const nextStep = (step + 1) % instructions.length;
            setStep(nextStep);
            setInstruction(instructions[nextStep]);
            animationRef.current.forEach(circle => {
              circle.className = `circle ${animationSteps[nextStep]}`;
            });
            if (nextStep === 0) {
              setRepetition((prevRepetition) => {
                if (prevRepetition <= 5) {
                  return repetition + 1;
                } else {
                  setIsAnimating(false);
                  if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                  }
                  return 1;
                }
              });
            }
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
  }, [isAnimating, step, instructions, animationSteps, repetition]);

  const toggleAnimation = () => {
    if (!isAnimating && step === 0 && countdown === 5) {
      setInstruction(instructions[0]);
      animationRef.current.forEach(circle => {
        circle.className = `circle ${animationSteps[0]}`;
      });
    }
    setIsAnimating(!isAnimating);
    animationRef.current.forEach(circle => {
      circle.style.animationPlayState = isAnimating ? 'paused' : 'running';
    });
    if (audioRef.current) {
      if (isAnimating) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    clearInterval(intervalRef.current);
    setStep(0);
    setCountdown(5);
    setInstruction('Press Play to start');
    setRepetition(1);
    animationRef.current.forEach(circle => {
      circle.className = 'circle';
      circle.style.animationPlayState = 'running'; // Ensure it starts in running state
    });
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const toggleMute = () => {
    setIsMuted(prev => !prev);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    if (step === 0 && countdown === 5 && !isAnimating) {
      animationRef.current.forEach(circle => {
        circle.className = 'circle';
        circle.style.animationPlayState = 'running'; // Ensure it starts in running state
      });
    }
  }, [step, countdown, isAnimating]);

  return (
    <div className="page-container">
      <Link to="/" className="home-button">
        <img src={HomeButton} alt="Home Button"/>
      </Link>
      <div className="scrollable-content">
        <div className="container">
          <audio ref={audioRef} src={BreatheAudio} autoPlay={false} loop={true} muted={isMuted}></audio>
          <div className="flower">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                ref={el => animationRef.current[i] = el}
                className="circle"
              />
            ))}
          </div>
          {/* <br></br> */}
          <div className="breathe-tile-container">
            <div className="breathe-tile-content">
              {/* <h1 className="countdown">{countdown}</h1> */}
              <h2 className="breathe-instruction">{instruction}</h2>
              <h3 className="repetition-counter">Cycle: {repetition} / 5</h3>
              <div className="button-container">
                <img
                    src={isMuted ? UnmuteButton : MuteButton}
                    alt={isMuted ? "Unmute" : "Mute"}
                    className="control-button"
                    onClick={toggleMute}
                />
                <img
                  src={isAnimating ? PauseButton : PlayButton}
                  alt={isAnimating ? "Pause" : "Play"}
                  className="control-button"
                  id="main-button"
                  onClick={toggleAnimation}
                />
                <img
                  src={RestartButton}
                  alt="Reset"
                  className="control-button"
                  onClick={resetAnimation}
                />
              </div>
              <p className='subtext'>Breathe the 555 method.</p>
              {/* <br></br><br></br> */}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BreatheScreen;