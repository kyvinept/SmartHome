import React, {useEffect, useState} from 'react';
import {Image, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export interface HeaderButtonProps {
  text?: string;
  image?: {
    image: ImageSourcePropType;
    width: number;
    alignSelf: 'flex-start' | 'flex-end';
  };
  onPress?: () => void;
}

const HeaderButton = (props: HeaderButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      hitSlop={{
        top: 3,
        left: 3,
        right: 3,
        bottom: 3,
      }}>
      {props.text && <Text style={styles.text}>{props.text}</Text>}
      {props.image && (
        <Image
          resizeMode={'contain'}
          style={[
            styles.image,
            {width: props.image.width, alignSelf: props.image.alignSelf},
          ]}
          source={props.image.image}
        />
      )}
    </TouchableOpacity>
  );
};

export default HeaderButton;
