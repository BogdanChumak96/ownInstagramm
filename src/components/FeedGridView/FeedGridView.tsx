import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {IPost} from '../../types/models';
import FeedGridItem from './FeedGridItem';

interface IFeedGridView {
  data: IPost[];
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement;
}

const FeedGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList
      data={data}
      numColumns={3}
      style={{marginHorizontal: -1}}
      keyExtractor={item => `post-${item.createdAt}`}
      ListHeaderComponent={ListHeaderComponent}
      renderItem={({item}) => <FeedGridItem post={item} />}
    />
  );
};

export default FeedGridView;
