import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginForm from './src/screens/LoginForm';
import SignUpForm from './src/screens/SignUpForm';
import PhysicalTest from './src/screens/PhysicalTest';
import ForgotPassword from './src/screens/ForgotPassword';
import WorkoutPlan from './src/screens/WorkoutPlan';
import EachPlan from './src/screens/EachPlan';
import ExerciseDetail from './src/screens/ExerciseDetail';
import { client } from './src/utils/apolloClient';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="SignUpForm" component={SignUpForm} />
          <Stack.Screen name="PhysicalTest" component={PhysicalTest} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="WorkoutPlan" component={WorkoutPlan} />
          <Stack.Screen name="EachPlan" component={EachPlan} />
          <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};