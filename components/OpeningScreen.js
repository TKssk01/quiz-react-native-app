// OpeningScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OpeningScreen = ({ onStartQuiz }) => (
  <View style={styles.container}>
    <Text style={styles.title}>ようこそ！</Text>
    <TouchableOpacity onPress={onStartQuiz} style={styles.startButton}>
      <Text style={styles.startButtonText}>クイズを始める</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  startButton: {
    padding: 15,
    backgroundColor: '#1E90FF',
    borderRadius: 10,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default OpeningScreen;