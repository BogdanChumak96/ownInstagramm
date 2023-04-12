import React from 'react';
import {View, FlatList} from 'react-native';
import comments from '../../common/comments.json';
import {Comment} from '../../components/Comment';
import {styles} from './style';
import Input from './Input';

export const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({item}) => (
          <Comment comment={item} includeDetails={true} />
        )}
        data={comments}
        style={styles.list}
      />
      <Input />
    </View>
  );
};
