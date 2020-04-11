import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/home'
import Profile from '../screens/profile'

const Drawer = createDrawerNavigator();

export default function DrawerNav() {

  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
    </NavigationContainer>
  );

}