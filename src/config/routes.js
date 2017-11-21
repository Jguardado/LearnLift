/*
NOTE: The beauty of navigator is that you can nest your various naviagtions
however youd like. For example, I can nest a StackNavigator in my Root
TabNavigator. In that StackNavigator I cna tehn nest a DrawerNavigator, and so
on an so forth
*/

import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';
import { Icon } from 'react-native-elements';

// Screens
// import Landing from '../components/Landing';
import ContentPage from '../components/ContentPage';
import Workouts from '../components/Workouts';
import Equipment from '../components/Equipment';
import Mindset from '../components/Mindset';
// import Movements from '../screens/Movements';

// NOTE: Routes/Navigators
export const DetailsTabs = TabNavigator({
  Mindset: {
    screen: Mindset,
  },
  Equipment: {
    screen: Equipment,
  },
}, {
  tabBarPosition: 'top',
});

export const SystemStack = StackNavigator({
  Workouts: {
    screen: Workouts,
    navigationOptions: {
      title: 'Workouts',
    },
  },
  Movements: {
    screen: DetailsTabs,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.exercise.toUpperCase()}`,
    }),
  },
});

export const Pages = StackNavigator({
  Workouts: {
    screen: SystemStack,
    navigationOptions: {
      title: 'Explore',
    },
  },

},
{
  headerMode: 'none',
});

export const Root = TabNavigator({
  Homet: {
    screen: ContentPage,
    tabBarIcon: ({ tintColor }) => <Icon
      reverse
      name='ios-american-football'
      type='ionicon'
      color='#517fa4'
    />,
    tabBarLabel: 'Home',
  },
  Pages: {
    screen: Pages,
  },
}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default Root;
