import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeScreen} from './src/screens/home/Home';
import {CommentsScreen} from './src/screens/Comments/Comments';
import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';

function App(): JSX.Element {
  return (
    <View style={styles.app}>
      <EditProfileScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
