import { gql } from '@apollo/client';

export const GET_ME = gql`
query Me{
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
      isRecommended
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
    recommendedPlans {
      _id
      goal
      isRecommended
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



