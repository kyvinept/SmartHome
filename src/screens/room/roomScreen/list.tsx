import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import styles from './styles';
import {useObserver} from 'mobx-react';
import DeviceCommonStore from 'stores/DeviceCommonStore';
import DeviceCell from 'components/deviceCell';

export interface RoomDetailsListProps {
  data: DeviceCommonStore[];
}

const RoomDetailsList = (props: RoomDetailsListProps) => {
  const renderItem = (item: ListRenderItemInfo<DeviceCommonStore>) => {
    return <DeviceCell deviceStore={item.item} />;
  };

  const renderContent = () => {
    return (
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
      />
    );
  };

  return useObserver(renderContent);
};

export default RoomDetailsList;
