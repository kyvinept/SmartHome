import {StyleSheet} from 'react-native';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export default StyleSheet.create({
  text: {
    fontFamily: theme.fonts.notoSans,
    fontSize: 16,
    color: theme.colors.redButton,
  },
});
