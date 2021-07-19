import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@/screens/Home';
import { Classification } from '@/screens/Classification';
import { TeamDetails } from '@/screens/TeamDetails';
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
        <Stack.Screen name={routeNames.CLASSIFICATION} component={Classification} />
        <Stack.Screen name={routeNames.TEAMDETAILS} component={TeamDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Routes };
