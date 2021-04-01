import {action, observable, decorate, computed} from 'mobx';
import {RoomModel} from 'screens/devices/RoomModel';
import DeviceCommonStore from './DeviceCommonStore';
import MainStore from './MainStore';

export default class RoomStore extends MainStore {
  //   private chatsApi: DevicesApiInterface = new ChatApiService();
  model: RoomModel;
  devices: DeviceCommonStore[];

  constructor(room: RoomModel, devices: DeviceCommonStore[]) {
    super();
    this.model = room;
    this.devices = devices;
  }
}

decorate(RoomStore, {
  model: observable,
  devices: observable,
});
