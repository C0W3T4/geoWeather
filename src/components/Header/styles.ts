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
    // backgroundColor: theme.colors.header_background,
  },

  headerLeftContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 20,
    maxWidth: '50%',
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
    maxWidth: '50%',
  },

  userName: {
    fontSize: 28,
    fontFamily: theme.fonts.title,
    color: theme.colors.text_color,
    paddingRight: 40,
    alignItems: 'center',
  },

  homeIcon: {
    paddingRight: 50,
  }
});
