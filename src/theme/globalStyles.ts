import { StyleSheet } from 'react-native';
import colors from './colors';
import metrics from './metrics';

const globalStyles = StyleSheet.create({
  screenContainer: {
    padding: metrics.spacing.base,
    backgroundColor: colors.primaryBackground,
    flex: 1,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: metrics.fontSize.s28,
    color: colors.primaryText,
    paddingBottom: metrics.spacing.base,
  },
  genericShadow: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navigationHeader: {
    backgroundColor: colors.primaryText,
  },
  navigationTitle: {
    color: colors.primaryBackground,
  },
  headerTintColor: {
    color: colors.primaryBackground,
  },
});

export default globalStyles;
