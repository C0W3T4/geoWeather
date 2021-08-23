import React from 'react';
import { 
  View, 
  Text 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';
import Emoji from 'react-native-emoji';

import HeaderProps from '../../types/HeaderProps';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export const Header = ({title, emoji, setHome, subtitle}: HeaderProps) => {

  const navigation = useNavigation<any>();

  function handleGoBack() {
    navigation.navigate('Home');
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.headerLeftContent}>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

      </View>

      <View style={styles.headerRightContent}>

        { (emoji) &&
          <Text style={styles.emoji}>
          😄
          </Text>
        }

        { (setHome) && 
          <FontAwesome5 
            name="home" 
            size={24} 
            color={theme.colors.homeIcon_color} 
            style={styles.homeIcon}
            onPress={handleGoBack} 
          />
        }

      </View>
    </View>
  );
}
