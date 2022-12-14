import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../theme';
import globalStyles from '../../theme/globalStyles';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.genericShadow,
    padding: metrics.spacing.base,
    backgroundColor: colors.secondaryBackground,
    borderRadius: metrics.bordering.small,
    marginVertical: metrics.spacing.base * .5,
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
