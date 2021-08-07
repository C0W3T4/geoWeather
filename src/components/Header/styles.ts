import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-platform-helper';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF000',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
});
