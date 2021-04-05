import styles from './styles';
import {useObserver} from 'mobx-react-lite';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import strings from 'translations';
import {useTheme} from 'services/ThemeManager';

export interface NoDeviceFoundProps {
  onSearchForDevice: () => void;
}

const NoDeviceFound = (props: NoDeviceFoundProps) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Go to wifi settings and find the 'wifinew' network. Connect with the
        '1234567890' password. Connected? Press 'Try again'.
      </Text>
      <TouchableOpacity onPress={props.onSearchForDevice}>
        <Image style={styles.image} source={theme.images.reconnecting} />
      </TouchableOpacity>
      <Text style={styles.text}>{strings.tryAgain}</Text>
    </View>
  );
};

export default NoDeviceFound;
