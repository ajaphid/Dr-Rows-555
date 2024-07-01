import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Video } from 'expo-av';
import styles from '../assets/styles';

import TutorialVideo from '../assets/videos/70796-538877060_small.mp4';
import BackgroundImg from '../assets/images/Dr.Row_BG.png';

const LearnScreen = () => {
  return (
    <ImageBackground source={BackgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>Follow along with Dr.Row & experience the 555 Breathing Technique!</Text>
        <Video
          source={TutorialVideo} // Replace with your video file path
          style={styles.video}
          useNativeControls
          resizeMode="contain"
          // isLooping
        />
        <View style={styles.stepsContainer}>
          <Text style={styles.stepText}>1. Inhale for 5 seconds</Text>
          <Text style={styles.stepText}>2. Hold your breath for 5 seconds</Text>
          <Text style={styles.stepText}>3. Exhale for 5 seconds</Text>
          <Text style={styles.stepText}>4. Hold your breath for 5 seconds</Text>
          <Text style={styles.stepText}>5. Relax your breath; breathe normally for 5 seconds</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LearnScreen;

