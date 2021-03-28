import {Dimensions, StyleSheet} from 'react-native';
import {useTheme} from 'services/ThemeManager';

const dimension = Dimensions.get('window');
const theme = useTheme();

export default StyleSheet.create({
  container: {
    width: dimension.width - 40,
    height: 50,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: theme.fonts.ljkMilkMustacheBB,
    fontSize: 18,
  },
});
