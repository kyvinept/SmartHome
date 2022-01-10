import ApiManager, {RequestLink, RequestType} from './ApiManager';
import {NetworkTapeModel} from 'screens/tape/NetworkTapeModel';

export interface TapeApiServiceInterface {
  on: (ip: string) => Promise<void>;
  off: (ip: string) => Promise<void>;
  setBrightness: (ip: string, value: number) => Promise<void>;
  setColor: (ip: string, value: string) => Promise<void>;
  getSettings: (ip: string) => Promise<NetworkTapeModel>;
  clearNightMode: (ip: string, index: number) => Promise<void>;
  setNightMode: (ip: string, startTime: Date, endTime: Date) => Promise<void>;
  changeTime: (
    ip: string,
    startTime: Date,
    endTime: Date,
    index: number,
  ) => Promise<void>;
  oneByOneModeEnable: (ip: string) => Promise<void>;
  fullModeEnable: (ip: string) => Promise<void>;
  nightModeEnable: (ip: string, index: number) => Promise<void>;
  nightModeDisable: (ip: string, index: number) => Promise<void>;
}

export default class TapeApiService implements TapeApiServiceInterface {
  on = (ip: string) => {
    return ApiManager.request<void>(ip, RequestType.get, {
      requestLink: RequestLink.on,
    });
  };

  off = (ip: string) => {
    return ApiManager.request<void>(ip, RequestType.get, {
      requestLink: RequestLink.off,
    });
  };

  setNightMode = (ip: string, startTime: Date, endTime: Date) => {
    return ApiManager.request<void>(ip, RequestType.post, {
      requestLink: RequestLink.setNightMode,
      body: {
        startHours: startTime.getHours(),
        startMinutes: startTime.getMinutes(),
        endHours: endTime.getHours(),
        endMinutes: endTime.getMinutes(),
      },
    });
  };

  changeTime = (ip: string, startTime: Date, endTime: Date, index: number) => {
    return ApiManager.request<void>(ip, RequestType.post, {
      requestLink: RequestLink.changeTime,
      body: {
        index,
        sh: startTime.getHours(),
        sm: startTime.getMinutes(),
        eh: endTime.getHours(),
        em: endTime.getMinutes(),
      },
    });
  };

  clearNightMode = (ip: string, index: number) => {
    return ApiManager.request<void>(ip, RequestType.post, {
      requestLink: RequestLink.clearNightMode,
      body: {
        index,
      },
    });
  };

  nightModeEnable = (ip: string, index: number) => {
    return ApiManager.request<void>(ip, RequestType.post, {
      requestLink: RequestLink.nightModeEnable,
      body: {
        index,
      },
    });
  };

  nightModeDisable = (ip: string, index: number) => {
    return ApiManager.request<void>(ip, RequestType.post, {
      requestLink: RequestLink.nightModeDisable,
      body: {
        index,
      },
    });
  };

  getSettings = (ip: string) => {
    return ApiManager.request<NetworkTapeModel>(ip, RequestType.get, {
      requestLink: RequestLink.home,
    }).then((model) => {
      return {
        ...model,
        b: parseInt(model.b || (50 as any)) / 100,
        c: '#' + (model.c || 'OxFFFFFF').substring(2),
        t: parseInt(model.t || '0'),
      };
    });
  };

  oneByOneModeEnable = (ip: string) => {
    return ApiManager.request<void>(ip, RequestType.get, {
      requestLink: RequestLink.oneByOneModeEnable,
    });
  };

  fullModeEnable = (ip: string) => {
    return ApiManager.request<void>(ip, RequestType.get, {
      requestLink: RequestLink.fullModeEnable,
    });
  };

  setBrightness = (ip: string, value: number) => {
    return ApiManager.request<void>(ip, RequestType.post, {
      requestLink: RequestLink.brightness,
      body: {
        value: value * 100,
      },
    });
  };

  setColor = (ip: string, value: string) => {
    return ApiManager.request<void>(ip, RequestType.post, {
      requestLink: RequestLink.color,
      body: {
        value,
      },
    });
  };
}
