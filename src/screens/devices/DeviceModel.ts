export enum DeviceType {
  tape,
}

export interface DeviceModel {
  type: DeviceType;
  ip: string;
}
