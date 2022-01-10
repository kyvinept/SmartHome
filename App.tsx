import PushNotificationIOS from '@react-native-community/push-notification-ios';
import React, {useEffect} from 'react';
import NewDeviceDetectedNotification from 'screens/devices/newDeviceDetectedNotification';
import AppContainer from './src/navigations';
import NavigationService from './src/navigations/NavigationService';
import rootStore from './src/stores';
import {StoreProvider} from './src/stores/provider';

const App = () => {
  useEffect(() => {
    PushNotificationIOS.requestPermissions([]);
    PushNotificationIOS.addEventListener('notification', onRemoteNotification);
    PushNotificationIOS.addEventListener('register', (token) => {
      console.log(token);
      // 7f1c6c89e812b2a9a11af62b22e23798419b3d9e5004a4ab49b06154f1502872
    });
  }, []);

  const onRemoteNotification = (notification: any) => {
    console.log('onRemoteNotification', notification);

    const isClicked = notification.getData().userInteraction === 1;

    if (isClicked) {
      // Navigate user to another screen
    } else {
      // Do something else with push notification
    }
  };

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
