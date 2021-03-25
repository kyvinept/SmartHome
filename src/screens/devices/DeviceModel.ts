import {ImageSourcePropType} from 'react-native';
import {DATA_TYPE} from 'constants/index';

export enum DeviceType {
  tape,
}

export interface DeviceModel {
  dataType: DATA_TYPE.DEVICE;
  type: DeviceType;
  ip: string;
  icon: ImageSourcePropType;
  name: string;
}
