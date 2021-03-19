import {useContext} from 'react';
import {StoreContext} from './';
import {RootStore} from '..';

export const useStore = (): RootStore => useContext(StoreContext);
