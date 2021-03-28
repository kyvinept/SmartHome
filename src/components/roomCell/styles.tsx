import {StyleSheet} from 'react-native';
import {UI} from 'constants/index';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: UI.CELL_HEIGHT,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: '700',
    fontSize: 26,
    fontFamily: theme.fonts.ljkMilkMustacheBB,
  },
  image: {
    width: 25,
    height: 25,
  },
});
