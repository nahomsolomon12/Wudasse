import React from 'react';
import { View, Text, Button } from 'react-native';

const QuizScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Quiz Questions Here</Text>
      <Button title="See Results" onPress={() => navigation.navigate('Results')} />
    </View>
  );
};

export default QuizScreen;