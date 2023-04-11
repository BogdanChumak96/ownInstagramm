import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Home} from './src/screens/home/Home';

function App(): JSX.Element {
  return (
    <View style={styles.app}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
