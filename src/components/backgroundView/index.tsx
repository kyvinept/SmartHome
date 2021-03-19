import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Header, {HeaderProps} from '../header';
import styles from './styles';

export interface BackgroundViewProps {
  header?: HeaderProps;
}

const BackgroundView = (props: BackgroundViewProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header {...props.header} />
    </SafeAreaView>
  );
};

export default BackgroundView;
