import React from 'react';
import {FlatList} from 'react-native';
import {posts} from '../../common/posts';
import {FeedPost} from '../../components/FeedPost';

export const Home = (): JSX.Element => {
  return (
    <FlatList
      data={posts}
      keyExtractor={item => `post-${item.createdAt}`}
      renderItem={({item}) => <FeedPost post={item} />}
    />
  );
};
