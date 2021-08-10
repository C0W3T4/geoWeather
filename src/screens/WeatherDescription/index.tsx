import React, { useEffect, useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  View, 
  Image,
  Platform
} from 'react-native';

import * as Location from 'expo-location';

import { Header } from '../../components/Header';
import { LoadAnimation } from '../../components/LoadAnimation';

import api from '../../services/api';
import { WEATHER_API_KEY } from '@env';

import WeatherProps from '../../types/WeatherProps';

import Moon from '../../assets/moon.jpg';

import { styles } from './styles';
import weatherIcons from '../../utils/weatherIcons';
import { convertKelvinToCelsius } from '../../utils/convertKelvinToCelsius';
import { capitalizeEntireString } from '../../utils/capitalizeEntireString';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { useNavigation, useRoute } from '@react-navigation/native';

type Params = {
  weather: WeatherProps;
}

export function WeatherDescription(){
  const route = useRoute();
  const navigation = useNavigation<any>();

  const { weather } = route.params as Params;

  function handleGoBack() {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>

      
      <View style={styles.content}>
        <Text>{weather.name}</Text>
      </View>
    </SafeAreaView>
  );
}