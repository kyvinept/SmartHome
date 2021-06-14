import Switch from 'components/switch';
import {useObserver} from 'mobx-react-lite';
import NavigationService from 'navigations/NavigationService';
import Screens from 'navigations/screens';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import TapeStore, {TapeStoreState} from 'screens/tape/TapeStore';
import {TapeStatus} from '../../TapeModel';
import styles from './styles';
import {useTheme} from 'services/ThemeManager';

export interface TapeCellProps {
  tapeStore: TapeStore;
}

const TapeCell = (props: TapeCellProps) => {
  const theme = useTheme();

  const tapeStore = props.tapeStore;

  const onPress = () => {
    switch (tapeStore.tapeState) {
      case TapeStoreState.ok:
        NavigationService.push(Screens.TapeScreen.name, {
          tapeStore: props.tapeStore,
        });
        break;

      default:
        tapeStore.checkConnection();
        break;
    }
  };

  const renderRightPart = () => {
    switch (tapeStore.tapeState) {
      case TapeStoreState.ok:
        return (
          <Switch
            isEnabled={tapeStore.model.status == TapeStatus.on}
            delegate={{onValueChange: tapeStore.toggleStatus}}
          />
        );

      case TapeStoreState.noConnection:
      case TapeStoreState.waiting:
        return (
          <Image
            style={styles.reconnectingImage}
            source={theme.images.reconnecting}
          />
        );
    }
  };

  return useObserver(() => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={tapeStore.model.icon} />
      <Text style={styles.text}>{tapeStore.model.name}</Text>
      {renderRightPart()}
    </TouchableOpacity>
  ));
};

export default TapeCell;
