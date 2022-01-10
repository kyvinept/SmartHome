import ShadowView from 'components/shadowView';
import {useObserver} from 'mobx-react-lite';
import NavigationService from 'navigations/NavigationService';
import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';
import TapeStore from 'screens/tape/TapeStore';
import NightModeCell from './nightModeCell';
import NightModeStore from 'screens/tape/NightModeStore';
import TextButton from 'components/textButton';

export interface TapeNightModeScreenProps {
  navigation: {
    state: {
      params: {
        tapeStore: TapeStore;
      };
    };
  };
}

const TapeNightModeScreen = (props: TapeNightModeScreenProps) => {
  const tapeStore = props.navigation.state.params.tapeStore;

  const dismiss = () => {
    NavigationService.dismiss();
  };

  const renderNightModeItem = (item: ListRenderItemInfo<NightModeStore>) => {
    return (
      <NightModeCell
        store={item.item}
        index={item.index}
        delegate={{onDelete: () => tapeStore.onDeleteNightMode(item.index)}}
      />
    );
  };

  const renderAddButton = () => {
    return (
      <View style={styles.addButton}>
        <TextButton
          text="+ Add new time range"
          delegate={{onPress: () => tapeStore.onAddNightMode()}}
        />
      </View>
    );
  };

  const renderBottomView = () => {
    return (
      <ShadowView containerStyle={styles.bottomView}>
        {tapeStore.enabledToCreateNewNightMode ? renderAddButton() : <></>}
        <FlatList
          keyExtractor={(item, index) => String(index)}
          data={tapeStore.nightModes}
          renderItem={renderNightModeItem}
          scrollEnabled={false}
        />
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
