import user from '../../common/user';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ProfileNavigationProp,
  MyUserProfileNavigationProp,
  UserProfileNavigationProp,
  UserProfileRouteProp,
  MyProfileRouteProp,
} from '../../navigation/types';
import React from 'react';

const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyUserProfileNavigationProp
  >();
  const userId = route.params?.userId;
  console.warn(userId);

  //   navigation.setOptions({title: user.username});

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
