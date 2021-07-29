import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';

import { theme } from '@/theme';
import { Routes } from '@/routes';
import { store } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme: { colors } }) => colors.background};
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SafeAreaView>
            <StatusBar barStyle="light-content" />
            <Routes />
            <Toast ref={ref => Toast.setRef(ref)} />
          </SafeAreaView>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
