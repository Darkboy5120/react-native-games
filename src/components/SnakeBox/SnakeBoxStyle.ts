import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../theme';
import globalStyles from '../../theme/globalStyles';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.genericShadow,
    borderRadius: metrics.bordering.small,
    overflow: 'hidden',
    backgroundColor: colors.primaryText,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    margin: metrics.spacing.base * .5,
  },
});

export default styles;
