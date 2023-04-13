import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import user from '../../common/user';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {ProfileNavigationProp} from '../../navigation/types';

const ProfileHeader = () => {
  const navigation = useNavigation<ProfileNavigationProp>();
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image source={{uri: user.image}} style={styles.avatar} />

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>

      <View style={{flexDirection: 'row'}}>
        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate('Edit Profile')}
        />
        <Button title="Edit Page" onPress={() => {}} />
      </View>
    </View>
  );
};

export default ProfileHeader;
