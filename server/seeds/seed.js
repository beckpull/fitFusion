const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const WorkoutPlan = require('../models/WorkoutPlan');
const recommendedPlans = require('./recommendedPlans');

recommendedPlans && recommendedPlans.length > 0 ? console.log(recommendedPlans) : console.log("no data");

mongoose.connect('mongodb://localhost:27017/fitfusion', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedRecommendedPlans = async () => {
  try {
    await WorkoutPlan.deleteMany({ isRecommended: true });

    const plans = recommendedPlans.map(plan => {
      // Generate new ObjectId for each workout in the plan
      const workouts = plan.workouts.map(workout => ({
        ...workout,
        _id: new ObjectId(),
      }));

      return {
        ...plan,
        workouts,
        isRecommended: true,
      };
    });

    const insertedPlans = await WorkoutPlan.insertMany(plans);
    console.log(insertedPlans, 'Recommended plans seeded!');
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};

seedRecommendedPlans();
