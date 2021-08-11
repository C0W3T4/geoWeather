import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View, Image } from 'react-native';
import WeatherProps from '../../types/WeatherProps';
import { convertKelvinToCelsius } from '../../utils/convertKelvinToCelsius';

import weatherIcons from '../../utils/weatherIcons';

import { styles } from './styles';

interface DetailsCardProps {
  data: {
    weatherInfo: WeatherProps;
  }
}

export const DetailsCard = ({ data, ...rest }: DetailsCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContent} >
        <FontAwesome name="thermometer-half" size={24} color="white" />
        
        <Text style={styles.detailsInfo}>
          {data.weatherInfo.clouds?.all}%
        </Text>
      </View>
    </View>
  );
}
