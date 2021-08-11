import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  weatherInfoContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  weatherDescription: {
    color: theme.colors.text_color,
    fontFamily: theme.fonts.text,
    fontSize: 24,
    top: 40,
  },

  weatherIcon: {
    width: 250,
    height: 250,
  },

  temp: {
    color: theme.colors.text_color,
    fontFamily: theme.fonts.text,
    fontSize: 24,
    bottom: 30,
  },

  detailsContainer: {
    width: '80%',
    height: '40%',
    backgroundColor: theme.colors.cardBackground,
    borderColor: theme.colors.shape,
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 50,
    padding: 50,
  },

  detailsCardContent: {
    flex: 1,
  },

  firstListDetails: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },

  detailsContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  secondListDetails: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  detailsInfo: {
    color: theme.colors.text_color,
    fontFamily: theme.fonts.text,
  },
});
