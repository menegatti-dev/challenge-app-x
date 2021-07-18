import React from 'react';
import { StatusBar } from 'react-native';
import Home from '@/screens/Home';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from '@/theme';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme: { colors } }) => colors.background};
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
