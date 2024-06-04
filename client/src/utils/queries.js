import { gql } from '@apollo/client';

export const GET_ME = gql`
query Query {
  me {
    _id
    birthDate
    country
    email
    password
    username
    profilePic {
      data
      contentType
    }
    workoutPlans {
      _id
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
