import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../theme';
import globalStyles from '../../theme/globalStyles';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.genericShadow,
    backgroundColor: colors.secondaryBackground,
    borderRadius: metrics.bordering.small * .25,
  },
});

export default styles;
