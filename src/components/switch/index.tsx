import React, {useState} from 'react';
import {Switch as DefaultSwitch} from 'react-native';
import styles from './styles';

export interface SwitchProps {
  isEnabled: boolean;
  delegate: {
    onValueChange: (value: boolean) => void;
  };
}

const Switch = (props: SwitchProps) => {
  return (
    <DefaultSwitch
      onValueChange={props.delegate.onValueChange}
      value={props.isEnabled}
    />
  );
};

export default Switch;
