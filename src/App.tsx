import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { MainCustomerStackNavigator } from './navigation/MainCustomerStackNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor="#00D1FF"
        barStyle="light-content"
      />
      <NavigationContainer>
        <MainCustomerStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider >
  );
};

export default App;
