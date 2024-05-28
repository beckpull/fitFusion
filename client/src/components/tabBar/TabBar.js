import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MyProfile from '../../screens/MyProfile';
import MyWorkouts from '../../screens/MyWorkouts';
import AboutUs from '../../screens/AboutUs';
import Friends from '../../screens/Friends';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabBar() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#E76F51',
        shadowColor: 'transparent',
      },
    });
  }, [navigation]);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'MyProfile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'MyWorkouts') {
            iconName = focused ? 'fitness' : 'fitness-outline';
          } else if (route.name === 'AboutUs') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Friends') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#E76F51',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { display: 'flex' },
      })}
    >
      <Tab.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }} />
      <Tab.Screen name="MyWorkouts" component={MyWorkouts} />
      <Tab.Screen name="AboutUs" component={AboutUs} />
      <Tab.Screen name="Friends" component={Friends} />
    </Tab.Navigator>
  );
}