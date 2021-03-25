import {StyleSheet} from 'react-native';
import {UI} from 'constants/index';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: UI.CELL_HEIGHT,
    justifyContent: 'center',
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
  },
});
