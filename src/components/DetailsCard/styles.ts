import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    maxHeight: '80%',
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 15,
    paddingVertical: 15,
    margin: 10,
  },

  countryContent: {
    paddingHorizontal: 15,
  },

  countryName: {
    color: theme.colors.text_color,
    fontFamily: theme.fonts.title,
    fontSize: 14,
    lineHeight: 15,
  },

  countryNameSys: {
    color: theme.colors.text_color,
    fontFamily: theme.fonts.text,
    fontSize: 10,
  },

  weatherContent: {
    alignItems: 'center',
    bottom: 20,
  },

  weatherIcon: {
    width: 70,
    height: 70,
  },

  tempText: {
    color: theme.colors.text_color,
    fontFamily: theme.fonts.text,
  },
});
