import React, {useState} from 'react';
import {View} from 'react-native';
import BackgroundView, {BackgroundViewProps} from 'components/backgroundView';
import styles from './styles';
import {useObserver} from 'mobx-react';
import RoomStore from 'stores/RoomStore';
import RoomDetailsList from './list';
import {useTheme} from 'services/ThemeManager';
import NavigationService from 'navigations/NavigationService';
import Screens from 'navigations/screens';

export interface RoomScreenProps {
  navigation: {
    state: {
      params: {
        roomStore: RoomStore;
      };
    };
  };
}

const RoomScreen = (props: RoomScreenProps) => {
  const roomStore = props.navigation.state.params.roomStore;
  const theme = useTheme();

  const renderList = () => {
    return <RoomDetailsList data={roomStore.devices} />;
  };

  const onPressAddButton = () => {
    NavigationService.push(Screens.AddDeviceScreen.name, {
      selectedRoom: roomStore,
    });
  };

  const renderContent = () => {
    const backgroundView: BackgroundViewProps = {
      header: {
        text: roomStore.model.name.toUpperCase(),
        leftButtonProps: {
          image: {
            image: theme.images.back,
            alignSelf: 'flex-start',
            width: 25,
          },
          onPress: NavigationService.dismiss,
        },
        rightButtonProps: {
          image: {image: theme.images.plus, width: 20, alignSelf: 'flex-end'},
          onPress: onPressAddButton,
        },
      },
    };

    return <BackgroundView {...backgroundView}>{renderList()}</BackgroundView>;
  };

  return useObserver(renderContent);
};

export default RoomScreen;
