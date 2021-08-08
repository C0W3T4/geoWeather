import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { WeatherDescription } from '../screens/WeatherDescription';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'transparent'} 
    }}>
      <Screen 
        name="Home"
        component={Home} 
      />
      <Screen 
        name="WeatherDescription" 
        component={WeatherDescription}
      />
    </Navigator>
  );
}
