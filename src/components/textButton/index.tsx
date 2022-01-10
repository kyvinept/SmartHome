import styles from './styles';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export interface TextButtonProps {
  text: string;
  delegate: {
    onPress: () => void;
  };
}

const TextButton = (props: TextButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.delegate.onPress}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
