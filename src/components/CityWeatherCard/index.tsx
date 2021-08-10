import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface WeatherProps extends RectButtonProps {
  data: {
    name?: string;
    country?: string;
  }
}

export const CityWeatherCard = ({ data, ...rest }: WeatherProps) => {
  return (
    <RectButton 
      style={styles.container}
      {...rest}
    >
      <Text style={styles.text}>
        {data.name}{`  `}{data.country}
      </Text>
    </RectButton>
  );
}