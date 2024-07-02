import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import BreatheScreen from './src/screens/BreatheScreen';
import LearnScreen from './src/screens/LearnScreen';

const Stack = createStackNavigator();

const linking = {
  prefixes: ['http://localhost:19006'],
  config: {
    screens: {
      Home: '',
      About: 'about',
      Breathe: 'breathe',
      Learn: 'learn',
    },
  },
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Breathe" component={BreatheScreen} />
        <Stack.Screen name="Learn" component={LearnScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
