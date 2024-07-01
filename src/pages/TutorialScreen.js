import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TutorialScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tutorial</Text>
      
      {/* Image Placeholder */}
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Image Placeholder</Text>
      </View>
      
      {/* Video Placeholder */}
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Video Placeholder</Text>
      </View>
      
      {/* Additional content can go here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  placeholder: {
    width: 300,
    height: 200,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  placeholderText: {
    color: '#757575',
  },
});

