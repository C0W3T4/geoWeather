import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStackRoutes } from './appStack.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AppStackRoutes />
    </NavigationContainer>
  );
}
