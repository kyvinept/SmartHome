import ErrorText from 'components/errorText';
import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Image, ImageSourcePropType} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTheme} from 'services/ThemeManager';
import strings from 'translations';
import styles, {getRoomText, getRoom} from './styles';

export interface InputTextBlockItem {
  text: string;
  selected: boolean;
}

export interface InputTextBlockProps {
  error?: string;
  items: InputTextBlockItem[];
  delegate: {
    onSelectRoom: (index: number) => void;
    onPressAddRoom: () => void;
  };
}

const InputTextBlock = (props: InputTextBlockProps) => {
  const theme = useTheme();

  const renderBlock = (
    item: InputTextBlockItem,
    onPress: () => void,
    index?: number,
  ) => {
    return (
      <TouchableOpacity
        key={String(index)}
        style={getRoom(item.selected)}
        onPress={onPress}>
        <Text style={getRoomText(item.selected)}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={styles.text}>{strings.room}</Text>
      <View style={styles.roomsView}>
        {props.items.map((item, index) =>
          renderBlock(item, () => props.delegate.onSelectRoom(index), index),
        )}
        <TouchableOpacity
          style={styles.room}
          onPress={props.delegate.onPressAddRoom}>
          <Image style={styles.addImage} source={theme.images.plus} />
        </TouchableOpacity>
      </View>
      {props.error && <ErrorText error={props.error} />}
    </View>
  );
};

export default InputTextBlock;
