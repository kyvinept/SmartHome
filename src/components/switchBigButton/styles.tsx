import {StyleSheet} from 'react-native';
import {UI} from 'constants/index';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export default StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,

    shadowColor: theme.colors.shadowBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontFamily: theme.fonts.notoSans,
    fontSize: 45,
    textAlign: 'center',
  },
});
