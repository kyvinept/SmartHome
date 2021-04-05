import styles from './styles';
import {useObserver} from 'mobx-react-lite';
import React, {useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import strings from 'translations';
import ShadowView from 'components/shadowView';
import AddDeviceStore from 'screens/devices/AddDeviceStore';
import WifiCell from './cell';
import Header, {HeaderProps} from 'components/header';
import {useTheme} from 'services/ThemeManager';
import RedButton from 'components/redButton';

export interface WifiInputFormProps {
  addDeviceStore: AddDeviceStore;
}

const WifiInputForm = (props: WifiInputFormProps) => {
  const theme = useTheme();
  const addDeviceStore = props.addDeviceStore;

  const renderWifiNetworks = () => {
    const renderItem = (itemProps: ListRenderItemInfo<string>) => {
      return (
        <WifiCell
          item={itemProps.item}
          delegate={{
            onPress: () => addDeviceStore.onSelectWifi(itemProps.item),
          }}
        />
      );
    };

    const renderSeparator = () => {
      return <View style={styles.separator} />;
    };

    return (
      <FlatList
        scrollEnabled={false}
        style={styles.containerStyle}
        keyExtractor={(item, index) => String(index)}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderItem}
        data={addDeviceStore._availableWifiList}
      />
    );
  };

  const renderPasswordInput = () => {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder={strings.password}
          secureTextEntry={true}
          onChangeText={addDeviceStore.onPasswordChanged}
        />
        <RedButton
          text={strings.connect}
          delegate={{onPress: addDeviceStore.connectDeviceToWifi}}
        />
      </View>
    );
  };

  const renderHeader = () => {
    if (addDeviceStore._selectedWifi) {
      var headerProps: HeaderProps = {
        text: addDeviceStore._selectedWifi,
        leftButtonProps: {
          image: {
            image: theme.images.back,
            alignSelf: 'flex-start',
            width: 25,
          },
          onPress: () => addDeviceStore.onSelectWifi(undefined),
        },
      };
    } else {
      var headerProps: HeaderProps = {
        text: strings.wifiConnection,
        rightButtonProps: {
          image: {
            image: theme.images.reconnecting,
            alignSelf: 'flex-end',
            width: 20,
          },
          onPress: addDeviceStore.searchForNewDevice,
        },
      };
    }

    return <Header {...headerProps} />;
  };

  return useObserver(() => (
    <ShadowView containerStyle={styles.shadowView}>
      {renderHeader()}
      {!addDeviceStore._selectedWifi
        ? renderWifiNetworks()
        : renderPasswordInput()}
    </ShadowView>
  ));
};

export default WifiInputForm;
