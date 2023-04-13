import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';
import {ProfileStackNavigatorParamList} from './types';
const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerTitle: Header}}
      />
      <Stack.Screen
        options={{title: 'Profile'}}
        name="Edit Profile"
        component={EditProfileScreen}
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

export default ProfileStackNavigator;
