import {DATA_TYPE} from '../../constants';
import {action, observable, decorate, computed} from 'mobx';
import TapeStore from 'screens/tape/TapeStore';
import AddDeviceApiService, {
  AddDeviceApiServiceInterface,
} from 'services/API/AddDeviceApiService';
import {useTheme} from 'services/ThemeManager';
import MainStore from 'stores/MainStore';
import RoomStore from 'stores/RoomStore';
import {DeviceType} from './DeviceModel';
import DevicesStore from './DevicesStore';
import {ShowingModeType, TapeStatus} from 'screens/tape/TapeModel';
import AlertHelper from 'helpers/AlertHelper';
import strings from 'translations';

const theme = useTheme();

export default class AddDeviceStore extends MainStore {
  private addDeviceApiService: AddDeviceApiServiceInterface = new AddDeviceApiService();

  devicesStore: DevicesStore;
  selectedRoomIndex?: number;
  _selectedRoomIndexError?: string;
  selectedIconIndex?: number;
  _selectedIconIndexError?: string;
  selectedName?: string;
  _selectedNameError?: string;

  detectedNewDevice: boolean = false;

  _availableWifiList: string[] = [];
  _isDeviceReadyForConnecting = false;
  _selectedWifi: string | undefined;
  _selectedWifiPassword: string | undefined;
  _isWifiConnected = false;
  _deviceIP = '192.168.0.18';

  constructor(devicesStore: DevicesStore) {
    super();
    this.devicesStore = devicesStore;
    // setTimeout(() => {
    //   this.detectedNewDevice = true;
    // }, 2000);
  }

  get rooms() {
    return this.devicesStore.data.map((item, index) => ({
      text: item.model.name,
      selected: this.selectedRoomIndex == index,
    }));
  }

  get icons() {
    const ourIcons = [
      theme.images.moon,
      theme.images.sun,
      theme.images.moon,
      theme.images.sun,
      theme.images.moon,
      theme.images.sun,
      theme.images.moon,
      theme.images.sun,
      theme.images.moon,
      theme.images.sun,
    ];

    return ourIcons.map((item, index) => {
      return {icon: item, selected: index == this.selectedIconIndex};
    });
  }

  cancelAddingNewDevice = () => {
    this.detectedNewDevice = false;
  };

  onSelectRoom = (roomStore: RoomStore) => {
    this.devicesStore.data.forEach((room, index) => {
      if (room.model.name == roomStore.model.name) {
        this.selectedRoomIndex = index;
        return;
      }
    });
  };

  onSelectRoomByIndex = (index: number) => {
    this.selectedRoomIndex = index;
  };

  onSelectIcon = (index: number) => {
    this.selectedIconIndex = index;
  };

  searchForNewDevice = () => {
    this._inProgress = true;

    this.addDeviceApiService
      .searchNewDevice()
      .then((wifiList) => {
        this._availableWifiList = wifiList;
        this._isDeviceReadyForConnecting = true;
        console.log(wifiList);
      })
      .catch((err) => {
        this._isDeviceReadyForConnecting = false;
      })
      .finally(() => {
        this._inProgress = false;
      });
  };

  connectDeviceToWifi = () => {
    this._selectedWifi &&
      this._selectedWifiPassword &&
      this.addDeviceApiService
        .connectDeviceToWifi(
          this._selectedWifi,
          this._selectedWifiPassword,
          this._deviceIP,
        )
        .then(() => {
          console.log('connectDeviceToWifi then');
          this._isWifiConnected = true;
        })
        .catch((err) => {
          console.log('connectDeviceToWifi err', err);
        });
  };

  onChangeName = (name: string) => {
    this.selectedName = name;
  };

  onSelectWifi = (wifi: string | undefined) => {
    this._selectedWifi = wifi;
  };

  onPasswordChanged = (password: string) => {
    this._selectedWifiPassword = password;
  };

  onAddDevice = () => {
    if (!this._isWifiConnected) {
      AlertHelper.showErrorAlert(strings.pleaseConnectToWifi);
      return;
    }

    if ((this.selectedName?.length || 0) <= 3) {
      this._selectedNameError = 'Error name';
      return;
    }

    if (this.selectedIconIndex == undefined) {
      this._selectedIconIndexError = 'Error icon';
      return;
    }

    if (this.selectedRoomIndex == undefined) {
      this._selectedRoomIndexError = 'Error room';
      return;
    }

    return new Promise<void>((resolve, reject) => {
      if (
        this.selectedRoomIndex != undefined &&
        this.selectedIconIndex != undefined &&
        this.selectedName != undefined
      ) {
        const tape: TapeStore = new TapeStore({
          type: DeviceType.tape,
          dataType: DATA_TYPE.DEVICE,
          status: TapeStatus.off,
          brightness: 0.5,
          ip: this._deviceIP,
          icon: this.icons[this.selectedIconIndex].icon,
          color: '',
          name: this.selectedName,
          showingMode: {
            type: ShowingModeType.full,
          },
        });

        this.devicesStore.data[this.selectedRoomIndex].addDevice(tape);
        resolve();
      } else {
        reject();
      }
    });
  };
}

decorate(AddDeviceStore, {
  detectedNewDevice: observable,
  selectedRoomIndex: observable,
  selectedIconIndex: observable,
  selectedName: observable,
  _availableWifiList: observable,
  _isDeviceReadyForConnecting: observable,
  _selectedWifi: observable,
  _selectedWifiPassword: observable,
  _isWifiConnected: observable,

  rooms: computed,
  icons: computed,

  cancelAddingNewDevice: action,
  onSelectRoom: action,
  onSelectRoomByIndex: action,
  onSelectIcon: action,
  searchForNewDevice: action,
  onSelectWifi: action,
  onPasswordChanged: action,
  connectDeviceToWifi: action,
  onAddDevice: action,
});
