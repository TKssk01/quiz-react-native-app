import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';

const QuizResultScreens = ({ isCorrect, explanation, onNextQuestion }) => {

  // スタイル調整のためにはこちらでConsole.logを確認
  //console.log(isCorrect, explanation);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.resultText}>
        {isCorrect ? '正解!' : '不正解...'}  
      </Text>

      <Text style={styles.explanationText}>
        {explanation}
      </Text>

      <TouchableOpacity style={styles.nextButton} onPress={onNextQuestion}>
        <Text style={styles.nextButtonText}>次へ</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1, // ScrollView内でflexを使用するのは通常推奨されません
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // ScrollView の contentContainerStyle でのみ適用されるべきです
  },
  resultText: {
    fontSize: 24,
    marginBottom: 5,
    color: 'black', // 黒色の文字
  },
  explanationText: {
    fontSize: 20,
    marginBottom: 20,
    color: 'black', // 黒色の文字
  },
  nextButton: {
    padding: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 20,
    color: 'white', // 黒色の文字
  },
});

export default QuizResultScreens;