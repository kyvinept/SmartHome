import Switch from 'components/switch';
import {useObserver} from 'mobx-react-lite';
import NavigationService from 'navigations/NavigationService';
import Screens from 'navigations/screens';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import TapeStore from 'screens/tape/TapeStore';
import {useTheme} from 'services/ThemeManager';
import styles from './styles';

export interface TapeModeProps {
  tapeStore: TapeStore;
}

const TapeMode = (props: TapeModeProps) => {
  const tapeStore = props.tapeStore;
  const theme = useTheme();

  const onPressChosingMode = () => {
    NavigationService.present(Screens.TapeModePickerScreen.name, {
      tapeStore,
    });
  };

  const onPressNightMode = () => {
    NavigationService.present(Screens.TapeNightModeScreen.name, {
      tapeStore,
    });
  };

  return useObserver(() => (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressNightMode}
        hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
        <Image style={styles.image} source={theme.images.night} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressChosingMode}
        hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
        <Image style={styles.image} source={theme.images.showingMode} />
      </TouchableOpacity>
    </View>
  ));
};

export default TapeMode;
