import {action, observable, decorate, computed} from 'mobx';
import {DeviceModel} from 'screens/devices/DeviceModel';
import MainStore from './MainStore';

export default class DeviceCommonStore extends MainStore {
  model: DeviceModel;

  constructor(model: DeviceModel) {
    super();
    this.model = model;
  }
}

decorate(DeviceCommonStore, {
  model: observable,
});
