import {action, observable, decorate, computed} from 'mobx';
import DeviceCommonStore from 'stores/DeviceCommonStore';
import {DeviceType} from './DeviceModel';
import TapeStore from 'screens/tape/TapeStore';
import RoomStore from 'stores/RoomStore';
import {DATA_TYPE} from 'constants/index';
import {TapeStatus} from 'screens/tape/TapeModel';
import {Images} from 'styles';

export default class DevicesStore {
  //   private chatsApi: DevicesApiInterface = new ChatApiService();
  data: RoomStore[] = [
    new RoomStore(
      {
        dataType: DATA_TYPE.ROOM,
        name: 'Кухня',
      },
      [
        new TapeStore({
          name: 'Tape1',
          status: TapeStatus.off,
          dataType: DATA_TYPE.DEVICE,
          ip: '12.213.124124',
          icon: Images.lightTheme.settings,
          type: DeviceType.tape,
          brightness: 0.5,
          color: '#FFD700',
        }),
      ],
    ),
  ];

  constructor() {
    // this.getDevicesFromStore();
  }

  // private getDevicesFromStore = async () => {
  //   const devices = (await StorageManager.retrieveData(
  //     DataType.devices,
  //   )) as DeviceModel[];

  //   if (!devices) {
  //     return;
  //   }

  //   this.data = devices.map((device) => {
  //     switch (device.type) {
  //       case DeviceType.tape:
  //         return new TapeStore(device);

  //       default:
  //         break;
  //     }
  //   });
  // };

  get preparedData() {
    const data: (DeviceCommonStore | RoomStore)[] = [];
    this.data.forEach((item) => {
      data.push(item);
      item.devices.forEach((device) => {
        data.push(device);
      });
    });

    return data;
  }
}

decorate(DevicesStore, {
  data: observable,

  preparedData: computed,
});
