import {action, observable, decorate, computed} from 'mobx';
import {
  DescriptionTypeTape,
  ShowingMode,
  ShowingModeType,
  TapeModel,
  TapeStatus,
} from './TapeModel';
import DeviceCommonStore from 'stores/DeviceCommonStore';
import TapeApiService, {
  TapeApiServiceInterface,
} from 'services/API/TapeApiService';
import {prepareColor} from 'helpers/prepareColor';
import {clearTimezone, setTimezone} from 'helpers/timezone';
import NightModeStore from './NightModeStore';

export enum TapeStoreState {
  noConnection,
  waiting,
  ok,
}

export default class TapeStore extends DeviceCommonStore {
  private apiService: TapeApiServiceInterface = new TapeApiService();

  model: TapeModel;
  nightModes: NightModeStore[] = [];
  tapeState = TapeStoreState.noConnection;

  constructor(model: TapeModel) {
    super(model);
    this.model = model;

    this.checkConnection();
  }

  get enabledToCreateNewNightMode() {
    return this.nightModes.length < 2;
  }

  toggleStatus = async () => {
    if (this.model.status === TapeStatus.on) {
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
      console.log('checkConnection', networkTapeModel);

      this.model.brightness = networkTapeModel.b;
      this.model.description = DescriptionTypeTape[networkTapeModel.t];
      this.model.color = networkTapeModel.c;
      this.model.status =
        networkTapeModel.is === 'true' ? TapeStatus.on : TapeStatus.off;

      if (networkTapeModel.nm && networkTapeModel.nm !== '') {
        const nightModeTimes = networkTapeModel.nm.split(',');

        for (let index = 0; index < nightModeTimes.length; index += 5) {
          let startTime = new Date();
          startTime.setHours(parseInt(nightModeTimes[index]));
          startTime.setMinutes(parseInt(nightModeTimes[index + 1]));
          startTime = setTimezone(startTime);

          let endTime = new Date();
          endTime.setHours(parseInt(nightModeTimes[index + 2]));
          endTime.setMinutes(parseInt(nightModeTimes[index + 3]));
          endTime = setTimezone(endTime);

          const enabled = parseInt(nightModeTimes[index + 4]);

          this.addNightMode(startTime, endTime, !!enabled);
        }
      }

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
    this.model.color = color;
    this.apiService.setColor(this.model.ip, prepareColor(color));
  };

  onChangeMode = async (mode: ShowingMode) => {
    if (this.model.showingMode.type !== mode.type) {
      this.model.showingMode = mode;

      switch (mode.type) {
        case ShowingModeType.full:
          this.apiService.fullModeEnable(this.model.ip);
          break;
        case ShowingModeType.oneByOne:
          this.apiService.oneByOneModeEnable(this.model.ip);
          break;
      }
    }
  };

  onDeleteNightMode = (index: number) => {
    let nightModesCopy = [...this.nightModes];
    nightModesCopy.splice(index, 1);
    this.nightModes = nightModesCopy;

    this.clearNightMode(index);
  };

  clearNightMode = (index: number) => {
    this.apiService.clearNightMode(this.model.ip, index);
  };

  addNightMode = (startTime?: Date, endTime?: Date, enabled?: boolean) => {
    let nightModesCopy = [...this.nightModes];
    const index = nightModesCopy.length;

    const nightMode = new NightModeStore(startTime, endTime, enabled);
    nightMode.delegate = {
      onEnable: () => {
        this.apiService.nightModeEnable(this.model.ip, index);
      },
      onDisable: () => {
        this.apiService.nightModeDisable(this.model.ip, index);
      },
      onChangeTime: (changedStartTime, changedEndTime) => {
        this.apiService.changeTime(
          this.model.ip,
          clearTimezone(changedStartTime),
          clearTimezone(changedEndTime),
          index,
        );
      },
    };

    nightModesCopy.push(nightMode);
    this.nightModes = nightModesCopy;
  };

  onAddNightMode = () => {
    this.apiService.setNightMode(
      this.model.ip,
      clearTimezone(new Date()),
      clearTimezone(new Date()),
    );

    this.addNightMode();
  };
}

decorate(TapeStore, {
  model: observable,
  tapeState: observable,
  nightModes: observable,

  enabledToCreateNewNightMode: computed,

  checkConnection: action,
  toggleStatus: action,
  clearNightMode: action,
  onChangeBrightness: action,
  onChangeColor: action,
  onDeleteNightMode: action,
  onChangeMode: action,
  addNightMode: action,
});
