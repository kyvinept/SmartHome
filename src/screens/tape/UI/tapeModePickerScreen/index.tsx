import ShadowView from 'components/shadowView';
import {useObserver} from 'mobx-react-lite';
import NavigationService from 'navigations/NavigationService';
import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, View, TextInput} from 'react-native';
import {useTheme} from 'services/ThemeManager';
import strings from 'translations';
import styles from './styles';
import TapeStore from 'screens/tape/TapeStore';
import RedButton from 'components/redButton';
import {PartShowingTape, ShowingModeType} from '../../TapeModel';

export interface TapeModePickerScreenProps {
  navigation: {
    state: {
      params: {
        tapeStore: TapeStore;
      };
    };
  };
}

const TapeModePickerScreen = (props: TapeModePickerScreenProps) => {
  const tapeStore = props.navigation.state.params.tapeStore;

  const [value, setValue] = useState('');

  const dismiss = () => {
    NavigationService.dismiss();
  };

  const renderBottomView = () => {
    return (
      <ShadowView containerStyle={styles.bottomView}>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
        />
        <RedButton
          text={'Done'}
          delegate={{
            onPress: () => {
              const splitedValues = value
                .split(';')
                .map((item) => parseInt(item));
              const partShowingTape: PartShowingTape[] = [];
              for (let index = 0; index < splitedValues.length; index += 2) {
                partShowingTape.push({
                  from: splitedValues[index],
                  to: splitedValues[index + 1],
                });
              }

              tapeStore.onChangeMode({
                type: ShowingModeType.part,
                partShowingTape,
              });

              NavigationService.dismiss();
            },
          }}
        />
        <RedButton
          text={'Full mode'}
          delegate={{
            onPress: () => {
              tapeStore.onChangeMode({
                type: ShowingModeType.full,
              });
              NavigationService.dismiss();
            },
          }}
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
