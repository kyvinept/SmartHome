import {interpolate} from 'helpers/interpolate';
import {StyleSheet} from 'react-native';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export const getLampLightStyle = (color: string, brightness: number) => {
  const interpolatedBrightness = interpolate(brightness, [0, 1], [0.4, 0.8]);
  const size = 50 + 80 * interpolatedBrightness;

  return [
    styles.lampLight,
    {
      backgroundColor: color,
      opacity: interpolatedBrightness / 2,
      width: size,
      height: size,
      borderRadius: size / 2,
      top: -size / 2 + 25,
      left: -size / 2 + 25,
    },
  ];
};

export const getLampStyle = (color: string) => {
  return [
    styles.lamp,
    {
      backgroundColor: color,
    },
  ];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  tape: {
    width: '100%',
    height: 80,
    backgroundColor: theme.colors.gainsboro,
    borderRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftPart: {
    width: 15,
    height: '100%',
    backgroundColor: theme.colors.dimGray,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  rightPart: {
    width: 15,
    height: '100%',
    backgroundColor: theme.colors.dimGray,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  lamp: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.white,

    shadowColor: theme.colors.shadowBlack,
    shadowRadius: 10,
    elevation: 5,
  },
  lampLight: {
    position: 'absolute',
  },
});

export default styles;
