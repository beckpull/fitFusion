const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    age: {
        type: Number,
        // required: true,
    },
    height: {
        type: Number,
        // required: true,
    },
    weight: {
        type: Number,
        // required: true,
    },
    gender: {
        type: String,
        // required: true,
    },
    level: {
        type: String,
        // required: true,
    },
    calories: {
        type: Number,
    },
    profilePic: {
      data: String,
      contentType: String,
    },
    workoutPlans: [
      {
        type: Schema.Types.ObjectId,
        ref: 'WorkoutPlan'
      }
    ],
    recommendedPlans: [
      {
          type: Schema.Types.ObjectId,
          ref: 'WorkoutPlan'
      }
  ]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;