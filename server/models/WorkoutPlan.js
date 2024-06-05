const { Schema, model } = require('mongoose');
const workoutSchema = require('./Workout');

const workoutPlanSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            // unique: true,
        },
        goal: {
            type: String,
            required: true,         
        },
        isRecommended: {
            type: Boolean,
            default: false,
        },
        workouts: [workoutSchema],
    }
);

const WorkoutPlan = model('WorkoutPlan', workoutPlanSchema);

module.exports = WorkoutPlan;
