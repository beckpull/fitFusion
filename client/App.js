import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginForm from './src/screens/LoginForm';
import SignUpForm from './src/screens/SignUpForm';
import PhysicalTest from './src/screens/PhysicalTest';
import ForgotPassword from './src/screens/ForgotPassword';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';


// import WorkoutPlan from './src/screens/WorkoutPlan';
import EachPlan from './src/screens/EachPlan';
import ExerciseDetail from './src/screens/ExerciseDetail';

import TabBar from './src/components/tabBar/TabBar';

// import { client } from './src/utils/apolloClient';
import MainSearchScreen from './src/screens/SearchWorkout/MainSearchScreen';
import SearchByNameScreen from './src/screens/SearchWorkout/SearchByNameScreen';
import SearchByMuscleScreen from './src/screens/SearchWorkout/SearchByMuscleScreen';
import NewWorkoutForm from './src/screens/NewWorkoutForm';

const Stack = createStackNavigator();

const httpLink = createHttpLink({
  uri: `http://${process.env.HTTP_URI}:3001/graphql`,
});

console.log(httpLink)

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="SignUpForm" component={SignUpForm} />

          {/* API Search Screens (From JRH) <> */}
          <Stack.Screen name="MainSearchScreen" component={MainSearchScreen} options={{ title: 'Search for a Workout' }} />
          <Stack.Screen name="SearchByNameScreen" component={SearchByNameScreen} options={{ title: 'Search by Name' }} />
          <Stack.Screen name="SearchByMuscleScreen" component={SearchByMuscleScreen} options={{ title: 'Search by Targeted Muscle' }} />
          {/* JRH^   */}

 <Stack.Screen name="NewWorkoutForm" component={NewWorkoutForm} options={{ title: 'New Workout Form' }} />

          <Stack.Screen name="PhysicalTest" component={PhysicalTest} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

          {/* <Stack.Screen name="WorkoutPlan" component={WorkoutPlan} /> */}
          <Stack.Screen name="EachPlan" component={EachPlan} />
          <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />

          <Stack.Screen name="TabBar" component={TabBar} />

        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};