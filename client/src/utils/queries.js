import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      password
      workoutPlans {
        name
        workoutId
        bodyPart
        equipment
        gifUrl
        target
        secondary
        instructions
        progress {
            date
            sets
            reps
            weight
            duration
            distance
        },
      }
    }
  }
`;

