import React from 'react';
import HomeScreen from './src/pages/HomeScreen';
import BreatheScreen from './src/pages/BreatheScreen';
import TutorialScreen from './src/pages/TutorialScreen';
import AboutDrRowScreen from './src/pages/AboutDrRowScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Breathe" component={BreatheScreen} options={{ title: 'Breathe' }} />
        <Stack.Screen name="Tutorial" component={TutorialScreen} options={{ title: 'Tutorial' }} />
        <Stack.Screen name="About" component={AboutDrRowScreen} options={{ title: 'About Dr. Row' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

