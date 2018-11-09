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

/*第一个示例程序*/
export default class myApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textOne}>我是消防栓!</Text>
        <Text style={styles.textTwo}>我是垃圾桶!</Text>
        <Text style={styles.textThree}>我是路灯灯!</Text>
        <Text style={styles.textFour}>我是邮筒子!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3583f4',
    flexDirection:'row',
    marginTop:125,
    height: 90,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  textOne:{
    backgroundColor:'#099872',
    height:10,
    height: 45,
    fontSize:15,
    
  },
  textTwo:{
    backgroundColor:'#786e35',
    height: 45,
    fontSize:15,
    
  },
  textThree:{
    backgroundColor:'#00098f', 
    height: 45,
    fontSize:15,
    
  },
  textFour:{
    backgroundColor:'#996e52',
    height: 45,
    fontSize:15,
    
  },


});
/**
 * 第二个示例程序
 */

class demo1 extends Component {
  state = {  }
  render() {
    return (
      <View style={stylesDemo1.container}>
        <Text style={{ height:30,  height: 23,backgroundColor:'#092'}}>我的女神经!</Text>
        <Text style={{ height: 193,backgroundColor:'#f32'}}>我的女神经!</Text>
        <Text style={{ height: 73,backgroundColor:'#1ff'}}>我的女神经!</Text>
        <Text style={{ height: 223,backgroundColor:'#c09'}}>我的女神经!</Text>
      </View>
    );
  }
}

// export default demo1;

const stylesDemo1 = StyleSheet.create({
  container:{
    marginTop:100,
    backgroundColor:'#938762',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'flex-end',
    flexWrap:'wrap',
    
  },
});
/**
 * 第三个示例程序
 */

//引入第三方类库
import Dimensions,{ get } from "Dimensions";

class Demo2 extends Component{
  render(){
    return(
      <View style={stylesDemo2.container}>
          <Text style={{ height: 23,backgroundColor:'#092'}}>我的女神经!</Text>
          <Text style={{ height: 193,backgroundColor:'#f32'}}>我的女神经!</Text>
          <Text style={{ height: 73,backgroundColor:'#1ff',alignSelf:'flex-start'}}>我的女神经!</Text>
          <Text style={{ height: 223,backgroundColor:'#c09'}}>我的女神经!</Text>
          <Text style={{ height: 100,backgroundColor:'#890'}}>屏幕宽度:{get('window').width}</Text>
          <Text style={{ height: 100,backgroundColor:'#890'}}>屏幕高度:{get('window').height}</Text>
        </View>
    );
  }
}

const stylesDemo2 = StyleSheet.create({
  container:{
    marginTop:100,
    backgroundColor:'green',
    height:300,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    flexWrap:'wrap',
  },

})

AppRegistry.registerComponent('myApp', () => Demo2);
