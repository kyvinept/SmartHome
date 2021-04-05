import {StyleSheet, Dimensions} from 'react-native';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();
const dimension = Dimensions.get('window');

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  shadowView: {
    width: dimension.width - 40,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingBottom: 20,
  },
  textInput: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    fontFamily: theme.fonts.notoSans,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  containerStyle: {
    paddingHorizontal: 20,
  },
  cellImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  cellText: {
    fontFamily: theme.fonts.notoSans,
    fontSize: 20,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.dimGray,
  },
});

export default styles;
