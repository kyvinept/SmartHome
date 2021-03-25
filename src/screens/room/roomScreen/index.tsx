import React, {useState} from 'react';
import {View} from 'react-native';
import BackgroundView, {BackgroundViewProps} from 'components/backgroundView';
import styles from './styles';
import {useObserver} from 'mobx-react';
import RoomStore from 'stores/RoomStore';

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

  const renderContent = () => {
    const backgroundView: BackgroundViewProps = {
      header: {
        text: roomStore.model.name,
      },
    };

    return <BackgroundView {...backgroundView}></BackgroundView>;
  };

  return useObserver(renderContent);
};

export default RoomScreen;
