import React, {useEffect, useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import strings from 'translations';
import styles from './styles';

export interface InputNameProps {}

const InputName = (props: InputNameProps) => {
  return (
    <View>
      <Text style={styles.text}>{strings.name}</Text>
      <TextInput style={styles.textInput} placeholder={strings.name} />
    </View>
  );
};

export default InputName;
