import {ImageSourcePropType} from 'react-native';

export interface ITheme {
  back: ImageSourcePropType;
  disabled: ImageSourcePropType;
  enabled: ImageSourcePropType;
  settings: ImageSourcePropType;
  plus: ImageSourcePropType;
  rightArrow: ImageSourcePropType;
  sun: ImageSourcePropType;
  moon: ImageSourcePropType;
  circlePlus: ImageSourcePropType;
}

export const lightTheme: ITheme = {
  back: require('../assets/images/back/back.png'),
  disabled: require('../assets/images/disabled/disabled.png'),
  enabled: require('../assets/images/enabled/enabled.png'),
  settings: require('../assets/images/settings/settings.png'),
  plus: require('../assets/images/plus/plus.png'),
  rightArrow: require('../assets/images/rightArrow/rightArrow.png'),
  sun: require('../assets/images/sun/sun.png'),
  moon: require('../assets/images/moon/moon.png'),
  circlePlus: require('../assets/images/circlePlus/circlePlus.png'),
};

export const darkTheme: ITheme = {
  back: require('../assets/images/back/back.png'),
  disabled: require('../assets/images/disabled/disabled.png'),
  enabled: require('../assets/images/enabled/enabled.png'),
  settings: require('../assets/images/settings/settings.png'),
  plus: require('../assets/images/plus/plus.png'),
  rightArrow: require('../assets/images/rightArrow/rightArrow.png'),
  sun: require('../assets/images/sun/sun.png'),
  moon: require('../assets/images/moon/moon.png'),
  circlePlus: require('../assets/images/circlePlus/circlePlus.png'),
};
