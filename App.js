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
import RegisterScreen from './screens/AuthScreens/RegisterScreen/RegisterScreen';
import HomeScreen from './screens/HomeScreen';






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
  RegisterScreen:RegisterScreen,
  HomeScreen:HomeScreen,

})
const AppNavigator = createAppContainer(AppSwitchNavigator);



