import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MyProfile from '../../screens/MyProfile';
import MyWorkouts from '../../screens/MyWorkouts';
import MyProgress from '../../screens/MyProgress';
import Blog from '../../screens/Blog';
import { useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../styles/colors';
import LogoutButton from './LogoutButton';
import LanguageToggle from './LanguagesToggle';
import { I18nContext } from '../../../App';

const Tab = createBottomTabNavigator();

export default function TabBar() {
  const navigation = useNavigation();

  const { i18n } = useContext(I18nContext);
  // console.log('i18n from the TabBar : ', i18n);
  // console.log(i18n.t('welcome'));
  // console.log(i18n.t('workouts'));
  // console.log('calling useEffect from outside the TabBar');
  useEffect(() => {
    console.log('calling useEffect from TabBar inside the useEffect');

    if(i18n){
      console.log('i18n.locale: ', i18n.locale);
      navigation.setOptions({
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#FFF',
          shadowColor: 'transparent',
        },
        headerRight: () => <LogoutButton />,
        headerLeft: () => <LanguageToggle i18n={i18n} />,
      });
    }
    }, [i18n, navigation]);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'MyProfile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'MyWorkouts') {
            iconName = focused ? 'fitness' : 'fitness-outline';
          } else if (route.name === 'MyProgress') {
            iconName = focused ? 'trending-up' : 'stats-chart-outline';
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
      <Tab.Screen 
        name="MyWorkouts" 
        component={MyWorkouts} 
        options={{ headerLeft: () => <LanguageToggle i18n={i18n} /> }}
        />
      <Tab.Screen 
        name="Blog" 
        component={Blog} 
        options={{ headerLeft: () => <LanguageToggle i18n={i18n} /> }}
        />
      <Tab.Screen 
        name="MyProgress" 
        component={MyProgress}
        options={{ headerLeft: () => <LanguageToggle i18n={i18n} /> }} 
        />
      <Tab.Screen 
        name="MyProfile" 
        component={MyProfile} 
        options={{ headerLeft: () => <LanguageToggle i18n={i18n} />, headerShown: false }} 
        />
    </Tab.Navigator>
  );
}