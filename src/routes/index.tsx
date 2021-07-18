import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@/screens/Home';
import { useTheme } from 'styled-components';
import { routeNames } from './routeNames';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const { colors } = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routeNames.HOME}
        screenOptions={{ headerShown: false, cardStyle: { backgroundColor: colors.background } }}
      >
        <Stack.Screen name={routeNames.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Routes };
