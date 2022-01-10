import BackgroundView, {BackgroundViewProps} from 'components/backgroundView';
import {useObserver} from 'mobx-react-lite';
import NavigationService from 'navigations/NavigationService';
import React from 'react';
import TapeStore from 'screens/tape/TapeStore';
import {useTheme} from 'services/ThemeManager';
import TapeControlView from '../tapeControlView';
import TapeInfo from '../tapeInfo';
import TapeVisualisation from '../tapeVisualisation';

export interface TapeScreenProps {
  navigation: {
    state: {
      params: {
        tapeStore: TapeStore;
      };
    };
  };
}

const TapeScreen = (props: TapeScreenProps) => {
  const tapeStore = props.navigation.state.params.tapeStore;
  const theme = useTheme();

  const renderContent = () => {
    const backgroundViewProps: BackgroundViewProps = {
      header: {
        text: tapeStore.model.name.toUpperCase(),
        leftButtonProps: {
          image: {
            image: theme.images.back,
            alignSelf: 'flex-start',
            width: 25,
          },
          onPress: NavigationService.dismiss,
        },
        rightButtonProps: {
          image: {
            image: theme.images.share,
            alignSelf: 'flex-end',
            width: 20,
          },
          onPress: () => {},
        },
      },
    };

    return (
      <BackgroundView {...backgroundViewProps}>
        <TapeInfo description={tapeStore.model.description} />
        <TapeVisualisation tapeStore={tapeStore} />
        <TapeControlView tapeStore={tapeStore} />
      </BackgroundView>
    );
  };

  return useObserver(renderContent);
};

export default TapeScreen;
