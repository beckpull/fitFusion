import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginForm from './screens/LoginForm';
import SignUpForm from './screens/SignUpForm';
import { client } from './apolloClient';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="SignUpForm" component={SignUpForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}