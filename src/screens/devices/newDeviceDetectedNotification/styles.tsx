import {Dimensions, StyleSheet} from 'react-native';
import {UI} from 'constants/index';
import {useTheme} from 'services/ThemeManager';

const dimension = Dimensions.get('window');
const theme = useTheme();

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    width: dimension.width - 40,
    height: 80,
    borderRadius: 10,
    position: 'absolute',
    marginHorizontal: 20,
    marginTop: 50,

    shadowColor: theme.colors.shadowBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
