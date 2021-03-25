import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {TapeModel} from '../TapeModel';
import styles from './styles';

export interface TapeCellProps {
  tape: TapeModel;
  onPress: () => void;
}

const TapeCell = (props: TapeCellProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image style={styles.image} source={props.tape.icon} />
      <Text style={styles.text}>{props.tape.name}</Text>
    </TouchableOpacity>
  );
};

export default TapeCell;
