import ShadowView from 'components/shadowView';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export interface TapeInfoProps {}

const TapeInfo = (props: TapeInfoProps) => {
  return (
    <ShadowView containerStyle={styles.container}>
      <Text style={styles.text}>Tape info model</Text>
    </ShadowView>
  );
};

export default TapeInfo;
