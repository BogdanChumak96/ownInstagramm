import React from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../theme/colors';
import {styles} from './styles';

export const Comment = ({comment}) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
    </View>
  );
};
