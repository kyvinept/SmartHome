import ColorsPanel from 'components/colorsPanel';
import BrightnessSlider from 'components/brightnessSlider';
import SwitchBitButton from 'components/switchBigButton';
import {useObserver} from 'mobx-react-lite';
import React, {useState} from 'react';
import {TapeStatus} from 'screens/tape/TapeModel';
import TapeStore from 'screens/tape/TapeStore';
import styles from './styles';
import ShadowView from 'components/shadowView';
import {useColorsStore} from 'stores/provider/useStore';
import TapeMode from '../tapeMode';

export interface TapeControlViewProps {
  tapeStore: TapeStore;
}

const TapeControlView = (props: TapeControlViewProps) => {
  const tapeStore = props.tapeStore;
  const colorsStore = useColorsStore();

  const renderContent = () => {
    return (
      <ShadowView containerStyle={styles.container}>
        <SwitchBitButton
          isEnabled={tapeStore.model.status == TapeStatus.on}
          delegate={{onValueChange: tapeStore.toggleStatus}}
        />
        <ColorsPanel
          colors={colorsStore.colors}
          delegate={{
            onAddColor: (color) => {
              colorsStore.onAddColor(color);
              tapeStore.onChangeColor(color);
            },
            onSelectColor: tapeStore.onChangeColor,
          }}
        />
        <BrightnessSlider
          value={tapeStore.model.brightness}
          delegate={{
            onValueChange: tapeStore.onChangeBrightness,
          }}
        />
        <TapeMode tapeStore={tapeStore} />
      </ShadowView>
    );
  };

  return useObserver(renderContent);
};

export default TapeControlView;
