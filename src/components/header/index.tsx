import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import HeaderButton, {HeaderButtonProps} from './button';

export interface HeaderProps {
  text?: string;
  leftButtonProps?: HeaderButtonProps;
  rightButtonProps?: HeaderButtonProps;
}

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <HeaderButton {...props.leftButtonProps} />
      <Text style={styles.headerText}>{props.text}</Text>
      <HeaderButton {...props.rightButtonProps} />
    </View>
  );
};

export default Header;
