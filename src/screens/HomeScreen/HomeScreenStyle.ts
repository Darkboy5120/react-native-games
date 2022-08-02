import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: metrics.spacing.base,
    backgroundColor: colors.primaryBackground,
    flex: 1,
  },
  header: {
    fontSize: metrics.fontSize.s28,
    color: colors.primaryText,
    paddingBottom: metrics.spacing.base,
  },
});

export default styles;
