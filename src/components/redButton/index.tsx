import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles, {getContainer} from './styles';

export interface RedButtonProps {
  text: string;
  disabled?: boolean;
  delegate: {
    onPress: () => void;
  };
}

const RedButton = (props: RedButtonProps) => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={getContainer(props.disabled)}
      onPress={props.delegate.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default RedButton;
