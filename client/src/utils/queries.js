import { gql } from '@apollo/client';

export const GET_ME = gql`
  query Me {
    me {
      _id
      birthDate
      country
      email
      imageUrl
      password
      username
      workoutPlans {
        _id
        name
        workouts {
          _id
          bodyPart
          equipment
          gifUrl
          instructions
          name
          progress {
            _id
            date
            distance
            duration
            reps
            sets
            weight
          }
          secondary
          target
          workoutId
        }
      }
    }
  }
`;

