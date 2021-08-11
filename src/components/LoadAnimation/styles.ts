import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    fontSize: 28,
    color: theme.colors.loadingText_color,
    fontFamily: theme.fonts.title,
  },

  animation: {
    backgroundColor: 'transparent',
    width: 250,
    height: 250,
  },
});
