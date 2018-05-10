/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
} from 'react-native';

import LoginView, { } from './login';

/**
 * 示例程序
 */

class demo3 extends Component{
  render(){
    return(
      <View style={styleDemo3.container}>
      <LoginView></LoginView>
      </View>
    );
  }
}


const styleDemo3 = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff'
  }
})

AppRegistry.registerComponent('myApp', () => demo3);
