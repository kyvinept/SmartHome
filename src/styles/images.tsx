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
  reconnecting: ImageSourcePropType;
  // reconnectingGiphy: ImageSourcePropType;
  share: ImageSourcePropType;
  wifi: ImageSourcePropType;
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
  reconnecting: require('../assets/images/reconnecting/reconnecting.png'),
  // reconnectingGiphy: require('../assets/images/reconnectingGiphy/reconnectingGiphy.gif'),
  share: require('../assets/images/share/share.png'),
  wifi: require('../assets/images/wifi/wifi.png'),
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
  reconnecting: require('../assets/images/reconnecting/reconnecting.png'),
  // reconnectingGiphy: require('../assets/images/reconnectingGiphy/reconnectingGiphy.gif'),
  share: require('../assets/images/share/share.png'),
  wifi: require('../assets/images/wifi/wifi.png'),
};
