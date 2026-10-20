import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import StudentRoster from './components/StudentRoster';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <StudentRoster />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});