import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';

import { theme } from '@/theme';
import { Routes } from '@/routes';
import { store } from '@/store';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme: { colors } }) => colors.background};
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <StatusBar barStyle="light-content" />
          <Routes />
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
