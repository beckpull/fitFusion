const { Schema, model } = require('mongoose');
const workoutSchema = require('./Workout');

const workoutPlanSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        workouts: [workoutSchema],
    }
);

const WorkoutPlan = model('WorkoutPlans', workoutPlanSchema);

module.exports = WorkoutPlan;