import {View, Text, Image} from 'react-native';
import React from 'react';
import {IPost} from '../../types/models';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../theme/colors';
const FeedGridItem = ({post}: {post: IPost}) => {
  return (
    <View style={{width: '33.333%', aspectRatio: 1, padding: 1}}>
      <Image style={{flex: 1}} source={{uri: post.image || post.images[0]}} />
      {post.images && (
        <MaterialIcons
          style={{position: 'absolute', top: 5, right: 5}}
          name="collections"
          size={16}
          color={colors.white}
        />
      )}
    </View>
  );
};

export default FeedGridItem;
