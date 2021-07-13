import {StyleSheet} from 'react-native';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginTop: -10,
    justifyContent: 'space-evenly',
  },
  image: {
    width: 35,
    height: 35,
  },
});
