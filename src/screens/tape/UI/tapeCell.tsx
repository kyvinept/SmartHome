import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {TapeModel} from '../TapeModel';
import TapeStore from '../TapeStore';
import styles from './styles';

export interface TapeCellProps {
  tapeStore: TapeStore;
  onPress: () => void;
}

const TapeCell = (props: TapeCellProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image style={styles.image} source={props.tapeStore.model.icon} />
      <Text style={styles.text}>{props.tapeStore.model.name}</Text>
    </TouchableOpacity>
  );
};

export default TapeCell;
