import React from 'react';
import AppContainer from './src/navigations';
import NavigationService from './src/navigations/NavigationService';
import rootStore from './src/stores';
import {StoreProvider} from './src/stores/provider';

const App = () => {
  return (
    <StoreProvider value={rootStore}>
      <AppContainer
        ref={(navigatorRef) => {
          if (navigatorRef) {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }
        }}
      />
    </StoreProvider>
  );
};

export default App;
