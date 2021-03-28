import styles from './styles';
import {useObserver} from 'mobx-react-lite';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import strings from 'translations';

export interface TextButtonProps {
  text: string;
  delegate: {
    onPress: () => void;
  };
}

const TextButton = (props: TextButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.delegate.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
