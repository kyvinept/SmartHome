import Switch from 'components/switch';
import {useObserver} from 'mobx-react-lite';
import NavigationService from 'navigations/NavigationService';
import Screens from 'navigations/screens';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import TapeStore from 'screens/tape/TapeStore';
import {TapeStatus} from '../../TapeModel';
import styles from './styles';

export interface TapeCellProps {
  tapeStore: TapeStore;
}

const TapeCell = (props: TapeCellProps) => {
  const tapeStore = props.tapeStore;

  const onPress = () => {
    NavigationService.push(Screens.TapeScreen.name, {
      tapeStore: props.tapeStore,
    });
  };

  return useObserver(() => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={tapeStore.model.icon} />
      <Text style={styles.text}>{tapeStore.model.name}</Text>
      <Switch
        isEnabled={tapeStore.model.status == TapeStatus.on}
        delegate={{onValueChange: tapeStore.toggleStatus}}
      />
    </TouchableOpacity>
  ));
};

export default TapeCell;
