import React from 'react';
import {createAppContainer} from 'react-navigation';
import Screens from './screens';
import {createStackNavigator} from 'react-navigation-stack';

const TapeStack = createStackNavigator(
  {
    Tape: {
      screen: Screens.TapeScreen.screen,
    },
    ColorPicker: {
      screen: Screens.ColorPickerScreen.screen,
    },
    TapeModePicker: {
      screen: Screens.TapeModePickerScreen.screen,
    },
    TapeNightMode: {
      screen: Screens.TapeNightModeScreen.screen,
    },
  },
  {
    transparentCard: true,
    transitionConfig: () => ({
      containerStyle: {
        backgroundColor: 'transparent',
      },
      containerStyleLight: {
        backgroundColor: 'transparent',
      },
      containerStyleDark: {
        backgroundColor: 'transparent',
      },
    }),
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false,
      animationEnabled: false,
    },
  },
);

const App = createStackNavigator(
  {
    Devices: {
      screen: Screens.DevicesScreen.screen,
    },
    Room: {
      screen: Screens.RoomScreen.screen,
    },
    Tape: TapeStack,
    AddDevice: {
      screen: Screens.AddDeviceScreen.screen,
    },
  },
  {
    initialRouteName: 'Devices',
    headerMode: 'none',
  },
);

export default createAppContainer(App);
