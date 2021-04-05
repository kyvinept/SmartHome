import React, {useEffect, useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles';

export interface ErrorTextProps {
  error: string;
}

const ErrorText = (props: ErrorTextProps) => {
  return <Text style={styles.text}>{props.error}</Text>;
};

export default ErrorText;
