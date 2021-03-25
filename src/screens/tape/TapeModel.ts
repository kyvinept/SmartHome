import {DeviceModel, DeviceType} from '../devices/DeviceModel';

export enum TapeStatus {
  on = 'on',
  off = 'off',
}

export interface TapeModel extends DeviceModel {
  type: DeviceType.tape;
  status: TapeStatus;
}
