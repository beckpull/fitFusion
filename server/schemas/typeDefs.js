const typeDefs = `

    scalar Date
    
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        country: String!
        birthDate: String!
        age: Int
        height: Int
        weight: Int
        gender: String
        level: String
        calories: Int
        profilePic: ProfilePic
        workoutPlans: [WorkoutPlan]
        recommendedPlans: [WorkoutPlan]
    }

    type ProfilePic {
        data: String
        contentType: String
    }

    type WorkoutPlan {
        _id: ID
        name: String!
        goal: String
        workouts: [Workout]
        date: Date
        isRecommended: Boolean
    }

    type Workout {
        _id: ID
        name: String!
        workoutId: Int
        bodyPart: String
        equipment: String
        gifUrl: String
        target: String
        secondary: [String]
        instructions: [String]
        progress: [Progress]
        goal: [Goal]
    }

    type Progress {
        _id: ID
        date: Date
        sets: Int
        reps: Int
        weight: Int
        duration: Int
        distance: Int
    }

    type Goal {
        _id: ID
        date: Date
        sets: Int
        reps: Int
        weight: Int
        duration: Int
        distance: Int
        isComplete: Boolean
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
        secondary: [String]
        instructions: [String]
    }

    input GoalInput {
        sets: Int
        reps: Int
        weight: Int
        duration: Int
        distance: Int
        isComplete: Boolean
    }

    input ProgressInput {
        sets: Int
        reps: Int
        weight: Int
        duration: Int
        distance: Int
    }

    input ProfilePicInput {
        data: String!
        contentType: String!
    }

    type Query {
        me: User
        getWorkoutProgress(workoutPlanId: ID!, workoutId: ID!): [Progress]
        allUsers: [User]
        myWorkoutPlans: [WorkoutPlan]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!, country: String!, birthDate: String!): Auth
        addUserSecondScreen(height: Int!, weight: Int!, gender: String!, level: String!, calories: Int!): User
        login(email: String!, password: String!): Auth

        addWorkoutPlan(name: String!, goal: String, date: Date): WorkoutPlan
        updateWorkoutPlan(workoutPlanId: ID!, name: String, goal: String): WorkoutPlan
        removeWorkoutPlan(workoutPlanId: ID!): WorkoutPlan

        addWorkout(workoutPlanId: ID!, workoutInput: WorkoutInput!): WorkoutPlan
        removeWorkout(workoutPlanId: ID!, workoutId: ID!): WorkoutPlan

        addWorkoutGoal(workoutPlanId: ID!, workoutId: ID!, goalInput: GoalInput!): WorkoutPlan
        updateWorkoutGoal(workoutPlanId: ID!, workoutId: ID!, goalId: ID!, isComplete: Boolean!): WorkoutPlan
        addWorkoutProgress(workoutPlanId: ID!, workoutId: ID!, progressInput: ProgressInput!): WorkoutPlan

        updateProfilePic(profilePic: ProfilePicInput!): User
    }
`

module.exports = typeDefs;