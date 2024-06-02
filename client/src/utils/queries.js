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


export const GET_WORKOUTS = gql`
query MyWorkoutPlans {
  myWorkoutPlans {
    _id
    name
    goal
  }
}
`;
