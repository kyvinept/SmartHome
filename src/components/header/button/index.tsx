import React, {useEffect, useState} from 'react';
import {Image, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export interface HeaderButtonProps {
  text?: string;
  image?: ImageSourcePropType;
  onPress: () => void;
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
      {props.image && <Image style={styles.image} source={props.image} />}
    </TouchableOpacity>
  );
};

export default HeaderButton;
