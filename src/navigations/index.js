import React from 'react';
import {createAppContainer} from 'react-navigation';
import Screens from './screens';
import {createStackNavigator} from 'react-navigation-stack';

const App = createStackNavigator(
  {
    Devices: {
      screen: Screens.DevicesScreen.screen,
    },
    Room: {
      screen: Screens.RoomScreen.screen,
    },
    Tape: {
      screen: Screens.TapeScreen.screen,
    },
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
