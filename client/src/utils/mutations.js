import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $country: String!, $birthDate: String!) {
    addUser(username: $username, email: $email, password: $password, country: $country, birthDate: $birthDate) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const UPDATE_USER_IMAGE = gql`
  mutation updateUserImage($userId: ID!, $imageUrl: String!) {
    updateUserImage(userId: $userId, imageUrl: $imageUrl) {
      _id
      imageUrl
    }
  }
`;