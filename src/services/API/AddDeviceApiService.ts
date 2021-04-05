import ApiManager, {IPType, RequestLink, RequestType} from './ApiManager';

export interface AddDeviceApiServiceInterface {
  searchNewDevice: () => Promise<string[]>;
  connectDeviceToWifi: (
    login: string,
    password: string,
    ip: string,
  ) => Promise<void>;
}

export default class AddDeviceApiService
  implements AddDeviceApiServiceInterface {
  searchNewDevice = () => {
    return ApiManager.request<{wifiList: string[]}>(
      IPType.newDevice,
      RequestType.get,
      {},
    ).then((data) => {
      return data.wifiList;
    });
  };

  connectDeviceToWifi = (login: string, password: string, ip: string) => {
    return ApiManager.request<void>(IPType.newDevice, RequestType.post, {
      requestLink: RequestLink.setting,
      body: {
        login,
        password,
        ip,
      },
    });
  };
}
