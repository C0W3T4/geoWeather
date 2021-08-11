import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type HeaderProps = {
  title?: string;
  subtitle?: string;
  userName?: string;
  setHome?: boolean;
}

export const Header = ({title, userName, setHome, subtitle}: HeaderProps) => {

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
        { (userName) &&
          <Text style={styles.userName}>{userName}</Text>
        }

        { (setHome === true) && 
          <FontAwesome5 
            name="home" 
            size={24} 
            color={theme.colors.text_color} 
            style={styles.homeIcon}
            onPress={handleGoBack} 
          />
        }
      </View>

    </View>
  );
}
