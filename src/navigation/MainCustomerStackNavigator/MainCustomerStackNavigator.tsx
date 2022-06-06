import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WeekScreen from '../../screens/WeekScreen/WeekScreen';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import { MainCustomerRoutes } from './routes';
import { MainCustomerStackParamList } from './types';
// import {headerBackOptions} from '../commonOptions';



const MainCustomerStack =
  createNativeStackNavigator<MainCustomerStackParamList>();

export const MainCustomerStackNavigator = () => {
  return (
    <MainCustomerStack.Navigator
    // screenOptions={props => ({
    //   // ...headerBackOptions(props),
    //   animation: 'slide_from_right',
    // })}>
    >
      <MainCustomerStack.Screen
        name={MainCustomerRoutes.Home}
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <MainCustomerStack.Screen
        name={MainCustomerRoutes.Week}
        options={{ headerShown: false }}
        component={WeekScreen}
      />

    </MainCustomerStack.Navigator>
  );
};
