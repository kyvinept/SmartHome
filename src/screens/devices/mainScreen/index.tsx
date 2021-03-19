import React, {useState} from 'react';
import {View} from 'react-native';
import BackgroundView, {
  BackgroundViewProps,
} from '../../../components/backgroundView';
import styles from './styles';
import {useObserver} from 'mobx-react';

const DevicesScreen = () => {
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

    return <BackgroundView {...backgroundViewProps} />;
  };

  return useObserver(renderContent);
};

export default DevicesScreen;
