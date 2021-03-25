import {action, observable, decorate, computed} from 'mobx';
import {DeviceModel} from 'screens/devices/DeviceModel';

export default class DeviceCommonStore {
  model: DeviceModel;

  constructor(model: DeviceModel) {
    this.model = model;
  }
}

decorate(DeviceCommonStore, {
  model: observable,
});
