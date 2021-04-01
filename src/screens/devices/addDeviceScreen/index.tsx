import BackgroundView, {BackgroundViewProps} from 'components/backgroundView';
import DefaultInputForm from 'components/defaultInputForm';
import RedButton from 'components/redButton';
import {useObserver} from 'mobx-react-lite';
import NavigationService from 'navigations/NavigationService';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useTheme} from 'services/ThemeManager';
import {useAddDeviceStore} from 'stores/provider/useStore';
import RoomStore from 'stores/RoomStore';
import strings from 'translations';
import NoDeviceFound from '../noDeviceFound';
import styles from './styles';

export interface AddDeviceScreenProps {
  navigation: {
    state: {
      params: {
        selectedRoom?: RoomStore;
      };
    };
  };
}

const AddDeviceScreen = (props: AddDeviceScreenProps) => {
  const theme = useTheme();
  const selectedRoom = props.navigation.state.params.selectedRoom;
  const addDeviceStore = useAddDeviceStore();

  useEffect(() => {
    addDeviceStore.searchForNewDevice();
    selectedRoom && addDeviceStore.onSelectRoom(selectedRoom);
  }, []);

  const renderDefaultInputForm = () => {
    return (
      <DefaultInputForm
        name={{}}
        icon={{
          icons: addDeviceStore.icons,
          delegate: {
            onPressAddIcon: () => {},
            onSelectIcon: addDeviceStore.onSelectIcon,
          },
        }}
        room={{
          items: addDeviceStore.rooms,
          delegate: {
            onPressAddRoom: () => {},
            onSelectRoom: addDeviceStore.onSelectRoomByIndex,
          },
        }}
      />
    );
  };

  const renderAddButton = () => {
    return <RedButton text={strings.add} delegate={{onPress: () => {}}} />;
  };

  const renderNoDeviceFound = () => {
    return <NoDeviceFound />;
  };

  const renderAddDeviceForm = () => {
    return (
      <ScrollView style={styles.scrollView} keyboardDismissMode={'none'}>
        {renderDefaultInputForm()}
        <View style={styles.spacer} />
        {renderAddButton()}
      </ScrollView>
    );
  };

  const renderContent = () => {
    const backgroundViewProps: BackgroundViewProps = {
      header: {
        text: strings.newDevice,
        leftButtonProps: {
          image: {
            image: theme.images.back,
            alignSelf: 'flex-start',
            width: 25,
          },
          onPress: NavigationService.dismiss,
        },
      },
    };

    return (
      <BackgroundView {...backgroundViewProps}>
        {/* {renderAddDeviceForm()} */}
        {renderNoDeviceFound()}
      </BackgroundView>
    );
  };

  return useObserver(renderContent);
};

export default AddDeviceScreen;
