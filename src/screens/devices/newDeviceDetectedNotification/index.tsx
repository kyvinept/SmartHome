import styles from './styles';
import {useObserver} from 'mobx-react-lite';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import strings from 'translations';
import TextButton from 'components/textButton';
import AddDeviceStore from '../AddDeviceStore';

export interface NewDeviceDetectedNotificationProps {
  addDeviceStore: AddDeviceStore;
}

const NewDeviceDetectedNotification = (
  props: NewDeviceDetectedNotificationProps,
) => {
  const addDeviceStore = props.addDeviceStore;

  const renderContent = () => {
    return addDeviceStore.detectedNewDevice ? (
      <View style={styles.container}>
        <Text style={styles.text}>{strings.newDeviceWasFound}</Text>
        <View style={styles.buttonsContainer}>
          <TextButton
            text={strings.add}
            delegate={{onPress: addDeviceStore.cancelAddingNewDevice}}
          />
          <TextButton
            text={strings.cancel}
            delegate={{onPress: addDeviceStore.cancelAddingNewDevice}}
          />
        </View>
      </View>
    ) : (
      <View />
    );
  };

  return useObserver(renderContent);
};

export default NewDeviceDetectedNotification;
