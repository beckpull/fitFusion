import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MyProfile from '../../screens/MyProfile';
import MyWorkouts from '../../screens/MyWorkouts';
import AboutUs from '../../screens/AboutUs';
import Blog from '../../screens/Blog';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../styles/colors';
import LogoutButton from './LogoutButton';

const Tab = createBottomTabNavigator();

export default function TabBar() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#FFF',
        shadowColor: 'transparent',
      },
      headerRight: () => <LogoutButton />,
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
          } else if (route.name === 'Blog') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primaryVariant,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { display: 'flex' },
      })}
    >
      <Tab.Screen name="MyWorkouts" component={MyWorkouts} />
      <Tab.Screen name="Blog" component={Blog} />
      <Tab.Screen name="AboutUs" component={AboutUs} />
      <Tab.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}