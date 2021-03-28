import BackgroundView, {BackgroundViewProps} from 'components/backgroundView';
import {useObserver} from 'mobx-react-lite';
import NavigationService from 'navigations/NavigationService';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useTheme} from 'services/ThemeManager';
import strings from 'translations';
import styles from './styles';

const AddDeviceScreen = () => {
  const theme = useTheme();

  const renderContent = () => {
    const backgroundViewProps: BackgroundViewProps = {
      header: {
        text: strings.newDevice,
        leftButtonProps: {
          image: {
            image: theme.images.back,
            alignSelf: 'flex-start',
            width: 25,
          },
          onPress: NavigationService.dismiss,
        },
      },
    };

    return <BackgroundView {...backgroundViewProps}></BackgroundView>;
  };

  return useObserver(renderContent);
};

export default AddDeviceScreen;
