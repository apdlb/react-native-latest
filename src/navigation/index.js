import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../components';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
});

export default createAppContainer(MainNavigator);
