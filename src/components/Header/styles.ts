import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-platform-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: getStatusBarHeight(),
  },

  headerLeftContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 20,
    maxWidth: '65%',
  },

  title: {
    fontSize: 28,
    color: theme.colors.text_color,
    fontFamily: theme.fonts.title,
    paddingLeft: 40,
  },

  subtitle: {
    fontSize: 12,
    color: theme.colors.text_color,
    fontFamily: theme.fonts.title,
    bottom: 5,
    paddingLeft: 40,
  },

  headerRightContent: {
    maxWidth: '35%',
  },

  emoji: {
    fontSize: 30,
    paddingRight: 40,
    alignItems: 'center',
  },

  homeIcon: {
    paddingRight: 50,
  }
});
