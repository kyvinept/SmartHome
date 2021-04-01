import {StyleSheet} from 'react-native';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export const getRoomText = (selected: boolean) => {
  return [
    styles.roomText,
    {color: selected ? theme.colors.white : theme.colors.dimGray},
  ];
};

export const getRoom = (selected: boolean) => {
  return [
    styles.room,
    {
      backgroundColor: selected ? theme.colors.redButton : theme.colors.white,
      borderColor: selected ? theme.colors.redButton : theme.colors.dimGray,
    },
  ];
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    fontFamily: theme.fonts.ljkMilkMustacheBB,
  },
  roomsView: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    marginHorizontal: -10,
  },
  roomText: {
    fontFamily: theme.fonts.notoSans,
    fontSize: 18,
  },
  room: {
    margin: 10,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,

    shadowColor: theme.colors.dimGray,
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
      width: 0,
    },

    elevation: 5,
  },
  addImage: {
    width: 20,
    height: 20,
  },
});

export default styles;
