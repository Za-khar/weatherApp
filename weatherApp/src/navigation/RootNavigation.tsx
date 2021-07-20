import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from './DrawerNavidation';
import React from 'react';
import 'react-native-gesture-handler';

export const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};
