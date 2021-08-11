import React from 'react';
import { 
  SafeAreaView, 
  Text, 
  View, 
  Image,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Header } from '../../components/Header';

import WeatherProps from '../../types/WeatherProps';

import { removeDecimals } from '../../utils/removeDecimals';
import { capitalize } from '../../utils/capitalize';

import weatherIcons from '../../utils/weatherIcons';
import { 
  FontAwesome, 
  FontAwesome5, 
  Ionicons, 
  MaterialCommunityIcons 
} from '@expo/vector-icons';

import { styles } from './styles';

type Params = {
  weatherInfo: WeatherProps;
}

export function WeatherDescription(){
  
  const route = useRoute();

  const { weatherInfo } = route.params as Params;

  return (
    <SafeAreaView style={styles.container}>
      
      <View>
        <Header 
          title={weatherInfo?.name} 
          setHome={true} 
        />
      </View>

      <View style={styles.weatherInfoContent}>

        <Text style={styles.weatherDescription}>
          {capitalize(weatherInfo.weather?.[0].description)}
        </Text>

        {weatherInfo.weather?.[0].icon && (
          <Image
            style={styles.weatherIcon}
            source={weatherIcons(weatherInfo.weather?.[0].icon)}
          />
        )}

        <Text style={styles.temp}>
          {removeDecimals(weatherInfo.main?.temp)}ºC
        </Text>

        <View style={styles.detailsContainer}>
          <View style={styles.detailsCardContent}>
            <View style={styles.firstListDetails}>

              <View style={styles.detailsContent}>
                <FontAwesome name="thermometer-empty" size={24} color="white" />
                
                <Text style={styles.detailsInfo}>
                  {removeDecimals(weatherInfo.main?.temp_min)}ºC
                </Text>
              </View>

              <View style={styles.detailsContent}>
                <FontAwesome name="thermometer-half" size={24} color="white" />
                
                <Text style={styles.detailsInfo}>
                  {removeDecimals(weatherInfo.main?.feels_like)}ºC
                </Text>
              </View>

              <View style={styles.detailsContent}>
                <FontAwesome name="thermometer-full" size={24} color="white" />
                
                <Text style={styles.detailsInfo}>
                  {removeDecimals(weatherInfo.main?.temp_max)}ºC
                </Text>
              </View>

            </View>
            <View style={styles.secondListDetails}>

              <View style={styles.detailsContent}>
                <FontAwesome5 name="water" size={24} color="white" />
                
                <Text style={styles.detailsInfo}>
                  {weatherInfo.main?.pressure}{`\n`}hPa
                </Text>
              </View>

              <View style={styles.detailsContent}>
                <Ionicons name="water-sharp" size={24} color="white" />
                
                <Text style={styles.detailsInfo}>
                  {weatherInfo.main?.humidity}%
                </Text>
              </View>

              <View style={styles.detailsContent}>
                <MaterialCommunityIcons name="weather-fog" size={24} color="white" />
                
                <Text style={styles.detailsInfo}>
                  {weatherInfo.clouds?.all}%
                </Text>
              </View>

            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}