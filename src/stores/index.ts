import AddDeviceStore from 'screens/devices/AddDeviceStore';
import DevicesStore from 'screens/devices/DevicesStore';
import ColorsStore from './ColorsStore';

export class RootStore {
  addDeviceStore: AddDeviceStore;
  devicesStore: DevicesStore;
  colorsStore: ColorsStore;

  constructor() {
    this.devicesStore = new DevicesStore();
    this.addDeviceStore = new AddDeviceStore(this.devicesStore);
    this.colorsStore = new ColorsStore();
  }
}

const stores = new RootStore();
export default stores;
