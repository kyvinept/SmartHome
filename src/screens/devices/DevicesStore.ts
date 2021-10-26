import {observable, decorate, computed} from 'mobx';
import DeviceCommonStore from 'stores/DeviceCommonStore';
import {DeviceModel, DeviceType} from './DeviceModel';
import TapeStore from 'screens/tape/TapeStore';
import RoomStore from 'stores/RoomStore';
import {DATA_TYPE} from 'constants/index';
import {ShowingModeType, TapeModel, TapeStatus} from 'screens/tape/TapeModel';
import MainStore from 'stores/MainStore';
import StorageManager, {DataType} from 'services/StorageManager';
import {RoomModel} from './RoomModel';
import {useTheme} from 'services/ThemeManager';

const theme = useTheme();

export default class DevicesStore extends MainStore {
  //   private chatsApi: DevicesApiInterface = new ChatApiService();
  onUpdateDevices = () => {
    this.saveDevicesToStore();
  };

  data: RoomStore[] = [
    new RoomStore(
      {
        dataType: DATA_TYPE.ROOM,
        name: 'Гостинная',
      },
      [
        new TapeStore({
          type: DeviceType.tape,
          dataType: DATA_TYPE.DEVICE,
          status: TapeStatus.off,
          brightness: 0.5,
          ip: '192.168.0.18',
          icon: theme.images.moon,
          color: '',
          name: 'Name',
          showingMode: {
            type: ShowingModeType.full,
          },
        }),
        new TapeStore({
          type: DeviceType.tape,
          dataType: DATA_TYPE.DEVICE,
          status: TapeStatus.off,
          brightness: 0.5,
          ip: '192.168.0.19',
          icon: theme.images.moon,
          color: '',
          name: 'New lamp',
          showingMode: {
            type: ShowingModeType.full,
          },
        }),
      ],
      this.onUpdateDevices,
    ),
    new RoomStore(
      {
        dataType: DATA_TYPE.ROOM,
        name: 'Кухня',
      },
      [
        new TapeStore({
          type: DeviceType.tape,
          dataType: DATA_TYPE.DEVICE,
          status: TapeStatus.off,
          brightness: 0.5,
          ip: '192.168.0.17',
          icon: theme.images.moon,
          color: '',
          name: 'Kitchen',
          showingMode: {
            type: ShowingModeType.full,
          },
        }),
      ],
      this.onUpdateDevices,
    ),
  ];

  constructor() {
    super();
    this.getDevicesFromStore();
  }

  private saveDevicesToStore = () => {
    const arr: (RoomModel | DeviceModel)[] = [];
    this.data.forEach((item) => {
      arr.push(item.model);
      item.devices.forEach((device) => {
        arr.push(device.model);
      });
    });

    console.log('saveDevicesToStore', JSON.stringify(arr));
    StorageManager.storeData(JSON.stringify(arr), DataType.devices);
  };

  private getDevicesFromStore = async () => {
    const devicesJson = await StorageManager.retrieveData<string>(
      DataType.devices,
    );

    if (devicesJson) {
      const devices = JSON.parse(devicesJson) as (RoomModel | DeviceModel)[];

      const rooms: RoomStore[] = [];
      for (let i = 0; i < devices.length; i++) {
        const item = devices[i];

        if (item.dataType == DATA_TYPE.ROOM) {
          const deviceStores: DeviceCommonStore[] = [];
          for (let j = i + 1; j < devices.length; j++) {
            const device = devices[j];
            if (device.dataType == DATA_TYPE.DEVICE) {
              switch (device.type) {
                case DeviceType.tape:
                  const deviceStore = new TapeStore(device as TapeModel);
                  deviceStores.push(deviceStore);
                  break;
                default:
                  break;
              }
            } else {
              i = j;
              break;
            }
          }

          rooms.push(new RoomStore(item, deviceStores, this.onUpdateDevices));
        }
      }

      this.data = rooms;
      console.log(rooms);
    }
  };

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
