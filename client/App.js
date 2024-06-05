import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginForm from './src/screens/LoginForm';
import SignUpForm from './src/screens/SignUpForm';
import PhysicalTest from './src/screens/PhysicalTest';
import ForgotPassword from './src/screens/ForgotPassword';
import Testimonials from './src/components/AboutUs/Testimonials';
// import MyProfile from './src/screens/MyProfile';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import MyWorkouts from './src/screens/MyWorkouts';
import EachPlan from './src/screens/EachPlan';
import ExerciseDetail from './src/screens/ExerciseDetail';
import { WorkoutProvider } from './src/context/WorkoutContext';
import TabBar from './src/components/tabBar/TabBar';
import AboutUs from './src/screens/AboutUs';

// import { client } from './src/utils/apolloClient';
// import MainSearchScreen from './src/screens/SearchWorkout/MainSearchScreen';
import SearchByNameScreen from './src/screens/SearchWorkout/SearchByNameScreen';
// import SearchByMuscleScreen from './src/screens/SearchWorkout/SearchByMuscleScreen';
import NewWorkoutForm from './src/screens/NewWorkoutForm';
import EditWorkoutForm from './src/screens/EditWorkoutForm';

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
      <WorkoutProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AboutUs" component={AboutUs} />
            <Stack.Screen name="LoginForm" component={LoginForm} />
            <Stack.Screen name="SignUpForm" component={SignUpForm} />
            <Stack.Screen name="PhysicalTest" component={PhysicalTest} />

            {/* <Stack.Screen name="MainSearchScreen" component={MainSearchScreen} options={{ title: 'Search for a Workout' }} /> */}
            <Stack.Screen name="SearchByNameScreen" component={SearchByNameScreen} options={{ title: 'Search by Name' }} />
            {/* <Stack.Screen name="SearchByMuscleScreen" component={SearchByMuscleScreen} options={{ title: 'Search by Targeted Muscle' }} /> */}

            <Stack.Screen name="NewWorkoutForm" component={NewWorkoutForm} options={{ title: 'New Workout Form' }} />
            <Stack.Screen name="EditWorkoutForm" component={EditWorkoutForm} options={{ title: 'Edit Workout Form' }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

            {/* <Stack.Screen name="MyWorkouts" component={MyWorkouts} /> */}
            <Stack.Screen name="EachPlan" component={EachPlan} />
            <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />


            <Stack.Screen name="TabBar" component={TabBar} />
            <Stack.Screen name="Testimonials" component={Testimonials} />


          </Stack.Navigator>
        </NavigationContainer>
      </WorkoutProvider>
    </ApolloProvider>
  );
};