import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import loadAnimationFile from '../../assets/995-thermometer.json';

import { styles } from './styles';

export function LoadAnimation() {
  return (
    <View style={styles.container}>
      <LottieView 
        source={loadAnimationFile}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}
