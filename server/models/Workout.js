const { Schema } = require('mongoose');
const progressSchema = require('./Progress');

const workoutSchema = new Schema(
    {
        name: {
            type: String,

            // unique: true,
        },
        workoutId: {
            type: Number,
            // required: true,
            // unique: true,
        },
        bodyPart: {
            type: String,
            // required: true,
        },
        equipment: {
            type: String,
            // required: true,
        },
        gifUrl: {
            type: String,
            // required: true,
        },
        target: {
            type: String,
            // required: true,
        },
        secondary: {
            type: [String],
        },
        instructions: {
            type: [String],
            // required: true
        },
        progress: [progressSchema],
    }
);

module.exports = workoutSchema;