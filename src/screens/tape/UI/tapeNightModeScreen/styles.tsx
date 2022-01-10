import {StyleSheet} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dimGrayWithOpacity(0.4),
  },
  bottomButtonsView: {
    justifyContent: 'flex-end',
  },
  addButton: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
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
    paddingTop: 20,
    paddingBottom: getBottomSpace() + 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: theme.colors.white,
    // height: 500,
    width: '100%',
  },
});
