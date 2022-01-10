import Slider from '@react-native-community/slider';
import ImageButton from 'components/imageButton';
import React from 'react';
import {View} from 'react-native';
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

  const onPressMinusButton = () => {
    props.delegate.onValueChange(props.value - 0.1);
  };

  const onPressPlusButton = () => {
    props.delegate.onValueChange(props.value + 0.1);
  };

  return (
    <View style={styles.container}>
      <ImageButton
        source={theme.images.moon}
        imageStyle={styles.image}
        delegate={{onPress: onPressMinusButton}}
      />
      <Slider
        style={styles.slider}
        value={props.value}
        minimumValue={0}
        maximumValue={1}
        onSlidingComplete={props.delegate.onValueChange}
      />
      <ImageButton
        source={theme.images.sun}
        imageStyle={styles.image}
        delegate={{onPress: onPressPlusButton}}
      />
    </View>
  );
};

export default BrightnessSlider;
