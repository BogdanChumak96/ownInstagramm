import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/Home';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import {HomeStackNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Feed"
        component={HomeScreen}
        options={{headerTitle: Header}}
      />
      <Stack.Screen
        options={{title: 'Profile', headerShown: false}}
        name="Profile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

const Header = () => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
};

export default HomeStackNavigator;
