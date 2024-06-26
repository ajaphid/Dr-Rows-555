import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BreatheScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text>Breathe Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'skyblue',
  },
});