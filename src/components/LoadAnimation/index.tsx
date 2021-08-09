import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import waitingClock from '../../assets/waitingClock.json'

import { styles } from './styles';

export const LoadAnimation = () => {
  return (
    <View style={styles.container}>
      <LottieView 
        source={waitingClock}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}
