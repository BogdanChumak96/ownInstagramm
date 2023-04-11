import React, {useState} from 'react';
import Video from 'react-native-video';
import {styles} from './styles';
import {Pressable, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IVideoPlayer {
  uri: string;
  paused: boolean;
}

export const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [muted, setMuted] = useState(false);
  return (
    <View>
      <Video
        paused={paused}
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={muted}
      />
      <Pressable
        style={styles.muteButton}
        onPress={() => setMuted(prev => !prev)}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color="white"
        />
      </Pressable>
    </View>
  );
};
