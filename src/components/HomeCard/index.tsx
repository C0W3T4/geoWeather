import React from 'react';
import { 
  Text, 
  View, 
  Image 
} from 'react-native';
import { 
  RectButton, 
  RectButtonProps 
} from 'react-native-gesture-handler';

import HomeCardProps from '../../types/HomeCardProps';

import { removeDecimals } from '../../utils/removeDecimals';

import weatherIcons from '../../utils/weatherIcons';

import { styles } from './styles';

interface HomeCardPropsExtended extends RectButtonProps {
  data: HomeCardProps;
}

export const HomeCard = ({ data, ...rest }: HomeCardPropsExtended) => {
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
          {removeDecimals(data.main?.temp)}ºC
        </Text>

      </View>
    </RectButton>
  );
}
