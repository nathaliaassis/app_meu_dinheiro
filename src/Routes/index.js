import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Preload from '../Components/Preload';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Dashboard from '../Pages/Dashboard';
import New from '../Pages/New';
import Profile from '../Pages/Profile';

const Stack = createStackNavigator();

export function Sign() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name='Preload'
            component={Preload}
          />
          <Stack.Screen
            name='SignIn'
            component={SignIn}
          />
          <Stack.Screen
            name='SignUp'
            component={SignUp}
          />
          <Stack.Screen
            name='AppRoutes'
            component={AppRoutes}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          borderTopColor: '#1b2c4c',
          paddingBottom: 2,
          backgroundColor: '#1b2c4c'
        }
      }}
    >
      <Tab.Screen name='Dashboard'
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="equalizer" size={32} color={color} />
          )
        }}
      />
      <Tab.Screen name='New' component={New}
        options={{
          tabBarLabel: 'Registrar',
          tabBarIcon: ({ color }) => (
            <Icon name="create" size={32} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}

        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={32} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

