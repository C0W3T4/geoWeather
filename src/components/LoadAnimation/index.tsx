import React from 'react';
import { 
  View, 
  Text, 
} from 'react-native';
import LottieView from 'lottie-react-native';

import waitingClock from '../../assets/animations/waitingClock.json';

import { styles } from './styles';

export const LoadAnimation = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.loadingText}>
        Loading...
      </Text>

      <LottieView 
        source={waitingClock}
        autoPlay
        loop
        style={styles.animation}
      />

    </View>
  );
}
