import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Image, ImageSourcePropType} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTheme} from 'services/ThemeManager';
import strings from 'translations';
import styles, {getIconContainerStyle} from './styles';

export interface InputIconItem {
  icon: ImageSourcePropType;
  selected: boolean;
}

export interface InputIconProps {
  icons: InputIconItem[];
  delegate: {
    onPressAddIcon: () => void;
    onSelectIcon: (index: number) => void;
  };
}

const InputIcon = (props: InputIconProps) => {
  const theme = useTheme();

  const renderIcon = (
    item: InputIconItem,
    onPress: () => void,
    index?: number,
  ) => {
    return (
      <TouchableOpacity
        key={String(index)}
        style={getIconContainerStyle(item.selected)}
        onPress={onPress}>
        <Image style={styles.icon} source={item.icon} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={styles.text}>{strings.icon}</Text>
      <View style={styles.iconsView}>
        {props.icons.map((icon, index) =>
          renderIcon(icon, () => props.delegate.onSelectIcon(index), index),
        )}
        {renderIcon(
          {icon: theme.images.circlePlus, selected: false},
          props.delegate.onPressAddIcon,
        )}
      </View>
    </View>
  );
};

export default InputIcon;
