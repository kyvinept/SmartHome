import {action, observable, decorate, computed} from 'mobx';
import {TapeModel, TapeStatus} from './TapeModel';
import DeviceCommonStore from 'stores/DeviceCommonStore';

export default class TapeStore extends DeviceCommonStore {
  model: TapeModel;

  constructor(model: TapeModel) {
    super(model);
    this.model = model;
  }

  toggleStatus = () => {
    this.model.status =
      this.model.status == TapeStatus.on ? TapeStatus.off : TapeStatus.on;
  };

  onChangeBrightness = (value: number) => {
    this.model.brightness = value;
  };

  onChangeColor = (color: string) => {
    this.model.color = color;
  };
}

decorate(TapeStore, {
  model: observable,

  toggleStatus: action,
  onChangeBrightness: action,
  onChangeColor: action,
});
