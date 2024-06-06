import { gql } from '@apollo/client';

export const GET_ME = gql`
query Query {
  me {
    _id
    username
    email
    password
    country
    birthDate
    height
    weight
    gender
    level
    calories
    profilePic {
      data
      contentType
    }
    workoutPlans {
      _id
      name
      goal
      workouts {
        _id
        name
        workoutId
        bodyPart
        equipment
        gifUrl
        target
        secondary
        instructions
        progress {
          _id
          date
          sets
          reps
          weight
          duration
          distance
        }
        goal {
          _id
          date
          sets
          reps
          weight
          duration
          distance
          isComplete
        }
      }
      date
      isRecommended
    }
    recommendedPlans {
      _id
      name
      goal
      workouts {
        _id
        name
        workoutId
        bodyPart
        equipment
        gifUrl
        target
        secondary
        instructions
        progress {
          _id
          date
          sets
          reps
          weight
          duration
          distance
        }
        goal {
          _id
          date
          sets
          reps
          weight
          duration
          distance
          isComplete
        }
      }
      date
      isRecommended
    }
  }
}
`;

export const GET_WORKOUT_PROGRESS = gql`
query GetWorkoutProgress($workoutPlanId: ID!, $workoutId: ID!) {
  getWorkoutProgress(workoutPlanId: $workoutPlanId, workoutId: $workoutId) {
    _id
    date
    distance
    duration
    reps
    sets
    weight
  }
}
`;



