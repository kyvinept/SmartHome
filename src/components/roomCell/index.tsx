import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {RoomModel} from '../../screens/devices/RoomModel';
import styles from './styles';

export interface RoomCellProps {
  model: RoomModel;
  onPress: () => void;
}

const RoomCell = (props: RoomCellProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.model.name}</Text>
    </TouchableOpacity>
  );
};

export default RoomCell;
