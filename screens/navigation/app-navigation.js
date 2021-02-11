import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {Appbar} from 'react-native-paper';
import styled from 'styled-components/native';
import styles from './app-navigation-styles';

//importing screens
import Home from '../home';
import Schedule from '../schedule';
import AddBudget from '../budget/add-budget';
import Guests from '../guests';

const Tabs = AnimatedTabBarNavigator();

const Screen = styled.View`
  flex: 1;
  ${'' /* justify-content: center;
  align-items: center; */}
  background-color: #f2f2f2;
`;

const Logo = () => (
  <Image
    source={require('../../assets/images/logo.png')}
    resizeMode={'cover'}
    style={{width: 150, height: 150}}
  />
);

const TabBarIcon = (props) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};

const HomeScreen = (props) => (
  <Screen>
    <Home />
  </Screen>
);

const Discover = (props) => (
  <Screen>
    <Schedule />
  </Screen>
  // <Screen>
  //   <Logo />
  //   <Text>Discover</Text>
  //   <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
  //     <Text>Go to Home</Text>
  //   </TouchableOpacity>
  // </Screen>
);

const Images = () => (
  <Screen>
    <AddBudget />
  </Screen>
);

const Profile = () => (
  <Screen>
    <Logo />
    <Text>Profile</Text>
  </Screen>
);

export default () => (
  <Tabs.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeBackgroundColor: '#EE6080',
    }}
    appearence={{
      floating: true,
      tabBarBackground: '#ffffff',
    }}>
    <Tabs.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused, color}) => (
          <TabBarIcon focused={focused} tintColor={color} name="home" />
        ),
      }}
    />
    <Tabs.Screen
      name="Schedule"
      component={Discover}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <TabBarIcon focused={focused} tintColor={color} name="list" />
        ),
      }}
    />
    <Tabs.Screen
      name="Budget"
      component={Images}
      options={{
        tabBarIcon: ({focused, color}) => (
          <TabBarIcon focused={focused} tintColor={color} name="image" />
        ),
      }}
    />
    <Tabs.Screen
      name="Guests"
      component={Guests}
      options={{
        tabBarIcon: ({focused, color}) => (
          <TabBarIcon focused={focused} tintColor={color} name="users" />
        ),
      }}
    />
  </Tabs.Navigator>
);
