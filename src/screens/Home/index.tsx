import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

import api from '../../services/api';

import { Header } from '../../components/Header';
import { LoadAnimation } from '../../components/LoadAnimation';

import WeatherProps from '../../types/WeatherProps';

import Moon from '../../assets/moon.jpg';
import weatherIcons from '../../utils/weatherIcons';

import { convertKelvinToCelsius } from '../../utils/convertKelvinToCelsius';
import { capitalizeEntireString } from '../../utils/capitalizeEntireString';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

import { styles } from './styles';

import { WEATHER_API_KEY } from '@env';

export function Home(){
  const [weatherData, setWeatherData] = useState<undefined | WeatherProps>(undefined);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function LoadWeatherData() {
    setLoading(true);

    try {
      const { data } = await api.get(
        `/weather?q=Porto&appid=${WEATHER_API_KEY}`
      );
      setWeatherData(data);

    } catch (error) {
      Alert.alert(
        'Connection error',
        'Check your internet connection and try again!',
      );
    }
    setLoading(false);
  }

  // function handleSelectedCityWeather(cityWeather: WeatherProps) {
  //   navigation.navigate('WeatherDescription', {cityWeather});
  // }

  useEffect(() => {
    LoadWeatherData();
  }, []);

  if(loading)
    return <LoadAnimation />

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        
      </View>

      <View style={styles.content}>
        <Text>{weatherData?.coord.lon}</Text>
        <Text>{weatherData?.coord.lat}</Text>

        <Text>{weatherData?.weather[0].id}</Text>
        <Text>{weatherData?.weather[0].main}</Text>
        <Text>{capitalizeFirstLetter(weatherData?.weather[0].description)}</Text>
        <View style={styles.iconContainer}>
          {weatherData?.weather[0].icon && (
            <Image style={styles.icon}
              source={weatherIcons(weatherData?.weather[0].icon)}
              resizeMode="contain"
            />
          )}
        </View>

        <Text>{weatherData?.base}</Text>

        <Text>{convertKelvinToCelsius(weatherData?.main.temp)}</Text>
        <Text>{weatherData?.main.feels_like}</Text>
        <Text>{weatherData?.main.temp_min}</Text>
        <Text>{weatherData?.main.temp_max}</Text>
        <Text>{weatherData?.main.pressure}</Text>
        <Text>{weatherData?.main.humidity}</Text>

        <Text>{weatherData?.visibility}</Text>
        
        <Text>{weatherData?.wind.speed}</Text>
        <Text>{weatherData?.wind.deg}</Text>
        
        <Text>{weatherData?.clouds.all}</Text>
        
        <Text>{weatherData?.dt}</Text>

        <Text>{weatherData?.sys.type}</Text>
        <Text>{weatherData?.sys.id}</Text>
        <Text>{weatherData?.sys.message}</Text>
        <Text>{weatherData?.sys.country}</Text>
        <Text>{weatherData?.sys.sunrise}</Text>
        <Text>{weatherData?.sys.sunset}</Text>

        <Text>{weatherData?.timezone}</Text>

        <Text>{weatherData?.id}</Text>

        <Text>{weatherData?.name}</Text>

        <Text>{weatherData?.cod}</Text>

      </View>
    </SafeAreaView>
  );
}