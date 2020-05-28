import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Shopping from './src/screens/Shopping';
import Cart from './src/screens/Cart';
import Payment from './src/screens/Payment';

const navigator = createStackNavigator({
  Online: Shopping,
  AddCart: Cart,
  Pay: Payment
}, {
  initialRouteName: "Online",
  defaultNavigationOptions: {
    title: ''
  }
});

const App = createAppContainer(navigator)

export default () => {
  return <App />;
};