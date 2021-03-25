import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {DeviceType} from 'screens/devices/DeviceModel';
import TapeStore from 'screens/tape/TapeStore';
import TapeCell, {TapeCellProps} from 'screens/tape/UI/tapeCell';
import DeviceCommonStore from 'stores/DeviceCommonStore';
import styles from './styles';

export interface DeviceCellProps {
  deviceStore: DeviceCommonStore;
  onPress: () => void;
}

const DeviceCell = (props: DeviceCellProps) => {
  switch (props.deviceStore.model.type) {
    case DeviceType.tape:
      const tapeCellProps: TapeCellProps = {
        tapeStore: props.deviceStore as TapeStore,
        onPress: props.onPress,
      };

      return <TapeCell {...tapeCellProps} />;

    default:
      return <View />;
  }
};

export default DeviceCell;
