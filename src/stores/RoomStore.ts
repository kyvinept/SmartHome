import {action, observable, decorate, computed} from 'mobx';
import {RoomModel} from 'screens/devices/RoomModel';
import DeviceCommonStore from './DeviceCommonStore';

export default class RoomStore {
  //   private chatsApi: DevicesApiInterface = new ChatApiService();
  model: RoomModel;
  devices: DeviceCommonStore[];

  constructor(room: RoomModel, devices: DeviceCommonStore[]) {
    this.model = room;
    this.devices = devices;
  }
}

decorate(RoomStore, {
  model: observable,
  devices: observable,
});
