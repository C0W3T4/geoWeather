import React from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font';
import {  } from '@expo-google-fonts/poppins';
import {  } from '@expo-google-fonts/merriweather';

import { Background } from './src/components/Background';
import { Home } from './src/screens/Home';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

export default function App() {

  const [ fontsLoaded ] = useFonts({

  });

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <Background>
      <StatusBar 
        style="light"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </Background>
  );
}