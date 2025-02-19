// AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Index from './index.js';
import QuizScreen from './quiz.js';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Index} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
