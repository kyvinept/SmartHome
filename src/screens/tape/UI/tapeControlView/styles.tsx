import {Dimensions, StyleSheet} from 'react-native';
import {useTheme} from 'services/ThemeManager';

const dimension = Dimensions.get('window');
const theme = useTheme();

export default StyleSheet.create({
  container: {
    padding: 20,
    width: dimension.width - 40,
    height: 350,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
