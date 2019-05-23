import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';

import Notifikacija from './notifikacije'

const TabScreen = createMaterialTopTabNavigator(
  {
  'Aktivni ispiti': { screen: Notifikacija},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#376ff2',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#FFFFFF',
      },
      labelStyle: {
        textAlign: 'center',
        

      },
      indicatorStyle: {
        borderBottomColor: '#376ff2',
        borderBottomWkeyth: 2,
      },
    },
    navigationOptions: {
      header: props => <Notifikacija/>,
    }
  }
);
const IspitiTab = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    
  },
});

export default createAppContainer(IspitiTab);
