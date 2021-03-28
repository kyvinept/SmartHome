import NavigationService from 'navigations/NavigationService';
import Screens from 'navigations/screens';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {DeviceType} from 'screens/devices/DeviceModel';
import TapeStore from 'screens/tape/TapeStore';
import TapeCell, {TapeCellProps} from 'screens/tape/UI/tapeCell';
import DeviceCommonStore from 'stores/DeviceCommonStore';
import styles from './styles';

export interface DeviceCellProps {
  deviceStore: DeviceCommonStore;
}

const DeviceCell = (props: DeviceCellProps) => {
  switch (props.deviceStore.model.type) {
    case DeviceType.tape:
      const tapeCellProps: TapeCellProps = {
        tapeStore: props.deviceStore as TapeStore,
      };

      return <TapeCell {...tapeCellProps} />;

    default:
      return <View />;
  }
};

export default DeviceCell;
