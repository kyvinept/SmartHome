import AddDeviceStore from 'screens/devices/AddDeviceStore';
import DevicesStore from 'screens/devices/DevicesStore';

export class RootStore {
  addDeviceStore: AddDeviceStore;
  devicesStore: DevicesStore;

  constructor() {
    this.devicesStore = new DevicesStore();
    this.addDeviceStore = new AddDeviceStore(this.devicesStore);
  }
}

const stores = new RootStore();
export default stores;
