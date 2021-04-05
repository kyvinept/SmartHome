import styles from './styles';
import {useObserver} from 'mobx-react-lite';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import strings from 'translations';
import ShadowView from 'components/shadowView';
import {useTheme} from 'services/ThemeManager';

export interface WifiCellProps {
  item: string;
  delegate: {
    onPress: () => void;
  };
}

const WifiCell = (props: WifiCellProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={props.delegate.onPress}
      style={styles.cellContainer}>
      <Image style={styles.cellImage} source={theme.images.wifi} />
      <Text style={styles.cellText}>{props.item}</Text>
    </TouchableOpacity>
  );
};

export default WifiCell;
