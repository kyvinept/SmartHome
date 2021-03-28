import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import strings from 'translations';
import styles from './styles';

export interface SwitchBitButtonProps {
  isEnabled: boolean;
  delegate: {
    onValueChange: (value: boolean) => void;
  };
}

const SwitchBitButton = (props: SwitchBitButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.delegate.onValueChange(!props.isEnabled)}>
      <Text style={styles.text}>
        {props.isEnabled ? strings.off : strings.on}
      </Text>
    </TouchableOpacity>
  );
};

export default SwitchBitButton;
