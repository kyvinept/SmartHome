import styles from './styles';
import {useObserver} from 'mobx-react-lite';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import strings from 'translations';

export interface NoDeviceFoundProps {}

const NoDeviceFound = (props: NoDeviceFoundProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{strings.noDeviceFound}</Text>
    </View>
  );
};

export default NoDeviceFound;
