import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dr. Row's 555</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Image
        source={require('../assets/Screenshot 2024-04-17 at 7.37.16 PM.png')} // Replace with your image path
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Breathe the 555"
          onPress={() => navigation.navigate('Breathe')}
          color="#841584"
          style={styles.button}
        />
        <View style={styles.buttonSpacing} />
        <Button
          title="Tutorial"
          onPress={() => navigation.navigate('Tutorial')}
          color="#841584"
          style={styles.button}
        />
        <View style={styles.buttonSpacing} />
        <Button
          title="About Dr. Row"
          onPress={() => navigation.navigate('About')}
          color="#841584"
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#841584',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 150,
    height: 150,
    // marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
  button: {
    marginBottom: 10,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonSpacing: {
    height: 10, // Adjust the height to control the spacing between buttons
  },
});



// import React from 'react';
// import { View, Text, Button } from 'react-native';

// export default function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button title="Breathe the 555" onPress={() => navigation.navigate('Breathe')} />
//       <Button title="Tutorial" onPress={() => navigation.navigate('Tutorial')} />
//       <Button title="About Dr. Row" onPress={() => navigation.navigate('About')} />
//     </View>
//   );
// }