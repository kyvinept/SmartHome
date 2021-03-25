import {action, observable, decorate, computed} from 'mobx';
import {TapeModel} from './TapeModel';
import DeviceCommonStore from 'stores/DeviceCommonStore';

export default class TapeStore extends DeviceCommonStore {
  model: TapeModel;

  constructor(model: TapeModel) {
    super(model);
    this.model = model;
  }
}

decorate(TapeStore, {
  model: observable,
});
