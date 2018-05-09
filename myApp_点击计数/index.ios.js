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
  View
} from 'react-native';

export default class myApp extends Component {
  constructor(props){
    super(props)
    this.state = {clickTime:0}
  }

  //添加timePlus方法
  timePlus(){
    let times = this.state.clickTime
    times+=1
    this.setState({
      clickTime:times
    })
  }


  //生命周期输出
  componentWillMount(){
    console.log('组件将要装载!!!!!')
  }
  componentDidMount() {
    console.log('组件完成装载!!!!!')
  }
  shouldComponentUpdate() {
    console.log('组件检测到变化, 是否要更新?????')
    return true
  }
  componentWillUpdate() {
    console.log('组件将要更新!!!!!')
  }
  componentDidUpdate() {
    console.log('组件完成更新!!!!!')
  }


  //渲染
  render() {
    console.log('组件进行渲染!!!!!')

    return (
      <View style={styles.container}>
      <Text style={styles.textStyle} onPress={this.timePlus.bind(this)}>
      点我呀笨蛋!
      </Text>
      <Text style={styles.textStyle}>
      笨蛋你点了我{this.state.clickTime}次啦!
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:'#273645',
      height:100,
      width:300,
      
  },

    textStyle:{
      flex:1,
      fontSize:20,
      color:'#897876',
      alignContent:'center',
        
    },

});

AppRegistry.registerComponent('myApp', () => myApp);
