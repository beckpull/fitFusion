import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginForm from './src/screens/LoginForm';
import SignUpForm from './src/screens/SignUpForm';
import { client } from './src/utils/apolloClient';
// JRH <>//
import SearchWorkoutScreen from './src/screens/SearchWorkout/SearchWorkoutScreen';
import SearchByNameScreen from './src/screens/SearchWorkout/SearchByNameScreen';
import SearchByMuscleScreen from './src/screens/SearchWorkout/SearchByMuscleScreen';
// JRH^//

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="SignUpForm" component={SignUpForm} /> */}

          {/* JRH <> */}
          <Stack.Screen name="SearchWorkoutScreen" component={SearchWorkoutScreen} options={{ title: 'Search for a Workout' }} />
          <Stack.Screen name="SearchByNameScreen" component={SearchByNameScreen} options={{ title: 'Search by Name' }} />
          <Stack.Screen name="SearchByMuscleScreen" component={SearchByMuscleScreen} options={{ title: 'Search by Targeted Muscle' }} />
          {/* JRH^   */}


        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}