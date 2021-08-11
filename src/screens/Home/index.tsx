import React, { 
  useEffect, 
  useState 
} from 'react';
import { 
  SafeAreaView,
  View, 
  Alert,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Location from 'expo-location';

import { Header } from '../../components/Header';
import { LoadAnimation } from '../../components/LoadAnimation';
import { HomeCard } from '../../components/HomeCard';

import WeatherProps from '../../types/WeatherProps';

import { WEATHER_API_KEY } from '@env';

import api from '../../services/api';
import { getCurrentLocationModule } from '../../services/getCurrentLocation';
import { allGetCalls } from '../../services/setGetCalls';

import { styles } from './styles';

export function Home(){

  const [currentLocation, setCurrentLocation] = useState<Location.LocationObject>();
  
  const [locationWeatherData, setLocationWeatherData] = useState<WeatherProps[]>([]);
  
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<any>();

  function handleSelectedCityWeather(weatherInfo: WeatherProps) {
    navigation.navigate('WeatherDescription', { weatherInfo });
  }

  async function getCurrentLocation() {
    setCurrentLocation(await getCurrentLocationModule.GetLocation());
  }

  async function fetchWeatherData() {
    const currentLocationData = `/weather?lat=${currentLocation?.coords?.latitude}&lon=${currentLocation?.coords?.longitude}&units=metric&appid=${WEATHER_API_KEY}`;
    
    await Promise.all([
      api.get(currentLocationData),
      api.get(allGetCalls.lisbonData),
      api.get(allGetCalls.madridData),
      api.get(allGetCalls.parisData),
      api.get(allGetCalls.berlinData),
      api.get(allGetCalls.copenhagenData),
      api.get(allGetCalls.romeData),
      api.get(allGetCalls.londonData),
      api.get(allGetCalls.dublinData),
      api.get(allGetCalls.pragueData),
      api.get(allGetCalls.viennaData),
    ]).then(function (responses) {

      // Get a JSON object from each of the responses
      return Promise.all(responses.map(function (response) {
        return response.data;

      }));
    }).then(function (data) {

      if(!data)
        return setLoading(true);

      setLocationWeatherData(data);

      setLoading(false);
      
    }).catch(function (error) {
      Alert.alert(error);
    });
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
          subtitle="See how the weather is." 
          userName="WIT"
        />

      </View>

      <View style={styles.cityWeatherContent}>

        <FlatList
          data={locationWeatherData}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <HomeCard 
              data={item}
              onPress={() => handleSelectedCityWeather(item)}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
        />

      </View>
    </SafeAreaView>
  );
}