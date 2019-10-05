/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import {navigatorStyle, createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/AuthScreens/LoginScreen/LoginScreen';
import LogoutScreen from './screens/AuthScreens/LogoutScreen/LogoutScreen';
import RegisterScreen from './screens/AuthScreens/RegisterScreen/RegisterScreen';
import HomeScreen from './screens/OpenerScreens/HomeScreen/HomeScreen';
import CreateOpenerScreen from './screens/OpenerScreens/CreateOpenerScreen/CreateOpenerScreen';






export default class App extends React.Component {
  static navigatorStyle ={
    navBarHidden:true,
  }
  render(){
    return(
      <AppNavigator/>
    );
  }
}
const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  LogoutScreen:LogoutScreen,
  RegisterScreen:RegisterScreen,
  HomeScreen:HomeScreen,
  CreateOpenerScreen:CreateOpenerScreen,

})
const AppNavigator = createAppContainer(AppSwitchNavigator);



