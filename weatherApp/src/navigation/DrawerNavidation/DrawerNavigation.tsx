import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FiveDaysWeather, WeatherCalendar } from '../../screens';
import { colors } from '../../styles';
import { DrawerContent } from './DrawerContent';

export enum DrawerNavigationScreenList {
  FIVE_DAYS_WEATHER = 'FiveDaysWeather',
  WEATHER_CALENDAR = 'WeatherCalendar',
}

export const Drawer = createDrawerNavigator();

export const DrawerNavigation: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      drawerContentOptions={{
        labelStyle: {
          fontFamily: 'OpenSans-Bold',
          color: colors.dark,
          fontSize: 18,
        },
      }}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.darkBlue,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          color: colors.white,
          fontFamily: 'OpenSans-Bold',
        },
      }}
      initialRouteName={'WeatherCalendar'}>
      <Drawer.Screen
        name={DrawerNavigationScreenList.WEATHER_CALENDAR}
        component={WeatherCalendar}
        options={{ title: 'Weather calendar' }}
      />
      <Drawer.Screen
        name={DrawerNavigationScreenList.FIVE_DAYS_WEATHER}
        component={FiveDaysWeather}
        options={{ title: 'Five day weather' }}
      />
    </Drawer.Navigator>
  );
};
