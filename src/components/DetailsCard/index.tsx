import React from 'react';
import { Text, View, Image } from 'react-native';
import { convertKelvinToCelsius } from '../../utils/convertKelvinToCelsius';

import weatherIcons from '../../utils/weatherIcons';

import { styles } from './styles';

interface DetailsCardProps {
  data: {
    main?: {
      temp?: number;
      feels_like?: number;
      temp_min?: number;
      temp_max?: number;
      pressure?: number;
      humidity?: number;
    },
    id?: number;
  }
}

export const DetailsCard = ({ data, ...rest }: DetailsCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.weatherContent}>
      </View>
    </View>
  );
}
