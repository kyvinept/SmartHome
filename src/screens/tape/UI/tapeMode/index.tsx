import Switch from 'components/switch';
import {useObserver} from 'mobx-react-lite';
import NavigationService from 'navigations/NavigationService';
import Screens from 'navigations/screens';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import TapeStore from 'screens/tape/TapeStore';
import styles from './styles';

export interface TapeModeProps {
  tapeStore: TapeStore;
}

const TapeMode = (props: TapeModeProps) => {
  const tapeStore = props.tapeStore;

  const onPress = () => {
    NavigationService.present(Screens.TapeModePickerScreen.name, {
      tapeStore,
    });
  };

  return useObserver(() => (
    <TouchableOpacity onPress={onPress}>
      <Text>{tapeStore.model.showingMode.type}</Text>
    </TouchableOpacity>
  ));
};

export default TapeMode;
