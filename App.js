import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import OpeningScreen from './components/OpeningScreen';
import Question from './components/Questions';
import QuizResultScreen from './components/QuizResultScreens';
import Option from './components/Options';
import Results from './components/Results';
import questions from './data/questions.json';
import QuizResultScreens from './components/QuizResultScreens';

const selectRandomQuestions = (allQuestions, count) => {
  let selected = [];
  let shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  selected = shuffled.slice(0, count);
  return selected;
};

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showOpeningScreen, setShowOpeningScreen] = useState(true);
  const [showOptions, setShowOptions] = useState(true);  // 新しいstate: 選択肢画面の表示を管理
  const [showResultScreen, setShowResultScreen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  useEffect(() => {
    setSelectedQuestions(selectRandomQuestions(questions, 10));
  }, []);

// handleSelectOption関数
const handleSelectOption = (index) => {
  setSelectedOption(index);
  setShowOptions(false); // 選択肢画面を非表示にする
  setShowResultScreen(true);
};

// useEffectフック
useEffect(() => {
  if (selectedOption !== null) {
    const isCorrect = selectedOption === selectedQuestions[currentQuestionIndex].correctIndex;
    if (isCorrect) {
      setScore(prevScore => prevScore + 1); // スコアを更新
      console.log('正解！スコア:', score + 1);
    } else {
      console.log('不正解');
    }
  }
}, [selectedOption]); // selectedOptionが変更されたときにのみこのエフェクトを実行


  const handleNextQuestion = () => {
    setShowResultScreen(false);
    setSelectedOption(null);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < selectedQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setShowOptions(true);  // 次の質問の選択肢を表示する
    } else {
      setCompleted(true);
    }
  };

  const restartQuiz = () => {
    setSelectedQuestions(selectRandomQuestions(questions, 10));
    setCurrentQuestionIndex(0);
    setScore(0);
    setCompleted(false);
    setShowOpeningScreen(true);
    setShowOptions(true);
    setShowResultScreen(false);
    setSelectedOption(null);
  };

  return (
    <View style={styles.container}>
      {showOpeningScreen && (
        <OpeningScreen onStartQuiz={() => setShowOpeningScreen(false)} />
      )}
      {!showOpeningScreen && completed && (
        <Results
          score={score}
          totalQuestions={selectedQuestions.length}
          onRestart={restartQuiz}
        />
      )}
      {!showOpeningScreen && !completed && (
        <View>
          {showOptions && (
            <View>
              <Question question={selectedQuestions[currentQuestionIndex].question} imageUri={selectedQuestions[currentQuestionIndex].imageUri} />
              {selectedQuestions[currentQuestionIndex].options.map((option, index) => (
                <Option 
                  key={index} 
                  option={option} 
                  onSelect={() => handleSelectOption(index)} 
                />
              ))}
            </View>
          )}
          {showResultScreen && (
              <QuizResultScreens
                isCorrect={selectedOption === selectedQuestions[currentQuestionIndex].correctIndex}
                explanation={selectedQuestions[currentQuestionIndex].explanation}
                onNextQuestion={handleNextQuestion}
              />
          )}

        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  // 他のスタイルはここに追加してください。
});


