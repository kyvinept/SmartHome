import {StyleSheet} from 'react-native';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export const getContainer = (disabled?: boolean) => {
  return [
    styles.container,
    {
      backgroundColor: disabled
        ? theme.colors.disabledRedButton
        : theme.colors.redButton,
    },
  ];
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: theme.colors.shadowBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,

    elevation: 5,
  },
  text: {
    fontSize: 16,
    marginVertical: 8,
    fontFamily: theme.fonts.notoSans,
    color: theme.colors.white,
  },
});

export default styles;
