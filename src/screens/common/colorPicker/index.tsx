import RedButton from 'components/redButton';
import ShadowView from 'components/shadowView';
import {useObserver} from 'mobx-react-lite';
import NavigationService from 'navigations/NavigationService';
import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {useTheme} from 'services/ThemeManager';
import strings from 'translations';
import styles from './styles';
import {
  ColorPicker,
  fromHsv,
  TriangleColorPicker,
} from 'react-native-color-picker';

export interface ColorPickerScreenProps {
  navigation: {
    state: {
      params: {
        onSelectColor: (color: string) => void;
      };
    };
  };
}

const ColorPickerScreen = (props: ColorPickerScreenProps) => {
  const onSelectColor = props.navigation.state.params.onSelectColor;

  const [color, setColor] = useState<string | undefined>();

  const dismiss = () => {
    NavigationService.dismiss();
  };

  const renderBottomView = () => {
    return (
      <ShadowView containerStyle={styles.bottomView}>
        <TriangleColorPicker
          style={styles.colorPicker}
          hideControls={true}
          onColorChange={(color) => {
            setColor(fromHsv(color));
          }}
        />
        <RedButton
          disabled={color == undefined}
          text={strings.selectColor}
          delegate={{
            onPress: () => {
              color && onSelectColor(color);
              dismiss();
            },
          }}
        />
      </ShadowView>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={dismiss}>
        <View style={styles.blurView} />
      </TouchableWithoutFeedback>
      {renderBottomView()}
    </View>
  );
};

export default ColorPickerScreen;
