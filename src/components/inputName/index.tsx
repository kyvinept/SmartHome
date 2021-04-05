import ErrorText from 'components/errorText';
import React, {useEffect, useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import strings from 'translations';
import styles from './styles';

export interface InputNameProps {
  error?: string;
  delegate: {
    onChangeText: (text: string) => void;
  };
}

const InputName = (props: InputNameProps) => {
  return (
    <View>
      <Text style={styles.text}>{strings.name}</Text>
      <TextInput
        onChangeText={props.delegate.onChangeText}
        style={styles.textInput}
        placeholder={strings.name}
      />
      {props.error && <ErrorText error={props.error} />}
    </View>
  );
};

export default InputName;
