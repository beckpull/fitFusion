const { User, WorkoutPlan } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { DateResolver } = require ('graphql-scalars');

const resolvers = {
  Date: DateResolver,
  Query: {
    me: async (parent, args, context) => {
      const foundUser = await User.findOne({ _id: context.user._id })
        .populate('workoutPlans')
        .populate('recommendedPlans');

      if (!foundUser) {
        console.log("no found user");
      }
      console.log(foundUser);
      return foundUser;
    },

    // OKAY TO DELETE THIS LATER
    allUsers: async () => {
      return await User.find({});
    },

    myWorkoutPlans: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in');
      }

      const foundUser = await User.findOne({ _id: context.user._id }).populate('workoutPlans');

      if (!foundUser) {
        throw new Error('User not found');
      }

      return foundUser.workoutPlans;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, country, birthDate, height, weight, gender, level, calories }) => {
      try {
        // Create the user
        const user = await User.create({ username, email, password, country, birthDate, height, weight, gender, level, calories });
    
        // Find recommended plans
        const recommendedPlans = await WorkoutPlan.find({ isRecommended: true }).select('_id');
        recommendedPlans && recommendedPlans.length > 0 ? console.log(recommendedPlans) : console.log("No plans found to seed");
        // Extract plan IDs
        const recommendedPlanIds = recommendedPlans.map(plan => plan._id);
    
        // Attach recommended plans to the user
        user.recommendedPlans = recommendedPlanIds;
    
        // Save the user
        await user.save();
    
        console.log('User created successfully with recommended plans attached.');
        
        // Generate token for the user
        const token = signToken(user);
    
        // Return token and user object
        return { token, user };
      } catch (error) {
        console.error('Error creating user:', error);
        // Handle error appropriately, maybe throw an error or return an error message
        throw new Error('Failed to create user');
      }
    },
    

    addUserSecondScreen: async (parent, { height, weight, gender, level, calories }, context) => {
      if (context.user) {
        const updatedUserFromForm = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: { height, weight, gender, level, calories } },
          { new: true }
        );
        if (!updatedUserFromForm) {
          throw new Error('No user found with this id!');
        }
        return updatedUserFromForm;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateProfilePic: async (parent, { profilePic }, context) => {
      if (context.user) {
        const { data, contentType } = profilePic;

        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            profilePic: {
              data,
              contentType,
            },
          },
          { new: true }
        );
        return User;
      }

      throw AuthenticationError
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

    addWorkoutPlan: async (parent, { name, goal, date }, context) => {

      if (context.user) {
        const workoutPlan = await WorkoutPlan.create({

          name,
          goal,
          isRecommended: false
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { workoutPlans: workoutPlan } },

        );

        return workoutPlan;

      }
      throw AuthenticationError;
    },

    updateWorkoutPlan: async (parent, { workoutPlanId, name, goal }, context) => {
      if (context.user) {
        const workoutPlan = await WorkoutPlan.findOneAndUpdate(
          { _id: workoutPlanId },
          { name, goal },
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
          { $pull: { workoutPlans: workoutPlan._id } },

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

    addWorkoutGoal: async (parent, { workoutPlanId, workoutId, goalInput }, context) => {
      if (context.user) {
        return await WorkoutPlan.findOneAndUpdate(
          { _id: workoutPlanId, 'workouts._id': workoutId },
          {
            $push: { 'workouts.$.goal': goalInput }
          },
          { new: true, runValidators: true }
        );
      }
      throw AuthenticationError
    },

    updateWorkoutGoal: async (parent, { workoutPlanId, workoutId, goalId, isComplete }, context) => {
      if (context.user) {
        return await WorkoutPlan.findOneAndUpdate(
          { _id: workoutPlanId, 'workouts._id': workoutId, 'workouts.goal._id': goalId },
          {
            $set: { 'workouts.$[workout].goal.$[goal].isComplete': isComplete }
          },
          { 
            new: true, 
            arrayFilters: [
              { 'workout._id': workoutId },
              {'goal._id': goalId }
            ],
            runValidators: true }
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