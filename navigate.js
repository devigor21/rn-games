import React from 'react';

import Main from './pages/Main';
import FullInfo from './pages/FullInfo';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={Main}
          options={{
            title: 'Главная',
            headerStyle: { backgroundColor: 'chocolate' },
            headerTitleStyle: { fontFamily: 'mt-light', textAlign: 'center' }
          }}
        />
        <Stack.Screen
          name='FullInfo'
          component={FullInfo}
          options={{
            title: 'Информация о игре',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontFamily: 'mt-light' }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
