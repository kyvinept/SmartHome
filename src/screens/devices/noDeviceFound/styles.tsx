import {StyleSheet} from 'react-native';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export default StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {textAlign: 'center', fontFamily: theme.fonts.notoSans, fontSize: 20},
  image: {width: 35, height: 35, marginTop: 50},
});
