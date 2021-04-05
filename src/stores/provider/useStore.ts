import {useContext} from 'react';
import {StoreContext} from './';
import {RootStore} from '..';
import AddDeviceStore from 'screens/devices/AddDeviceStore';
import DevicesStore from 'screens/devices/DevicesStore';
import ColorsStore from 'stores/ColorsStore';

export const useStore = (): RootStore => useContext(StoreContext);
export const useAddDeviceStore = (): AddDeviceStore =>
  useStore().addDeviceStore;
export const useDevicesStore = (): DevicesStore => useStore().devicesStore;
export const useColorsStore = (): ColorsStore => useStore().colorsStore;
