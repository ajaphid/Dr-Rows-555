import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TutorialScreen() {
  return (
    <View style={styles.container}>
      <Text>Tutorial Screen</Text>
      {/* Placeholder for video or additional content */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});