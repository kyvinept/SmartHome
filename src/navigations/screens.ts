import DevicesScreen from 'screens/devices/mainScreen';
import RoomScreen from 'screens/room/roomScreen';
import TapeScreen from 'screens/tape/UI/tapeScreen';
import AddDeviceScreen from 'screens/devices/addDeviceScreen';
import ColorPickerScreen from 'screens/common/colorPicker';
import TapeModePickerScreen from 'screens/tape/UI/tapeModePickerScreen';

export default {
  DevicesScreen: {screen: DevicesScreen, name: 'Devices'},
  RoomScreen: {screen: RoomScreen, name: 'Room'},
  TapeScreen: {screen: TapeScreen, name: 'Tape'},
  AddDeviceScreen: {screen: AddDeviceScreen, name: 'AddDevice'},
  ColorPickerScreen: {screen: ColorPickerScreen, name: 'ColorPicker'},
  TapeModePickerScreen: {
    screen: TapeModePickerScreen,
    name: 'TapeModePicker',
  },
};
