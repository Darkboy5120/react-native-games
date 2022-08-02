import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: metrics.spacing.base,
    backgroundColor: colors.primaryInteraction,
    borderRadius: 15,
  },
  name: {
    color: colors.primaryText,
    fontSize: metrics.fontSize.s20,
  },
  description: {
    color: colors.secondaryText,
    fontSize: metrics.fontSize.s16,
  },
});

export default styles;
