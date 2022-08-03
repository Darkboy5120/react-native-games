import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../theme';
import globalStyles from '../../theme/globalStyles';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.genericShadow,
    margin: metrics.spacing.base * .5,
    padding: metrics.spacing.base,
    backgroundColor: colors.primaryInteraction,
    borderRadius: metrics.bordering.small,
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusContainer: {
    backgroundColor: colors.secondaryBackground,
  },
});

export default styles;
