import {useContext} from 'react';
import {StoreContext} from './';
import {RootStore} from '..';
import AddDeviceStore from 'screens/devices/AddDeviceStore';
import DevicesStore from 'screens/devices/DevicesStore';

export const useStore = (): RootStore => useContext(StoreContext);
export const useAddDeviceStore = (): AddDeviceStore =>
  useStore().addDeviceStore;
export const useDevicesStore = (): DevicesStore => useStore().devicesStore;
