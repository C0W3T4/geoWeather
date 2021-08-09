import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface WeatherProps extends RectButtonProps {
  name?: string;
  country?: string;
}

export const CityWeatherCard = ({ name, country, ...rest }: WeatherProps) => {
  return (
    <RectButton 
      style={styles.container}
      {...rest}
    >
      <Text style={styles.text}>
        {name}{`  `}{country}
      </Text>
    </RectButton>
  );
}