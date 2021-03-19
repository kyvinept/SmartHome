import {action, observable, decorate, computed} from 'mobx';
import DeviceCommonStore from '../../stores/DeviceCommonStore';
import StorageManager, {DataType} from '../../services/StorageManager';
import {DeviceModel, DeviceType} from './DeviceModel';
import TapeStore from '../tape/TapeStore';

export default class DevicesStore {
  //   private chatsApi: DevicesApiInterface = new ChatApiService();
  devices: DeviceCommonStore[];

  constructor() {
    this.getDevicesFromStore();
  }

  private getDevicesFromStore = async () => {
    const devices = (await StorageManager.retrieveData(
      DataType.devices,
    )) as DeviceModel[];

    this.devices = devices.map((device) => {
      switch (device.type) {
        case DeviceType.tape:
          return new TapeStore(device);

        default:
          break;
      }
    });
  };
}

decorate(DevicesStore, {
  devices: observable,
});
