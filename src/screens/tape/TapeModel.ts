import {DeviceModel, DeviceType} from 'screens/devices/DeviceModel';

export enum TapeStatus {
  on = 'on',
  off = 'off',
}

export enum ShowingModeType {
  full = 'full',
  part = 'part',
}

export interface FullShowingMode {
  type: ShowingModeType.full;
}

export interface PartShowingTape {
  from: number;
  to: number;
}

export interface PartShowingMode {
  type: ShowingModeType.part;
  partShowingTape: PartShowingTape[];
}

export type ShowingMode = PartShowingMode | FullShowingMode;

export interface NightModeType {
  startTime: Date;
  endTime: Date;
}

export interface TapeModel extends DeviceModel {
  type: DeviceType.tape;
  status: TapeStatus;
  brightness: number;
  showingMode: ShowingMode;
  color: string;
  nightMode?: NightModeType;
}
