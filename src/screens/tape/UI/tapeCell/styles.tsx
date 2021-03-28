import {StyleSheet} from 'react-native';
import {UI} from 'constants/index';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export default StyleSheet.create({
  container: {
    height: UI.CELL_HEIGHT,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  image: {
    height: 30,
    width: 30,
  },
  text: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    fontFamily: theme.fonts.notoSans,
  },
});
