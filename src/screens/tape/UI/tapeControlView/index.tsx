import ColorsPanel from 'components/colorsPanel';
import BrightnessSlider from 'components/brightnessSlider';
import SwitchBitButton from 'components/switchBigButton';
import {useObserver} from 'mobx-react-lite';
import React, {useState} from 'react';
import {View} from 'react-native';
import {TapeStatus} from 'screens/tape/TapeModel';
import TapeStore from 'screens/tape/TapeStore';
import styles from './styles';
import ShadowView from 'components/shadowView';

export interface TapeControlViewProps {
  tapeStore: TapeStore;
}

const TapeControlView = (props: TapeControlViewProps) => {
  const tapeStore = props.tapeStore;

  const renderContent = () => {
    return (
      <ShadowView containerStyle={styles.container}>
        <SwitchBitButton
          isEnabled={tapeStore.model.status == TapeStatus.on}
          delegate={{onValueChange: tapeStore.toggleStatus}}
        />
        <ColorsPanel
          colors={['#E9967A', '#FFD700', '#FFFF00', '#008000']}
          delegate={{
            onAddColor: tapeStore.onChangeColor,
            onSelectColor: tapeStore.onChangeColor,
          }}
        />
        <BrightnessSlider
          value={tapeStore.model.brightness}
          delegate={{
            onValueChange: tapeStore.onChangeBrightness,
          }}
        />
      </ShadowView>
    );
  };

  return useObserver(renderContent);
};

export default TapeControlView;
