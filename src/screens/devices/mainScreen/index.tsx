import React, {useState} from 'react';
import {View} from 'react-native';
import BackgroundView, {BackgroundViewProps} from 'components/backgroundView';
import styles from './styles';
import {useObserver} from 'mobx-react';
import DevicesStore from 'screens/devices/DevicesStore';
import DevicesDataList from './list';

const DevicesScreen = () => {
  const devicesStore = new DevicesStore();

  const onPressAddButton = () => {};

  const renderContent = () => {
    const backgroundViewProps: BackgroundViewProps = {
      header: {
        text: 'Devices',
        rightButtonProps: {
          text: 'Add',
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
