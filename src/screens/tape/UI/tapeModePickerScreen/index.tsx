import ShadowView from 'components/shadowView';
import {useObserver} from 'mobx-react-lite';
import NavigationService from 'navigations/NavigationService';
import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  FlatList,
  ListRenderItemInfo,
  ImageSourcePropType,
} from 'react-native';
import styles from './styles';
import TapeStore from 'screens/tape/TapeStore';
import {ShowingMode, ShowingModeType} from '../../TapeModel';
import ModeCell from './modeCell';
import {useTheme} from 'services/ThemeManager';

export interface TapeModePickerScreenProps {
  navigation: {
    state: {
      params: {
        tapeStore: TapeStore;
      };
    };
  };
}

interface ShowingModeRenderModel {
  showingMode: ShowingMode;
  text: string;
  image: ImageSourcePropType;
}

const TapeModePickerScreen = (props: TapeModePickerScreenProps) => {
  const theme = useTheme();

  const modesData: ShowingModeRenderModel[] = [
    {
      showingMode: {
        type: ShowingModeType.full,
      },
      text: 'Default',
      image: theme.images.showingMode,
    },
    {
      showingMode: {
        type: ShowingModeType.oneByOne,
      },
      text: 'One by one',
      image: theme.images.moon,
    },
  ];

  const tapeStore = props.navigation.state.params.tapeStore;

  const dismiss = () => {
    NavigationService.dismiss();
  };

  const renderModeItem = (
    itemProps: ListRenderItemInfo<ShowingModeRenderModel>,
  ) => {
    return (
      <ModeCell
        image={itemProps.item.image}
        text={itemProps.item.text}
        isLeft={itemProps.index % 2 === 0}
        isActive={
          itemProps.item.showingMode.type === tapeStore.model.showingMode.type
        }
        delegate={{
          onPress: () => tapeStore.onChangeMode(itemProps.item.showingMode),
        }}
      />
    );
  };

  const renderBottomView = () => {
    return (
      <ShadowView containerStyle={styles.bottomView}>
        <FlatList
          style={styles.modeList}
          keyExtractor={(item, index) => String(index)}
          data={modesData}
          extraData={{
            showingMode: tapeStore.model.showingMode,
          }}
          numColumns={2}
          renderItem={renderModeItem}
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

export default TapeModePickerScreen;
