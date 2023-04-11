import React, {useRef, useState} from 'react';
import {FlatList, ViewabilityConfig} from 'react-native';
import {posts} from '../../common/posts';
import {FeedPost} from '../../components/FeedPost';

export const HomeScreen = (): JSX.Element => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const handleChangeIndex = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );

  return (
    <FlatList
      data={posts}
      keyExtractor={item => `post-${item.createdAt}`}
      renderItem={({item}) => (
        <FeedPost post={item} isVisible={activePostId === item.id} />
      )}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={handleChangeIndex.current}
    />
  );
};
