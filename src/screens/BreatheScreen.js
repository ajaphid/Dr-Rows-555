import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../assets/styles';
import BackgroundImg from '../assets/images/Dr.Row_BG.png';

const BreatheScreen = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [instruction, setInstruction] = useState('Press Play to start');
  const [step, setStep] = useState(0);
  const intervalRef = useRef(null);

  const instructions = [
    'Inhale',
    'Hold your breath',
    'Exhale',
    'Hold your breath',
    'Breathe regularly',
  ];

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
  }, [isAnimating, step]);

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
    <ImageBackground source={BackgroundImg} style={styles.background}>
      <View style={styles.breatheContainer}>
        <Text style={styles.countdown}>{countdown}</Text>
        <Text style={styles.breatheInstruction}>{instruction}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonFixed} onPress={toggleAnimation}>
            <Text style={styles.buttonText}>{isAnimating ? 'Pause' : 'Play'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFixed} onPress={resetAnimation}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default BreatheScreen;







// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import styles from '../assets/styles';

// const BreatheScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Turn your volume up to hear Dr. Row's voice!</Text>
//       <Text style={styles.text}>1. Inhale for 5 seconds</Text>
//       <Text style={styles.text}>2. Hold your breath for 5 seconds</Text>
//       <Text style={styles.text}>3. Exhale for 5 seconds</Text>
//       <Text style={styles.text}>4. Hold your breath for 5 seconds</Text>
//       <Text style={styles.text}>5. Relax your breath; breathe normally for 5 seconds</Text>
//     </View>
//   );
// };

// export default BreatheScreen;
