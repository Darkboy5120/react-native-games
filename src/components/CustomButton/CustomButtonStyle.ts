import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../theme';
import globalStyles from '../../theme/globalStyles';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.genericShadow,
    borderRadius: metrics.bordering.small,
    backgroundColor: colors.primaryText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: metrics.spacing.base * .5,
  },
  text: {
    fontSize: metrics.fontSize.s20,
    color: colors.primaryBackground,
  },
});

export default styles;
