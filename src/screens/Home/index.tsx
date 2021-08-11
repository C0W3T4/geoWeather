import React, { useEffect, useState } from 'react';
import { 
  SafeAreaView,
  View, 
  Alert,
  Platform,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Location from 'expo-location';
import Constants from 'expo-constants';

import { Header } from '../../components/Header';
import { LoadAnimation } from '../../components/LoadAnimation';
import { CityWeatherCard } from '../../components/CityWeatherCard';

import WeatherProps from '../../types/WeatherProps';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { WEATHER_API_KEY } from '@env';

export function Home(){

  const [currentLocation, setCurrentLocation] = useState<Location.LocationObject>();
  
  const [locationWeatherData, setLocationWeatherData] = useState<WeatherProps[]>([]);
  
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<any>();

  function handleSelectedCityWeather(weatherInfo: WeatherProps) {
    navigation.navigate('WeatherDescription', { weatherInfo });
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

  async function fetchWeatherData() {
    const currentLocationData = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation?.coords?.latitude}&lon=${currentLocation?.coords?.longitude}&_page=${page}&_limit=6&appid=${WEATHER_API_KEY}`;
    const lisbonData = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&_page=${page}&_limit=6&appid=${WEATHER_API_KEY}`;
    const madridData = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&_page=${page}&_limit=6&appid=${WEATHER_API_KEY}`;
    const parisData = `https://api.openweathermap.org/data/2.5/weather?q=Paris&_page=${page}&_limit=6&appid=${WEATHER_API_KEY}`;
    const berlinData = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&_page=${page}&_limit=6&appid=${WEATHER_API_KEY}`;
    const copenhagenData = `https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&_page=${page}&_limit=6&appid=${WEATHER_API_KEY}`;
    const romeData = `https://api.openweathermap.org/data/2.5/weather?q=Rome&_page=${page}&_limit=6&appid=${WEATHER_API_KEY}`;
    const londonData = `https://api.openweathermap.org/data/2.5/weather?q=London&_page=${page}&_limit=6&appid=${WEATHER_API_KEY}`;
    const dublinData = `https://api.openweathermap.org/data/2.5/weather?q=Dublin&_page=${page}&_limit=6&appid=${WEATHER_API_KEY}`;
    const pragueData = `https://api.openweathermap.org/data/2.5/weather?q=Prague&_page=${page}&_limit=6&appid=${WEATHER_API_KEY}`;
    const viennaData = `https://api.openweathermap.org/data/2.5/weather?q=Vienna&_page=${page}&_limit=6&appid=${WEATHER_API_KEY}`;

    await Promise.all([
      fetch(currentLocationData),
      fetch(lisbonData),
      fetch(madridData),
      fetch(parisData),
      fetch(berlinData),
      fetch(copenhagenData),
      fetch(romeData),
      fetch(londonData),
      fetch(dublinData),
      fetch(pragueData),
      fetch(viennaData),
    ]).then(function (responses) {

      // Get a JSON object from each of the responses
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    }).then(function (data) {

      if(!data)
        return setLoading(true);

      if(page > 1){
        setLocationWeatherData(oldValue => [...oldValue, ...data]);}
      else{
        setLocationWeatherData(data);}

      setLoading(false);
      setLoadingMore(false);
      
    }).catch(function (error) {
      Alert.alert(error);
    });
  }

  function handleFetchMore(distance: number) {
    if (distance < 1)
      return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    //fetchWeatherData();
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (currentLocation?.coords?.latitude && currentLocation?.coords?.longitude) {
      fetchWeatherData();
    }
  }, [currentLocation]);

  if(loading)
    return <LoadAnimation />

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Header 
          title="Hello" 
          subtitle="Check how the weather is in your city" 
          userName="David"
        />
      </View>

      <View style={styles.cityWeatherContent}>
        <FlatList
          data={locationWeatherData}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CityWeatherCard 
              data={item}
              onPress={() => handleSelectedCityWeather(item)}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => 
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore
            ? <ActivityIndicator color={theme.colors.bottom_loading} />
            : <></>
          }
        />
      </View>

    </SafeAreaView>
  );
}