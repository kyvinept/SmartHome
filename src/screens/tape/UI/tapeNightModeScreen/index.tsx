import ShadowView from 'components/shadowView';
import {useObserver} from 'mobx-react-lite';
import NavigationService from 'navigations/NavigationService';
import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, View, TextInput, Text} from 'react-native';
import {useTheme} from 'services/ThemeManager';
import strings from 'translations';
import styles from './styles';
import TapeStore from 'screens/tape/TapeStore';
import RedButton from 'components/redButton';
import {PartShowingTape, ShowingModeType} from '../../TapeModel';
import DateTimePicker from '@react-native-community/datetimepicker';
import AlertHelper from 'helpers/AlertHelper';

export interface TapeNightModeScreenProps {
  navigation: {
    state: {
      params: {
        tapeStore: TapeStore;
      };
    };
  };
}

enum DisplayingTime {
  start,
  end,
}

const TapeNightModeScreen = (props: TapeNightModeScreenProps) => {
  const tapeStore = props.navigation.state.params.tapeStore;

  const [startTime, setStartTime] = useState<Date | undefined>(
    tapeStore.model.nightMode?.startTime,
  );
  const [endTime, setEndTime] = useState<Date | undefined>(
    tapeStore.model.nightMode?.endTime,
  );
  const [displayingTime, setDisplayingTime] = useState<
    DisplayingTime | undefined
  >();

  const dismiss = () => {
    NavigationService.dismiss();
  };

  const onPressStartTimeButton = () => {
    if (displayingTime == DisplayingTime.start) setDisplayingTime(undefined);
    else setDisplayingTime(DisplayingTime.start);
  };

  const onChangeStartTime = (evt: Event, date?: Date) => {
    if (date) setStartTime(date);
  };

  const onPressEndTimeButton = () => {
    if (displayingTime == DisplayingTime.end) setDisplayingTime(undefined);
    else setDisplayingTime(DisplayingTime.end);
  };

  const onChangeEndTime = (evt: Event, date?: Date) => {
    if (date) setEndTime(date);
  };

  const renderDateTimePicker = (
    value: Date,
    onChange: (evt: Event, date?: Date) => void,
  ) => {
    return (
      <DateTimePicker
        value={value}
        mode="time"
        is24Hour={true}
        display="spinner"
        onChange={onChange}
      />
    );
  };

  const renderTimeButtons = () => {
    return (
      <>
        <RedButton
          text={
            'Start time' +
            (startTime
              ? ': ' + startTime.getHours() + ':' + startTime.getMinutes().toString().padStart(2, '0')
              : '')
          }
          delegate={{
            onPress: onPressStartTimeButton,
          }}
        />
        {displayingTime == DisplayingTime.start ? (
          renderDateTimePicker(startTime || new Date(), onChangeStartTime)
        ) : (
          <View />
        )}
        <RedButton
          text={
            'End time' +
            (endTime
              ? ': ' + endTime.getHours() + ':' + endTime.getMinutes()
              : '')
          }
          delegate={{
            onPress: onPressEndTimeButton,
          }}
        />
        {displayingTime == DisplayingTime.end ? (
          renderDateTimePicker(endTime || new Date(), onChangeEndTime)
        ) : (
          <View />
        )}
      </>
    );
  };

  const renderBottomButtons = () => {
    return (
      <View style={styles.bottomButtonsView}>
        <RedButton
          text={'Done'}
          delegate={{
            onPress: () => {
              if (startTime && endTime) {
                tapeStore.setNightMode(startTime, endTime);
              } else {
                AlertHelper.showErrorAlert('Start or end time were not setted');
              }
            },
          }}
        />
        <RedButton
          text={'Clear night mode'}
          delegate={{
            onPress: () => {
              tapeStore.clearNightMode();
            },
          }}
        />
      </View>
    );
  };

  const renderBottomView = () => {
    return (
      <ShadowView containerStyle={styles.bottomView}>
        {renderTimeButtons()}
        {renderBottomButtons()}
      </ShadowView>
    );
  };

  return useObserver(() => {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={dismiss}>
          <View style={styles.blurView} />
        </TouchableWithoutFeedback>
        {renderBottomView()}
      </View>
    );
  });
};

export default TapeNightModeScreen;
