import {StyleSheet} from 'react-native';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export const getContainer = () => {
  return [];
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    fontFamily: theme.fonts.ljkMilkMustacheBB,
  },
  textInput: {
    borderWidth: 1,
    fontFamily: theme.fonts.notoSans,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default styles;
