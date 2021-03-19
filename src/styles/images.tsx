import {ImageSourcePropType} from 'react-native';

export interface ITheme {
  back: ImageSourcePropType;
  disabled: ImageSourcePropType;
  enabled: ImageSourcePropType;
  settings: ImageSourcePropType;
}

export const lightTheme: ITheme = {
  back: require('../assets/images/back/back.png'),
  disabled: require('../assets/images/disabled/disabled.png'),
  enabled: require('../assets/images/enabled/enabled.png'),
  settings: require('../assets/images/settings/settings.png'),
};

export const darkTheme: ITheme = {
  back: require('../assets/images/back/back.png'),
  disabled: require('../assets/images/disabled/disabled.png'),
  enabled: require('../assets/images/enabled/enabled.png'),
  settings: require('../assets/images/settings/settings.png'),
};
