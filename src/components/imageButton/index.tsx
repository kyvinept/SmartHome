import styles from './styles';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';

export interface ImageButtonProps {
  source: ImageSourcePropType;
  imageStyle: StyleProp<ImageStyle>;
  delegate: {
    onPress: () => void;
  };
}

const ImageButton = (props: ImageButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.delegate.onPress}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}>
      <Image source={props.source} style={props.imageStyle} />
    </TouchableOpacity>
  );
};

export default ImageButton;
