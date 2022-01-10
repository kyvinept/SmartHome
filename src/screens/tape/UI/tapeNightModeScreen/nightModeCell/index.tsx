import Switch from 'components/switch';
import {useObserver} from 'mobx-react';
import React from 'react';
import {Text, View} from 'react-native';
import NightModeStore from 'screens/tape/NightModeStore';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import ContextMenu from 'react-native-context-menu-view';

export interface NightModeCellProps {
  store: NightModeStore;
  index: number;
  delegate: {
    onDelete: () => void;
  };
}

const NightModeCell = (props: NightModeCellProps) => {
  const nightModeStore = props.store;

  const renderDateTimePicker = (
    value: Date,
    onChange: (evt: Event, date?: Date) => void,
  ) => {
    return (
      <View style={styles.datePickerContainer}>
        <DateTimePicker
          value={value}
          mode="time"
          is24Hour={true}
          onChange={onChange}
        />
      </View>
    );
  };

  const renderCell = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.index}>#{props.index + 1}</Text>
        {renderDateTimePicker(
          nightModeStore.mode.startTime,
          (event, date) => date && nightModeStore.setStartTime(date),
        )}
        {renderDateTimePicker(
          nightModeStore.mode.endTime,
          (event, date) => date && nightModeStore.setEndTime(date),
        )}
        <Switch
          isEnabled={nightModeStore.mode.enabled}
          delegate={{onValueChange: nightModeStore.toggleStatus}}
        />
      </View>
    );
  };

  const renderContainer = () => {
    return (
      <ContextMenu
        actions={[{title: 'Delete'}]}
        onPress={props.delegate.onDelete}>
        {renderCell()}
      </ContextMenu>
    );
  };

  return useObserver(() => {
    return renderContainer();
  });
};

export default NightModeCell;
