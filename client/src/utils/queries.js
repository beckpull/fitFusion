import { gql } from '@apollo/client';

export const GET_ME = gql`
query Query {
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
      date
      goal
      name
      workouts {
        _id
        bodyPart
        equipment
        gifUrl
        instructions
        name
        secondary
        target
        workoutId
        progress {
          _id
          date
          distance
          duration
          reps
          sets
          weight
        }
      }
    }
  }
}
`;
