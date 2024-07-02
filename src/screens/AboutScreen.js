import BackgroundImg from '../assets/images/Dr.Row_BG.png';
import DrRowHeadshot from '../assets/images/dr_row_headshot.png';

import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import styles from '../assets/styles';

const AboutScreen = () => {
  return (
    <ImageBackground source={BackgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>About Dr. Row</Text>
        <Image source={DrRowHeadshot} style={styles.headshot} />
        <Text style={styles.description}>
          Rowena D. Pingul-Ravano, MD, FAAFP (Dr. Row) is board certified by the American Board of Family Medicine and is a Fellow of the American Academy of Family Practice. She currently serves as the Chief of Family Medicine at UPMC Magee Women’s Hospital and is an Assistant Professor at the University of Pittsburgh.
        </Text>
        <Text style={styles.description}>
          Originally from the Philippines and raised in Southern California, she is a graduate of the University of Southern California and received her medical training at the University of the East.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default AboutScreen;


