import React from 'react';
import {Image, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export interface ModeCellProps {
  image: ImageSourcePropType;
  text: string;
  isLeft: boolean;
  isActive: boolean;
  delegate: {
    onPress: () => void;
  };
}

const ModeCell = (props: ModeCellProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.isLeft ? styles.containerLeft : styles.containerRight,
        props.isActive ? styles.activeContainer : styles.defaultContainer,
      ]}
      onPress={props.delegate.onPress}>
      <Image source={props.image} style={styles.image} />
      <Text
        style={[
          styles.text,
          props.isActive ? styles.activeText : styles.defaultText,
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ModeCell;
