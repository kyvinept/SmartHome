import ShadowView from 'components/shadowView';
import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export interface TapeInfoProps {
  description: string;
}

const TapeInfo = (props: TapeInfoProps) => {
  return (
    <ShadowView containerStyle={styles.container}>
      <Text style={styles.text}>{props.description}</Text>
    </ShadowView>
  );
};

export default TapeInfo;
