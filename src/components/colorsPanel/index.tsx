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

  return (
    <View style={styles.container}>
      {props.colors.map((color, index) => (
        <TouchableOpacity
          key={String(index)}
          style={[styles.colorView, styles.shadow, {backgroundColor: color}]}
          onPress={() => props.delegate.onSelectColor(color)}
        />
      ))}
      <TouchableOpacity onPress={() => props.delegate.onAddColor('')}>
        <Image style={styles.colorView} source={theme.images.circlePlus} />
      </TouchableOpacity>
    </View>
  );
};

export default ColorsPanel;
