import InputIcon, {InputIconProps} from 'components/inputIcon';
import InputName, {InputNameProps} from 'components/inputName';
import InputTextBlock, {InputTextBlockProps} from 'components/inputTextBlock';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';

export interface DefaultInputFormProps {
  name: InputNameProps;
  icon: InputIconProps;
  room: InputTextBlockProps;
}

const DefaultInputForm = (props: DefaultInputFormProps) => {
  return (
    <View style={styles.container}>
      <InputName {...props.name} />
      <View style={styles.spacer} />
      <InputIcon {...props.icon} />
      <View style={styles.spacer} />
      <InputTextBlock {...props.room} />
    </View>
  );
};

export default DefaultInputForm;
