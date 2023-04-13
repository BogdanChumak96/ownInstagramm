import React from 'react';
import {StyleSheet, View} from 'react-native';

import Navigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <View style={styles.app}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
