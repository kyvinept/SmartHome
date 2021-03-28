import {StyleSheet} from 'react-native';
import {useTheme} from 'services/ThemeManager';
const theme = useTheme();

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  headerText: {
    fontFamily: theme.fonts.ljkMilkMustacheBB,
    fontSize: 22,
    flex: 1,
    textAlign: 'center',
  },
});
