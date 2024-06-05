import { gql } from '@apollo/client';

export const GET_ME = gql`
query Me {
  me {
    _id
    age
    birthDate
    calories
    country
    email
    gender
    height
    level
    password
    username
    weight
    profilePic {
      contentType
      data
    }
    recommendedPlans {
      _id
      date
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
  }
}
`;

export const GET_WORKOUT_PROGRESS = gql`
  query GetWorkoutProgress($workoutPlanId: ID!, $workoutId: ID!) {
    workoutProgress(workoutPlanId: $workoutPlanId, workoutId: $workoutId) {
      date
      sets
      reps
      weight
      duration
      distance
    }
  }
`;



