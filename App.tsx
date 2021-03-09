/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/routes';

const App: React.FC = () => {
  let latestTimeout = useRef<NodeJS.Timeout>();
  useEffect(() => {
    latestTimeout.current = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    return () => {
      clearTimeout(latestTimeout.current!);
    };
  });
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
