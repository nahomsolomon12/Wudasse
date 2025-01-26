// Import necessary modules from React and Expo
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Quiz data
const quizData = [
  {
    question: 'ታቦት በወርቅ ልቡጥ እምኵለሄ ዘግቡር እምዕፅ ______________ ይትሜሰል ለነ ዘእግዚአብሔር ቃለ...',
    options: ['ጳጦስ', 'ሕይወት', 'ዘኢይነቅዝ', 'ገዳም'],
    answer: 'ዘኢይነቅዝ',
  },
  {
    question: 'ዘኮነ ሰብአ ዘእንበለ ______________ ፡ መለኮት ንጹሕ ዘአልቦ ሙስና ዘዕሩይ ምስለ አብ... ', 
    options: ['ሰላም ወሱባኤ', 'ፍልጠት ወኢውላጤ', 'ርስሐት ወርኩስ', 'ሥጋ ወነፍስ'],
    answer: 'ፍልጠት ወኢውላጤ',
  },
  {
    question: 'ወቦቱ አብሠራ ለንጽሕት ዘእንበለ ዘርዕ ኮነ ከማነ በኪነ ጥበቡ ቅዱስ፡ ዘተሰብአ እምኔኪ ዘእንበለ ርኵስ፡ ______________ መለኮቶ ሰአሊ ለነ ቅድስት።',
    options: ['ደመረ', 'ተደመረ', 'ተጻምረ', 'ተዋሐደ'],
    answer: 'ደመረ',
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerPress = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizFinished(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isQuizFinished ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your Score: {score} / {quizData.length}</Text>
          <Button title="Restart Quiz" onPress={resetQuiz} />
          
        </View>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.questionText}>{quizData[currentQuestion].question}</Text>
          {quizData[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswerPress(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  quizContainer: {
    width: '100%',
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
  },
  optionText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
