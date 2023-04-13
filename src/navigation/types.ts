import {BottomTabNavigationProp} from './../../node_modules/@react-navigation/bottom-tabs/src/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type RootNavigatorParamList = {
  Home: undefined;
  Comments: {postId: string};
};

export type BottomNavigatorParamList = {
  HomeScreen: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  MyProfile: undefined;
};

export type TopTabNavigatorParamList = {
  Users: undefined;
  Posts: undefined;
};

export type UserProfileRouteProp = RouteProp<
  BottomNavigatorParamList,
  'MyProfile'
>;

export type MyProfileRouteProp = RouteProp<
  BottomNavigatorParamList,
  'MyProfile'
>;

export type MyUserProfileNavigationProp = BottomTabNavigationProp<
  BottomNavigatorParamList,
  'MyProfile'
>;

export type HomeStackNavigatorParamList = {
  Feed: undefined;
  UserProfile: {userId: string};
};

export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'UserProfile'
>;

export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Feed'
>;

export type ProfileStackNavigatorParamList = {
  Profile: undefined;
  'Edit Profile': undefined;
};

export type ProfileNavigationProp = NativeStackNavigationProp<
  ProfileStackNavigatorParamList,
  'Profile'
>;
