const { User, WorkoutPlan } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      const foundUser = await User.findOne({
        _id: context.user._id
      });
      // return User.findOne({ _id: context.user._id });

      if (!foundUser) {
        console.log("no found user");
      }

      return foundUser;
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password, country, birthDate, age, height, weight, gender, level, calories }) => {
      const user = await User.create({ username, email, password, country, birthDate, age, height, weight, gender, level, calories});
      const token = signToken(user);

      return { token, user };
    },

    addUserSecondScreen: async (parent, { age, height, weight, gender, level, calories }, context) => {
      if (context.user) {
        const updatedUserFromForm = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: { age, height, weight, gender, level, calories } },
          { new: true }
        );
        if (!updatedUserFromForm) {
          throw new Error('No user found with this id!');
        }
        return updatedUserFromForm;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateUserImage: async (parent, { imageUrl }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          {  _id: context.user._id  },
          { $set: { imageUrl: imageUrl } },
          { new: true }
        );

        if (!updatedUser) {
          throw new Error('No user found with this id!');
        }

        return updatedUser;
      }

      throw AuthenticationError;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      console.log("logged in");
      return { token, user };
    },

    addWorkoutPlan: async (parent, { name }, context) => {
      if (context.user) {
        const workoutPlan = await WorkoutPlan.create({
          name
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { workoutPlans: workoutPlan } }
        );

        return workoutPlan;
      }
      throw AuthenticationError;
    },

    updateWorkoutPlan: async (parent, { workoutPlanId, name }, context) => {
      if (context.user) {
        const workoutPlan = await WorkoutPlan.findOneAndUpdate(
          { _id: workoutPlanId },
          { name },
          { new: true }
        )

        return workoutPlan;
      }
      throw AuthenticationError;
    },

    removeWorkoutPlan: async (parent, { workoutPlanId }, context) => {
      if (context.user) {
        const workoutPlan = await WorkoutPlan.findOneAndDelete({
          _id: workoutPlanId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { workoutPlans: workoutPlan._id } }
        );

        return workoutPlan
      }
      throw AuthenticationError;
    },

    addWorkout: async (parent, { workoutPlanId, workoutInput }, context) => {
      if (context.user) {
        return await WorkoutPlan.findOneAndUpdate(
          { _id: workoutPlanId },
          {
            $addToSet: { workouts: workoutInput },
          },
          { new: true, runValidators: true }
        )
      }
      throw AuthenticationError;
    },

    removeWorkout: async (parent, { workoutPlanId, workoutId }, context) => {
      if (context.user) {
        return await WorkoutPlan.findOneAndUpdate(
          { _id: workoutPlanId },
          {
            $pull: {
              workouts: { _id: workoutId }
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError
    },

    addWorkoutProgress: async (parent, { workoutPlanId, workoutId, progressInput }, context) => {
      if (context.user) {
        return await WorkoutPlan.findOneAndUpdate(
          { _id: workoutPlanId, 'workouts._id': workoutId },
          {
            $push: { 'workouts.$.progress': progressInput }
          },
          { new: true, runValidators: true }
        );
      }
      throw AuthenticationError
    },
  },
};

module.exports = resolvers;