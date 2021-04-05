import {action, observable, decorate, computed, reaction} from 'mobx';
import {RoomModel} from 'screens/devices/RoomModel';
import DeviceCommonStore from './DeviceCommonStore';
import MainStore from './MainStore';

export default class RoomStore extends MainStore {
  //   private chatsApi: DevicesApiInterface = new ChatApiService();
  model: RoomModel;
  devices: DeviceCommonStore[];

  constructor(
    room: RoomModel,
    devices: DeviceCommonStore[],
    onUpdateDevices: () => void,
  ) {
    super();
    this.model = room;
    this.devices = devices;

    reaction(
      () => this.devices.length,
      () => {
        console.log('reaction roomstore', this.devices.length);
        onUpdateDevices();
      },
    );
  }

  addDevice = (device: DeviceCommonStore) => {
    const devices = [...this.devices];
    devices.push(device);
    this.devices = devices;
  };
}

decorate(RoomStore, {
  model: observable,
  devices: observable,

  addDevice: action,
});
