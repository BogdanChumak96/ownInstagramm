import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../theme/colors';
import {styles} from './styles';
import {DoublePressable} from '../doublePressable';

export const Comment = ({comment, includeDetails = false}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(p => !p);
  };

  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}
      <View style={styles.middleColumn}>
        <DoublePressable onDoublePress={toggleLike}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>{comment.user.username}</Text>{' '}
            {comment.comment}
          </Text>
          {includeDetails && (
            <View style={styles.footer}>
              <Text style={styles.footerText}>2d</Text>
              <Text style={styles.footerText}>5 likes</Text>
              <Text style={styles.footerText}>Reply</Text>
            </View>
          )}
        </DoublePressable>
      </View>

      <Pressable onPress={toggleLike} hitSlop={2}>
        <AntDesign
          name={liked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={liked ? colors.red : colors.black}
        />
      </Pressable>
    </View>
  );
};
