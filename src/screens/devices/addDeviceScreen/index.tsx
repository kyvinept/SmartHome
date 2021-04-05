import BackgroundView, {BackgroundViewProps} from 'components/backgroundView';
import DefaultInputForm from 'components/defaultInputForm';
import RedButton from 'components/redButton';
import WifiInputForm from 'components/wifiInputForm';
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
    searchForNewDevice();
    selectedRoom && addDeviceStore.onSelectRoom(selectedRoom);
  }, []);

  const searchForNewDevice = () => {
    addDeviceStore.searchForNewDevice();
  };

  const renderDefaultInputForm = () => {
    return (
      <DefaultInputForm
        name={{
          error: addDeviceStore._selectedNameError,
          delegate: {
            onChangeText: addDeviceStore.onChangeName,
          },
        }}
        icon={{
          error: addDeviceStore._selectedIconIndexError,
          icons: addDeviceStore.icons,
          delegate: {
            onPressAddIcon: () => {},
            onSelectIcon: addDeviceStore.onSelectIcon,
          },
        }}
        room={{
          error: addDeviceStore._selectedRoomIndexError,
          items: addDeviceStore.rooms,
          delegate: {
            onPressAddRoom: () => {},
            onSelectRoom: addDeviceStore.onSelectRoomByIndex,
          },
        }}
      />
    );
  };

  const renderWifiInputForm = () => {
    return <WifiInputForm addDeviceStore={addDeviceStore} />;
  };

  const renderAddButton = () => {
    return (
      <RedButton
        text={strings.add}
        delegate={{
          onPress: () => {
            addDeviceStore.onAddDevice()?.then(NavigationService.dismiss);
          },
        }}
      />
    );
  };

  const renderNoDeviceFound = () => {
    return <NoDeviceFound onSearchForDevice={searchForNewDevice} />;
  };

  const renderAddDeviceForm = () => {
    return (
      <ScrollView style={styles.scrollView} keyboardDismissMode={'none'}>
        {!addDeviceStore._isWifiConnected && renderWifiInputForm()}
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
        {addDeviceStore._isDeviceReadyForConnecting
          ? renderAddDeviceForm()
          : renderNoDeviceFound()}
      </BackgroundView>
    );
  };

  return useObserver(renderContent);
};

export default AddDeviceScreen;
