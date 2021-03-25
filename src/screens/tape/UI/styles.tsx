import {StyleSheet} from 'react-native';
import {UI} from 'constants/index';

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
    fontSize: 16,
    marginLeft: 10,
  },
});
