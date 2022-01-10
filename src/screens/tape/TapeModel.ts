import {DeviceModel, DeviceType} from 'screens/devices/DeviceModel';

export enum TapeStatus {
  on = 'on',
  off = 'off',
}

export enum ShowingModeType {
  full = 'full',
  oneByOne = 'oneByOne',
}

export interface FullShowingMode {
  type: ShowingModeType.full;
}

export interface OneByOneShowingMode {
  type: ShowingModeType.oneByOne;
}

export type ShowingMode = OneByOneShowingMode | FullShowingMode;

export interface NightModeModel {
  startTime: Date;
  endTime: Date;
  enabled: boolean;
}

export const DescriptionTypeTape = [
  'RGB lamp with tuned brightness and night mode.',
];

export interface TapeModel extends DeviceModel {
  type: DeviceType.tape;
  status: TapeStatus;
  brightness: number;
  showingMode: ShowingMode;
  color: string;
  description: string;
}
