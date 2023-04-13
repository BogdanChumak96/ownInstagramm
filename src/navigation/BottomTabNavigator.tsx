import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home/Home';
import PostUploadScreen from '../screens/PostUploadScreen/PostUploadScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../theme/colors';
import ProfileStackNavigator from './ProfileStackNavigator';
import {BottomNavigatorParamList} from './types';

const Tab = createBottomTabNavigator<BottomNavigatorParamList>();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ),
        }}
        name="Feed"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
        name="Search"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialComunity
              name="plus-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
        name="Upload"
        component={PostUploadScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialComunity name="heart-outline" size={size} color={color} />
          ),
        }}
        name="Notifications"
        component={PostUploadScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialComunity
              name="account-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
        name="MyProfile"
        component={ProfileStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
