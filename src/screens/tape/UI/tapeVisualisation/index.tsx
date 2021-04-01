import styles, {getLampLightStyle, getLampStyle} from './styles';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useObserver} from 'mobx-react-lite';
import TapeStore from 'screens/tape/TapeStore';
import {TapeStatus} from 'screens/tape/TapeModel';
import {interpolate} from 'helpers/interpolate';

export interface TapeVisualisationProps {
  tapeStore: TapeStore;
}

const TapeVisualisation = (props: TapeVisualisationProps) => {
  const tapeStore = props.tapeStore;

  const renderLamp = () => {
    return (
      <View style={getLampStyle(tapeStore.model.color)}>
        {tapeStore.model.status == TapeStatus.on && (
          <View
            style={getLampLightStyle(
              tapeStore.model.color,
              tapeStore.model.brightness,
            )}
          />
        )}
      </View>
    );
  };

  const renderTape = () => {
    return (
      <View style={styles.tape}>
        <View style={styles.leftPart} />
        {renderLamp()}
        {renderLamp()}
        {renderLamp()}
        {renderLamp()}
        <View style={styles.rightPart} />
      </View>
    );
  };

  const renderContent = () => {
    return <View style={styles.container}>{renderTape()}</View>;
  };

  return useObserver(renderContent);
};

export default TapeVisualisation;
