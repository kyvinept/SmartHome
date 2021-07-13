import {
  ShowingModeType,
  ShowingMode,
  PartShowingMode,
} from 'screens/tape/TapeModel';
import ApiManager, {IPType, RequestLink, RequestType} from './ApiManager';
import {NetworkTapeModel} from 'screens/tape/NetworkTapeModel';

export interface TapeApiServiceInterface {
  on: (ip: string) => Promise<void>;
  off: (ip: string) => Promise<void>;
  setBrightness: (ip: string, value: number) => Promise<void>;
  setColor: (ip: string, value: string) => Promise<void>;
  setMode: (ip: string, mode: ShowingMode) => Promise<void>;
  getSettings: (ip: string) => Promise<NetworkTapeModel>;
  clearNightMode: (ip: string) => Promise<void>;
  setNightMode: (ip: string, startTime: Date, endTime: Date) => Promise<void>;
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
    console.log(
      'setNightMode',
      startTime.getHours(),
      startTime.getMinutes(),
      endTime.getHours(),
      endTime.getMinutes(),
    );

    return ApiManager.request<void>(ip, RequestType.post, {
      requestLink: RequestLink.setNightMode,
      body: {
        startHours: startTime.getHours(),
        startMinutes: startTime.getMinutes(),
        startSeconds: 0,
        endHours: endTime.getHours(),
        endMinutes: endTime.getMinutes(),
        endSeconds: 0,
      },
    });
  };

  clearNightMode = (ip: string) => {
    return ApiManager.request<void>(ip, RequestType.get, {
      requestLink: RequestLink.clearNightMode,
    });
  };

  getSettings = (ip: string) => {
    return ApiManager.request<NetworkTapeModel>(ip, RequestType.get, {
      requestLink: RequestLink.home,
    }).then((model) => {
      return {
        ...model,
        brightness: parseInt(model.brightness || (50 as any)) / 100,
        color: '#' + (model.color || 'OxFFFFFF').substring(2),
      };
    });
  };

  setMode = (ip: string, mode: ShowingMode) => {
    let body: any = {
      mode: mode.type,
    };

    switch (mode.type) {
      case ShowingModeType.part:
        const preparedArray: number[] = [];

        (mode as PartShowingMode).partShowingTape.forEach((item) => {
          preparedArray.push(item.from);
          preparedArray.push(item.to);
        });

        body.values = preparedArray;
        break;

      default:
        break;
    }

    return ApiManager.request<void>(ip, RequestType.post, {
      requestLink: RequestLink.settings,
      body,
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
