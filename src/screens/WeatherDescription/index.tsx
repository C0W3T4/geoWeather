import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  View, 
  Image,
  FlatList,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Header } from '../../components/Header';

import WeatherProps from '../../types/WeatherProps';

import { convertKelvinToCelsius } from '../../utils/convertKelvinToCelsius';

import weatherIcons from '../../utils/weatherIcons';

import { styles } from './styles';
import { DetailsCard } from '../../components/DetailsCard';
import { FontAwesome } from '@expo/vector-icons';
import { capitalize } from '../../utils/capitalize';

type Params = {
  weatherInfo: WeatherProps;
}

export function WeatherDescription(){
  
  const route = useRoute();

  const { weatherInfo } = route.params as Params;

  const [details, setDetails] = useState<[]>([]);

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
          {convertKelvinToCelsius(weatherInfo.main?.temp)}ºC
        </Text>

        <View style={styles.detailsContainer}>
          {/* <FlatList
            data={}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <DetailsCard 
                data={item}
              />
            )}
            numColumns={3}
          /> */}

          <View style={styles.detailsContent}>
            <FontAwesome name="thermometer-half" size={24} color="white" />
            
            <Text style={styles.detailsInfo}>
              {weatherInfo.clouds?.all}%
            </Text>
          </View>

        </View>

      </View>
    </SafeAreaView>
  );
}