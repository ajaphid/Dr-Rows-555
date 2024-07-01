import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../assets/styles';

const BreatheScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Turn your volume up to hear Dr. Row's voice!</Text>
      <Text style={styles.text}>1. Inhale for 5 seconds</Text>
      <Text style={styles.text}>2. Hold your breath for 5 seconds</Text>
      <Text style={styles.text}>3. Exhale for 5 seconds</Text>
      <Text style={styles.text}>4. Hold your breath for 5 seconds</Text>
      <Text style={styles.text}>5. Relax your breath; breathe normally for 5 seconds</Text>
    </View>
  );
};

export default BreatheScreen;
