import React from 'react';
import AddDeviceStore from 'screens/devices/AddDeviceStore';
import NewDeviceDetectedNotification from 'screens/devices/newDeviceDetectedNotification';
import AppContainer from './src/navigations';
import NavigationService from './src/navigations/NavigationService';
import rootStore from './src/stores';
import {StoreProvider} from './src/stores/provider';

const App = () => {
  return (
    <StoreProvider value={rootStore}>
      <AppContainer
        ref={(navigatorRef) => {
          if (navigatorRef) {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }
        }}
      />
      <NewDeviceDetectedNotification />
    </StoreProvider>
  );
};

export default App;
