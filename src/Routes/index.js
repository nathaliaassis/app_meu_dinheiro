import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='SignIn'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name='SignIn'
            component={SignIn}
          />
          <Stack.Screen
            name='SignUp'
            component={SignUp}
          />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const Tab = createBottomTabNavigator();
export function HomeRoutes() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='SignIn'
        >
          <Tab.Screen
            name='SignIn'
            component={SignIn}
          />
          <Tab.Screen name='Home' component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

