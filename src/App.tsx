import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from '@/theme';
import { Routes } from './routes';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme: { colors } }) => colors.background};
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
