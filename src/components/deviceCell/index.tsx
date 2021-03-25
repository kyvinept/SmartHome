import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {DeviceModel, DeviceType} from '../../screens/devices/DeviceModel';
import {TapeModel} from '../../screens/tape/TapeModel';
import TapeCell, {TapeCellProps} from '../../screens/tape/UI/tapeCell';
import styles from './styles';

export interface DeviceCellProps {
  device: DeviceModel;
  onPress: () => void;
}

const DeviceCell = (props: DeviceCellProps) => {
  switch (props.device.type) {
    case DeviceType.tape:
      const tapeCellProps: TapeCellProps = {
        tape: props.device as TapeModel,
        onPress: props.onPress,
      };

      return <TapeCell {...tapeCellProps} />;

    default:
      return <View />;
  }
};

export default DeviceCell;
