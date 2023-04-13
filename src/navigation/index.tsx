import React from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {CommentsScreen} from '../screens/Comments/Comments';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import {RootNavigator, RootNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<RootNavigator>();

const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: ['bogdanchumak://', 'https://bogdanchumak.com'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Comments: 'comments',
      Home: {
        screens: {
          HomeStack: {
            initialRouteName: 'Feed',
            screens: {
              UserProfile: 'user/:userId',
            },
          },
        },
      },
    },
  },
};

const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
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
