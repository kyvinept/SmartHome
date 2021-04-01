import {StyleSheet} from 'react-native';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export const getIconContainerStyle = (selected: boolean) => {
  return [
    styles.iconContainer,
    selected ? styles.shadow : {},
    {
      backgroundColor: selected
        ? theme.colors.redButton
        : theme.colors.transparent,
    },
  ];
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    fontFamily: theme.fonts.ljkMilkMustacheBB,
  },
  iconsView: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    marginHorizontal: -10,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 30,
  },
  shadow: {
    shadowColor: theme.colors.dimGray,
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
      width: 0,
    },

    elevation: 5,
  },
  icon: {
    width: 40,
    height: 40,
    // margin: 10,
  },
});

export default styles;
