import {DeviceModel, DeviceType} from '../devices/DeviceModel';

export interface TapeModel extends DeviceModel {
  type: DeviceType.tape;
}
