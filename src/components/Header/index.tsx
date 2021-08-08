import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Header(){
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hello friend!{`\n`}I'm glad you're here.</Text>
      </View>
    </View>
  );
}
