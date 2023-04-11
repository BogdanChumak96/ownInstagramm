import {
  View,
  FlatList,
  Image,
  ViewToken,
  useWindowDimensions,
  ViewabilityConfig,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {colors} from '../../theme/colors';
import {DoublePressable} from '../doublePressable';

interface ICarousel {
  images: string[];
  toggleLike: () => void;
}

export const Carousel = ({images, toggleLike}: ICarousel) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const {width} = useWindowDimensions();

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const handleChangeIndex = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        data={images}
        viewabilityConfig={viewabilityConfig}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={toggleLike}>
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        onViewableItemsChanged={handleChangeIndex.current}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 10,
          width: '100%',
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              aspectRatio: 1,
              backgroundColor:
                activeImageIndex === index ? colors.primary : colors.white,
              borderRadius: 5,
              margin: 5,
              marginHorizontal: 3,
            }}
          />
        ))}
      </View>
    </View>
  );
};
