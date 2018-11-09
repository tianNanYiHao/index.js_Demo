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

/**
 * items示例程序
 */

//导入Dimensions类库
var Dimensions = require('Dimensions');
//导入json数据
var jsonData = require('./ios/itemIcon.json');

//定义全局变量
var sceenW = Dimensions.get('window').width;
var itemW  = 100;
var itemH  = 100;
var cols   = 3;
var colSpace = (sceenW - itemW*cols)/(cols+1);
var rowSpace = 25;

class demo3 extends Component{
  render(){
    return(
      <View style={styleDemo3.container}>
      {/*返回item*/}
      {this.showItems()}
      </View>
    );
  }

  

  //返回所有的item
  showItems(){
    let itemArr = [];
    for(let i = 0 ; i< jsonData.data.length;i++){
      let obj = jsonData.data[i];
      //itemArr添加
      itemArr.push(
        <View key={i} style={styleDemo3.itemContainer}>
          <Image style={styleDemo3.imageStyle} source={{uri:obj.iconName}}></Image>
          <Text style={styleDemo3.textStyle}>{obj.title}</Text>

        </View>
      );
    }
    return itemArr;

  }
}
 
const styleDemo3 = StyleSheet.create({


  container:{
    backgroundColor: 'white',
    flexDirection:'row',
    flexWrap:'wrap', 
    
  },

  itemContainer:{

    backgroundColor:'gray',
    alignItems: 'center',
    marginTop: rowSpace,
    marginLeft: colSpace,
    width:itemW,
    height:itemW,
  },
  imageStyle:{
    marginTop:10,
    width:48,
    height:48,
  },
  textStyle:{
    marginTop:10,
  }
})



AppRegistry.registerComponent('myApp', () => demo3);
