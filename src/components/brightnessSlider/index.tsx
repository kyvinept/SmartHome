import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {useTheme} from 'services/ThemeManager';
import styles from './styles';

export interface BrightnessSliderProps {
  value: number;
  delegate: {
    onValueChange: (value: number) => void;
  };
}

const BrightnessSlider = (props: BrightnessSliderProps) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={theme.images.moon} />
      <Slider
        style={styles.slider}
        value={props.value}
        minimumValue={0}
        maximumValue={1}
        onValueChange={props.delegate.onValueChange}
      />
      <Image style={styles.image} source={theme.images.sun} />
    </View>
  );
};

export default BrightnessSlider;
