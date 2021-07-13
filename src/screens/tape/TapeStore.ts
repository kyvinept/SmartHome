import {action, observable, decorate, computed} from 'mobx';
import {ShowingMode, TapeModel, TapeStatus} from './TapeModel';
import DeviceCommonStore from 'stores/DeviceCommonStore';
import TapeApiService, {
  TapeApiServiceInterface,
} from 'services/API/TapeApiService';
import {prepareColor} from 'helpers/prepareColor';

export enum TapeStoreState {
  noConnection,
  waiting,
  ok,
}

export default class TapeStore extends DeviceCommonStore {
  private apiService: TapeApiServiceInterface = new TapeApiService();

  model: TapeModel;
  tapeState = TapeStoreState.noConnection;

  constructor(model: TapeModel) {
    super(model);
    this.model = model;

    this.checkConnection();
  }

  toggleStatus = async () => {
    if (this.model.status == TapeStatus.on) {
      await this.apiService.off(this.model.ip);
      this.model.status = TapeStatus.off;
    } else {
      await this.apiService.on(this.model.ip);
      this.model.status = TapeStatus.on;
    }
  };

  checkConnection = async () => {
    try {
      this.tapeState = TapeStoreState.waiting;
      const networkTapeModel = await this.apiService.getSettings(this.model.ip);
      this.model.brightness = networkTapeModel.brightness;
      this.model.color = networkTapeModel.color;
      console.log(networkTapeModel);

      this.tapeState = TapeStoreState.ok;
    } catch (error) {
      this.tapeState = TapeStoreState.noConnection;
    }
  };

  onChangeBrightness = async (value: number) => {
    this.model.brightness = value;
    this.apiService.setBrightness(this.model.ip, value);
  };

  onChangeColor = async (color: string) => {
    console.log(color);
    this.model.color = color;
    this.apiService.setColor(this.model.ip, prepareColor(color));
  };

  onChangeMode = async (mode: ShowingMode) => {
    if (this.model.showingMode.type != mode.type) {
      this.model.showingMode = mode;
      this.apiService.setMode(this.model.ip, this.model.showingMode);
    }
  };

  setNightMode = (startTime: Date, endTime: Date) => {
    this.model.nightMode = {startTime, endTime};
    this.apiService.setNightMode(this.model.ip, startTime, endTime);
  };

  clearNightMode = () => {
    this.model.nightMode = undefined;
    this.apiService.clearNightMode(this.model.ip);
  };
}

decorate(TapeStore, {
  model: observable,
  tapeState: observable,

  checkConnection: action,
  toggleStatus: action,
  onChangeBrightness: action,
  onChangeColor: action,
  onChangeMode: action,
  clearNightMode: action,
  setNightMode: action,
});
