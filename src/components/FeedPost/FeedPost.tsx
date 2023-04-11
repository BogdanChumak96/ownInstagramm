import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import {colors} from '../../theme/colors';
import {styles} from './style';
import {Comment} from '../Comment/Comment';
import {IPost} from './../../types/models';
import {DoublePressable} from '../doublePressable/index';
import {Carousel} from '../carousel/Carousel';

export const FeedPost = ({post}: IPost): JSX.Element => {
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(prev => !prev);
  };
  const toggleShowDescription = () => {
    setShow(prev => !prev);
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel toggleLike={toggleLike} images={post.images} />;
  }

  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
      </View>
      {content}

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={liked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={liked ? colors.red : colors.black}
            />
          </Pressable>

          <Ionicons
            name={'chatbubble-outline'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name={'send'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name={'bookmark'}
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>lgrinevicium</Text> and{' '}
          <Text style={styles.bold}> {post.nofLikes} others</Text>
        </Text>
        {/* Post Description */}
        <Text
          onPress={toggleShowDescription}
          style={styles.text}
          numberOfLines={show ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username}</Text>
          {post.description}
        </Text>
        {/* Comments */}
        <Text>View all {post.nofComments} comments</Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        {/* Posted date */}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};
