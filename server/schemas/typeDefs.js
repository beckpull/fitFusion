const typeDefs = `
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        workoutPlans: [WorkoutPlan]
    }

    type WorkoutPlan {
        _id: ID
        name: String!
        workouts: [Workout]
    }

    type Workout {
        _id: ID
        name: String!
        workoutId: Int
        bodyPart: String
        equipment: String
        gifUrl: String
        target: String
        secondary: String
        instructions: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input WorkoutInput {
        name: String!
        workoutId: Int
        bodyPart: String
        equipment: String
        gifUrl: String
        target: String
        secondary: String
        instructions: String
    }

    type Query {
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        addWorkoutPlan(name: String!): WorkoutPlan
        updateWorkoutPlan(workoutPlanId: ID!, name: String): WorkoutPlan
        removeWorkoutPlan(workoutPlanId: ID!): WorkoutPlan

        addWorkout(workoutPlanId: ID!, workoutInput: WorkoutInput!): WorkoutPlan
        removeWorkout(workoutPlanId: ID!, workoutId: ID!): WorkoutPlan
    }
`

module.exports = typeDefs;