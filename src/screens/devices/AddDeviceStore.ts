import {action, observable, decorate, computed} from 'mobx';

export default class AddDeviceStore {
  //   private chatsApi: DevicesApiInterface = new ChatApiService();
  detectedNewDevice: boolean = false;
  server: any;

  constructor() {
    // setTimeout(() => {
    //   this.detectedNewDevice = true;
    // }, 2000);
  }

  cancelAddingNewDevice = () => {
    this.detectedNewDevice = false;
  };
}

decorate(AddDeviceStore, {
  detectedNewDevice: observable,

  cancelAddingNewDevice: action,
});
