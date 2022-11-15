import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../theme';
import globalStyles from '../../theme/globalStyles';

const styles = StyleSheet.create({
  ...globalStyles,
  screenContainer: {
    flex: 1,
  },
  playerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  p1Container: {
    backgroundColor: colors.primaryInteraction,
  },
  p2Container: {
    backgroundColor: colors.secondaryInteraction,
  },
});

export default styles;
