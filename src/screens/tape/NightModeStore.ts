import {observable, decorate, action} from 'mobx';
import {NightModeModel} from './TapeModel';

export interface NightModeStoreDelegate {
  onEnable: () => void;
  onDisable: () => void;
  onChangeTime: (startTime: Date, endTime: Date) => void;
}

export default class NightModeStore {
  delegate?: NightModeStoreDelegate;

  mode: NightModeModel = {
    enabled: false,
    startTime: new Date(),
    endTime: new Date(),
  };

  constructor(startTime?: Date, endTime?: Date, enabled?: boolean) {
    if (startTime) {
      this.mode.startTime = startTime;
    }

    if (endTime) {
      this.mode.endTime = endTime;
    }

    if (enabled) {
      this.mode.enabled = enabled;
    }
  }

  toggleStatus = () => {
    this.mode.enabled = !this.mode.enabled;

    if (this.mode.enabled) {
      this.delegate?.onEnable();
    }

    if (!this.mode.enabled) {
      this.delegate?.onDisable();
    }
  };

  setStartTime = (date: Date) => {
    this.mode.startTime = date;
    this.delegate?.onChangeTime(date, this.mode.endTime);
  };

  setEndTime = (date: Date) => {
    this.mode.endTime = date;
    this.delegate?.onChangeTime(this.mode.startTime, date);
  };
}

decorate(NightModeStore, {
  mode: observable,

  toggleStatus: action,
  setStartTime: action,
  setEndTime: action,
});
