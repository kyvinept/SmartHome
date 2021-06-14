import {StyleSheet} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dimGrayWithOpacity(0.4),
  },
  textInput: {
    margin: 20,
    borderWidth: 1,
    padding: 5,
    fontSize: 18,
  },
  blurView: {
    flex: 1,
  },
  bottomView: {
    paddingBottom: getBottomSpace() + 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: theme.colors.white,
    height: 500,
    width: '100%',
  },
});
