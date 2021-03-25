import {StyleSheet} from 'react-native';
import {UI} from '../../constants';

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
