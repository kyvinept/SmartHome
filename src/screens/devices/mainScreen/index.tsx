import React, {useState} from 'react';
import {View} from 'react-native';
import BackgroundView, {BackgroundViewProps} from 'components/backgroundView';
import styles from './styles';
import {useObserver} from 'mobx-react';
import DevicesStore from 'screens/devices/DevicesStore';
import DevicesDataList from './list';
import NavigationService from 'navigations/NavigationService';
import Screens from 'navigations/screens';
import strings from 'translations';
import {useTheme} from 'services/ThemeManager';
import {useDevicesStore} from 'stores/provider/useStore';

const DevicesScreen = () => {
  const devicesStore = useDevicesStore();
  const theme = useTheme();

  const onPressAddButton = () => {
    NavigationService.push(Screens.AddDeviceScreen.name);
  };

  const renderContent = () => {
    const backgroundViewProps: BackgroundViewProps = {
      header: {
        text: strings.devices,
        rightButtonProps: {
          image: {image: theme.images.plus, width: 20, alignSelf: 'flex-end'},
          onPress: onPressAddButton,
        },
      },
    };

    return (
      <BackgroundView {...backgroundViewProps}>
        <DevicesDataList devicesStore={devicesStore} />
      </BackgroundView>
    );
  };

  return useObserver(renderContent);
};

export default DevicesScreen;
