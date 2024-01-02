import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Score = ({ score, total }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Score: {score} / {total}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Score;
