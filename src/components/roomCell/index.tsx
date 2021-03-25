import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import RoomStore from 'stores/RoomStore';
import styles from './styles';

export interface RoomCellProps {
  roomStore: RoomStore;
  onPress: () => void;
}

const RoomCell = (props: RoomCellProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.roomStore.model.name}</Text>
    </TouchableOpacity>
  );
};

export default RoomCell;
