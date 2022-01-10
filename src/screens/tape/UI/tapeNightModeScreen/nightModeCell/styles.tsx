import {StyleSheet} from 'react-native';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  datePickerContainer: {
    height: 36,
    width: 100,
  },
  index: {
    fontSize: 18,
    fontFamily: theme.fonts.notoSans,
  },
});
