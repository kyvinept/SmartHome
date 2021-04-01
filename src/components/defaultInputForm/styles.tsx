import {StyleSheet} from 'react-native';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export const getContainer = () => {
  return [];
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  spacer: {
    height: 25,
  },
});

export default styles;
