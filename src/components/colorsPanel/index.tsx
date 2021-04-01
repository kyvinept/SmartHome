import NavigationService from 'navigations/NavigationService';
import Screens from 'navigations/screens';
import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'services/ThemeManager';
import styles from './styles';

export interface ColorsPanelProps {
  colors: string[];
  delegate: {
    onSelectColor: (color: string) => void;
    onAddColor: (color: string) => void;
  };
}

const ColorsPanel = (props: ColorsPanelProps) => {
  const theme = useTheme();

  const onAddColorButtonPressed = () => {
    NavigationService.present(Screens.ColorPickerScreen.name, {
      onSelectColor: (color: string) => {
        props.delegate.onAddColor(color);
      },
    });
  };

  const renderColor = (color: string, index: number) => {
    return (
      <TouchableOpacity
        key={String(index)}
        style={[styles.colorView, styles.shadow, {backgroundColor: color}]}
        onPress={() => props.delegate.onSelectColor(color)}
      />
    );
  };

  return (
    <View style={styles.container}>
      {props.colors.map((color, index) => renderColor(color, index))}
      <TouchableOpacity onPress={onAddColorButtonPressed}>
        <Image style={styles.colorView} source={theme.images.circlePlus} />
      </TouchableOpacity>
    </View>
  );
};

export default ColorsPanel;
