import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Results = ({ score, totalQuestions, onRestart }) => (
  <View style={styles.container}>
    <Text style={styles.title}>クイズ終了！</Text>
    <Text style={styles.resultText}>
      正答率: {((score / totalQuestions) * 100).toFixed(0)}%
    </Text>
    <Text style={styles.scoreText}>
      スコア: {score} / {totalQuestions}
    </Text>
    <TouchableOpacity onPress={onRestart} style={styles.restartButton}>
      <Text style={styles.restartButtonText}>ホームに戻る</Text>
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
    marginBottom: 10,
  },
  resultText: {
    fontSize: 24,
    marginBottom: 5,
  },
  scoreText: {
    fontSize: 20,
    marginBottom: 20,
  },
  restartButton: {
    padding: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 10,
  },
  restartButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Results;
