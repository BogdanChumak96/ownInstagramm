import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CommentsScreen} from '../screens/Comments/Comments';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import {RootNavigator} from './types';

const Stack = createNativeStackNavigator<RootNavigator>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
