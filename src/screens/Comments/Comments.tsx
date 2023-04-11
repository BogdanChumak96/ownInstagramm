import React from 'react';
import {View, Text, FlatList} from 'react-native';
import comments from '../../common/comments.json';
import {Comment} from '../../components/Comment';
import {styles} from './style';

export const CommentsScreen = () => {
  return (
    <View>
      <FlatList
        renderItem={({item}) => (
          <Comment comment={item} includeDetails={true} />
        )}
        data={comments}
        style={styles.container}
      />
    </View>
  );
};
