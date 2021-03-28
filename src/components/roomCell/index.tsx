import React, {useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'services/ThemeManager';
import RoomStore from 'stores/RoomStore';
import styles from './styles';

export interface RoomCellProps {
  roomStore: RoomStore;
  onPress: () => void;
}

const RoomCell = (props: RoomCellProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.roomStore.model.name}</Text>
      <Image
        style={styles.image}
        resizeMode={'contain'}
        source={theme.images.rightArrow}
      />
    </TouchableOpacity>
  );
};

export default RoomCell;
