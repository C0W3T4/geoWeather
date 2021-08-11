import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { convertKelvinToCelsius } from '../../utils/convertKelvinToCelsius';

import weatherIcons from '../../utils/weatherIcons';

import { styles } from './styles';

interface WeatherProps extends RectButtonProps {
  data: {
    weather?: [
      {
        icon?: string;
      }
    ]
    main?: {
      temp?: number;
    }
    sys?: {
      country?: string;
    }
    name?: string;
  }
}

export const CityWeatherCard = ({ data, ...rest }: WeatherProps) => {
  return (
    <RectButton 
      style={styles.container}
      {...rest}
    >

      <View style={styles.countryContent}>
        <Text style={styles.countryName}>
          {data?.name}
        </Text>
        <Text style={styles.countryNameSys}>
          {data.sys?.country}
        </Text>
      </View>

      <View style={styles.weatherContent}>
        {data.weather?.[0].icon && (
          <Image
            style={styles.weatherIcon}
            source={weatherIcons(data.weather?.[0].icon)}
          />
        )}
        <Text style={styles.tempText}>
          {convertKelvinToCelsius(data.main?.temp)}ºC
        </Text>
      </View>

    </RectButton>
  );
}
