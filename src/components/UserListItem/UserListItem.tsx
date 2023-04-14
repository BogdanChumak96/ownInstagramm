import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {IUser} from '../../types/models';
import fonts from '../../theme/fonts';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {UserProfileNavigationProp} from '../../navigation/types';
import {Image} from 'react-native';

interface IUserListItem {
  user: IUser;
}

const UserListItem = ({user}: IUserListItem) => {
  const navigator = useNavigation<UserProfileNavigationProp>();

  const goToUser = () => {
    navigator.navigate('Profile', {userId: user.id});
  };

  return (
    <Pressable onPress={goToUser} style={styles.root}>
      <Image
        source={{
          uri: user.image,
        }}
        style={{width: 50, aspectRatio: 1, borderRadius: 25, marginRight: 10}}
      />
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  root: {flexDirection: 'row', alignItems: 'center', padding: 10},
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: fonts.weight.bold,
    marginBottom: 5,
  },
  username: {
    color: colors.grey,
  },
});
export default UserListItem;
