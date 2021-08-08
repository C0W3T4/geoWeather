import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-platform-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 28,
    color: '#F5F5F5',
    fontFamily: theme.fonts.title,
  },
});
