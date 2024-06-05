import React, { useEffect, useCallback, useContext } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useFocusEffect } from '@react-navigation/native';
import UserPlan from '../components/workoutPlans/UserPlan';
import RecommendedPlan from '../components/workoutPlans/RecommendedPlan';
import ButtonAddPlan from '../components/workoutPlans/ButtonAddPlan';
import '../styles/Workout.css';
import { I18nContext } from '../../App';


const WorkoutPlan = ({ navigation }) => {
  const { i18n } = useContext(I18nContext);
  const { loading, error, data, refetch } = useQuery(GET_ME);
  console.log("GET_ME ", data);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  if (loading) return <Text>{i18n.t('Loading')}...</Text>;

  if (error) {
    console.log(error);
    // return <Text>Error: {error.message}</Text>;
  }

  const { me: { workoutPlans, recommendedPlans } } = data;
  // console.log(recommendedPlans[0]._id);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Render user's plans */}
        <Text style={styles.yourPlans}>{i18n.t('Your Plans')}</Text>
        {workoutPlans && workoutPlans.length > 0 ? (
          workoutPlans.map((plan) => (
            <UserPlan key={plan._id} planId={plan._id} name={plan.name} goal={plan.goal} workouts={plan.workouts} />
           ))
        ) : <Text style={styles.noPlan}>{i18n.t(`You don't have any workout plans yet! Here are our recommended plans to get you started - or add one of your own`)}!</Text>}

        {/* Render recommended plans */}
        <Text style={styles.recommendedPlans}>{i18n.t('Recommended Plans')}</Text>
        {recommendedPlans && recommendedPlans.length > 0 ? (
          recommendedPlans.map((plan) => (
            <RecommendedPlan key={plan._id} planId={plan._id} name={plan.name} goal={plan.goal} workouts={plan.workouts} />
          ))
        ) : <Text>{i18n.t('No recommended plans available')}.</Text>}

      </ScrollView>
      <View style={styles.buttonContainer}>
        <ButtonAddPlan navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  scrollContainer: {
    paddingBottom: 70, // Ensure enough padding at the bottom to avoid the button being covered
    alignItems: 'center',
  },
  recommendedPlans: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  yourPlans: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  noPlan: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10, // Ensure the button stays above other content
  }
});

export default WorkoutPlan;
