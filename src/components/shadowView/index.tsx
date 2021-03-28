import React, {useState} from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';

export interface ShadowViewProps {
  children?: JSX.Element | JSX.Element[];
  containerStyle?: ViewStyle;
}

const ShadowView = (props: ShadowViewProps) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.children}
    </View>
  );
};

export default ShadowView;
