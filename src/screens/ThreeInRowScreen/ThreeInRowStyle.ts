import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../theme';
import globalStyles from '../../theme/globalStyles';

const styles = StyleSheet.create({
  ...globalStyles,
  boxContainer: {
    ...globalStyles.genericShadow,
    backgroundColor: colors.secondaryBackground,
    borderRadius: metrics.bordering.medium,
    padding: metrics.spacing.base,
    marginVertical: metrics.spacing.base,
    width: '100%',
  },
  contrastHeaderText: {
    color: colors.secondaryText,
  },
  boxRow: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  winsRowContainer: {
    paddingHorizontal: metrics.spacing.base,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  winsLabel: {
    fontSize: metrics.fontSize.s20,
    color: colors.primaryText,
    fontWeight: '500',
  },
});

export default styles;
