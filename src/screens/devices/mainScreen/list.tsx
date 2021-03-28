import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import styles from './styles';
import {useObserver} from 'mobx-react';
import DevicesStore from 'screens/devices/DevicesStore';
import RoomStore from 'stores/RoomStore';
import DeviceCommonStore from 'stores/DeviceCommonStore';
import RoomCell from 'components/roomCell';
import NavigationService from 'navigations/NavigationService';
import Screens from 'navigations/screens';
import DeviceCell from 'components/deviceCell';
import {DeviceModel, DeviceType} from 'screens/devices/DeviceModel';

export interface DevicesDataListProps {
  devicesStore: DevicesStore;
}

const DevicesDataList = (props: DevicesDataListProps) => {
  const devicesStore = props.devicesStore;

  const renderItem = (
    item: ListRenderItemInfo<RoomStore | DeviceCommonStore>,
  ) => {
    const store = item.item;
    const model = store.model;

    const onPressRoom = () => {
      NavigationService.push(Screens.RoomScreen.name, {roomStore: store});
    };

    switch (model.dataType) {
      case 'room':
        return (
          <RoomCell roomStore={store as RoomStore} onPress={onPressRoom} />
        );
      case 'device':
        return <DeviceCell deviceStore={store as DeviceCommonStore} />;
    }

    return <View />;
  };

  const renderContent = () => {
    return (
      <FlatList
        data={devicesStore.preparedData}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
      />
    );
  };

  return useObserver(renderContent);
};

export default DevicesDataList;
