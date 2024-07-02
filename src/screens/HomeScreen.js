import BackgroundImg from '../assets/images/Dr.Row_BG.png';
import LotusImg from '../assets/images/lotus-isolated(NEEDS_UPDATE).png';

import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../assets/styles';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={BackgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>Experience Dr.Row’s 555 Breathing Technique</Text>
        <Image source={LotusImg} style={styles.lotus} />
        <Text style={styles.subheader}>Dr.Row’s 555 is 5 steps, 5 seconds each, 5 times.</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Breathe')}>
            <Text style={styles.buttonText}>Breathe the 555</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Learn')}>
            <Text style={styles.buttonText}>Learn the 555</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
            <Text style={styles.buttonText}>About Dr.Row</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>
          Hello there & welcome! My name is Dr. Rowena Pingul-Ravano. Dr.Row’s 555 is my meditation breathing technique. It’s a technique I created for myself and my patients during COVID after taking the Yale University Happiness Course, “The Science of Well-being,” by Dr.Laurie Santos.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

