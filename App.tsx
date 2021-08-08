import React from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Merriweather_400Regular } from '@expo-google-fonts/merriweather';

import { Routes } from './src/routes';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Poppins_700Bold,
    Merriweather_400Regular
  });

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <>
      <StatusBar 
        style="light"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
