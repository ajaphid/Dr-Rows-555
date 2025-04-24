import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../assets/styles/BreatheAnimation.css';
import BreatheAudio from '../assets/audios/555audio.m4a';
import PauseButton from '../assets/buttons/pause_button.png';
import PlayButton from '../assets/buttons/play_button.png';
import RestartButton from '../assets/buttons/restart_button.png';
import MuteButton from '../assets/buttons/volume_up.png';
import UnmuteButton from '../assets/buttons/volume_down.png';
import BreatheFormPopup from './BreatheFormPopup';

const BreatheScreen = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [instruction, setInstruction] = useState('Press Play to start');
  const [step, setStep] = useState(0);
  const [repetition, setRepetition] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
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
                  setShowFeedbackForm(true);
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
        // Google analytics event listener
        window.gtag('event', 'play_audio', {
        'event_category': 'Audio Interaction',
        'event_label': 'Breathe Screen Audio Play',
          });
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
    setShowFeedbackForm(false);
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

  const handleCloseFeedbackForm = () => {
    setShowFeedbackForm(false);
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
    <div className="mx-auto">
      <div>
        <div>
          <audio ref={audioRef} src={BreatheAudio} autoPlay={false} muted={isMuted}></audio>
          <div className="flower">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                ref={el => animationRef.current[i] = el}
                className="circle"
              />
            ))}
          </div>
          <div>
            <div>
              <h2 className="text-center font-['Maragsa_Display']">{instruction}</h2>
              <h3 className="text-center font-['Hanken_Grotesk'] mb-5">Repetition {repetition} / 5</h3>
              <div className="flex justify-center items-center gap-4 mb-5">
                <img
                  src={isMuted ? UnmuteButton : MuteButton}
                  alt={isMuted ? "Unmute" : "Mute"}
                  className="w-8 cursor-pointer border-none p-0"
                  onClick={toggleMute}
                />
                <img
                  src={isAnimating ? PauseButton : PlayButton}
                  alt={isAnimating ? "Pause" : "Play"}
                  className="w-16 p-3 cursor-pointer border-none"
                  id="main-button"
                  onClick={toggleAnimation}
                />
                <img
                  src={RestartButton}
                  alt="Reset"
                  className="w-8 cursor-pointer border-none p-0"
                  onClick={resetAnimation}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showFeedbackForm && (
        <BreatheFormPopup isVisible={showFeedbackForm} onClose={handleCloseFeedbackForm} />
      )}
    </div>
  );
};

export default BreatheScreen;