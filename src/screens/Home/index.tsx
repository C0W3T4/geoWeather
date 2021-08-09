import React, { useEffect, useState } from 'react';
import { 
  SafeAreaView,
  View, 
  Alert,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Location from 'expo-location';
import Constants from 'expo-constants';

import { Header } from '../../components/Header';
import { LoadAnimation } from '../../components/LoadAnimation';
import { CityWeatherCard } from '../../components/CityWeatherCard';

import api from '../../services/api';

import weatherIcons from '../../utils/weatherIcons';

import WeatherProps from '../../types/WeatherProps';

import { styles } from './styles';

import { WEATHER_API_KEY } from '@env';

export function Home(){

  const [currentLocation, setCurrentLocation] = useState<Location.LocationObject>();

  const [currentLocationWeatherData, setCurrentLocationWeatherData] = useState<WeatherProps>();
  const [weatherData, setWeatherData] = useState<WeatherProps>();

  const navigation = useNavigation<any>();

  function handleSelectedCityWeather() {
    navigation.navigate('WeatherDescription');
  }

  async function getCurrentLocation() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      Alert.alert(
        'Oops, this will not work in an Android emulator. Try it on your device!'
      );
      return;
    }

    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission to access location was denied'
      );
      return;
    }

    const coords = await Location.getCurrentPositionAsync({});
    setCurrentLocation(coords);
  }

  async function LoadCurrentLocationWeatherData() {
    try {
      const { data } = await api.get(
        `/weather?lat=${currentLocation?.coords?.latitude}&lon=${currentLocation?.coords?.longitude}&appid=${WEATHER_API_KEY}`
      );

      setCurrentLocationWeatherData(data);

    } catch (error) {
      Alert.alert(
        'Connection error',
        'Check your internet connection and try again!',
      );
    }
  }

  async function LoadWeatherDataByCity() {
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
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (currentLocation?.coords?.latitude && currentLocation?.coords?.longitude) {
      LoadCurrentLocationWeatherData();
      LoadWeatherDataByCity();
    }
  }, [currentLocation]);


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Header />
      </View>

      {!currentLocationWeatherData && !weatherData ? (

        <LoadAnimation />

      ) : (
        <View style={styles.cityWeatherContainer}>

          <CityWeatherCard 
            name={currentLocationWeatherData?.name}
            country={currentLocationWeatherData?.sys?.country}
            onPress={handleSelectedCityWeather}
          />

          <CityWeatherCard 
            name={weatherData?.name}
            country={weatherData?.sys?.country}
            onPress={() => handleSelectedCityWeather}
          />

          <CityWeatherCard 
            name={weatherData?.name}
            country={weatherData?.sys?.country}
            onPress={() => handleSelectedCityWeather}
          />

          <CityWeatherCard 
            name={weatherData?.name}
            country={weatherData?.sys?.country}
            onPress={() => handleSelectedCityWeather}
          />

          <CityWeatherCard 
            name={weatherData?.name}
            country={weatherData?.sys?.country}
            onPress={() => handleSelectedCityWeather}
          />

          <CityWeatherCard 
            name={weatherData?.name}
            country={weatherData?.sys?.country}
            onPress={() => handleSelectedCityWeather}
          />

          <CityWeatherCard 
            name={weatherData?.name}
            country={weatherData?.sys?.country}
            onPress={() => handleSelectedCityWeather}
          />

          <CityWeatherCard 
            name={weatherData?.name}
            country={weatherData?.sys?.country}
            onPress={() => handleSelectedCityWeather}
          />

          <CityWeatherCard 
            name={weatherData?.name}
            country={weatherData?.sys?.country}
            onPress={() => handleSelectedCityWeather}
          />

          <CityWeatherCard 
            name={weatherData?.name}
            country={weatherData?.sys?.country}
            onPress={() => handleSelectedCityWeather}
          />

          <CityWeatherCard 
            name={weatherData?.name}
            country={weatherData?.sys?.country}
            onPress={() => handleSelectedCityWeather}
          />

        </View>
      )}
    </SafeAreaView>
  );
}