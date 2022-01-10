import {StyleSheet} from 'react-native';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export default StyleSheet.create({
  container: {
    borderColor: theme.colors.dimGray,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    height: 100,
  },
  containerLeft: {
    marginLeft: 20,
    marginRight: 10,
  },
  containerRight: {
    marginLeft: 10,
    marginRight: 20,
  },
  activeContainer: {
    backgroundColor: theme.colors.redButton,
  },
  defaultContainer: {
    backgroundColor: 'transparent',
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    fontFamily: theme.fonts.notoSans,
    fontSize: 16,
  },
  activeText: {
    color: theme.colors.white,
  },
  defaultText: {
    color: theme.colors.dimGray,
  },
});
