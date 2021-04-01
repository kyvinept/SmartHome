import {action, observable, decorate, computed} from 'mobx';
import {ImageSourcePropType} from 'react-native';
import {useTheme} from 'services/ThemeManager';
import MainStore from 'stores/MainStore';
import RoomStore from 'stores/RoomStore';
import DevicesStore from './DevicesStore';

const theme = useTheme();

export default class AddDeviceStore extends MainStore {
  //   private chatsApi: DevicesApiInterface = new ChatApiService();
  devicesStore: DevicesStore;
  selectedRoomIndex?: number;
  selectedIconIndex?: number;

  detectedNewDevice: boolean = false;

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
    console.log('TODO: searchForNewDevice');

    setTimeout(() => {
      this._inProgress = false;
    }, 5000);
  };
}

decorate(AddDeviceStore, {
  detectedNewDevice: observable,
  selectedRoomIndex: observable,
  selectedIconIndex: observable,

  rooms: computed,
  icons: computed,

  cancelAddingNewDevice: action,
  onSelectRoom: action,
  onSelectRoomByIndex: action,
  onSelectIcon: action,
  searchForNewDevice: action,
});
