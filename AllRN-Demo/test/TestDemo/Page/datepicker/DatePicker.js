/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-09-16 09:24
 * @Profile:  DatePicker
 * @Project:  test

 * @Description:
 *
 */


import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import BaseComponent from '../BaseComponent/BaseComponent'

import { Picker, DatePicker } from 'react-native-wheel-pick'
import ByfDatePicker from '../../Component/ByfDatePicker/ByfDatePicker'

export default class DatePicker1 extends BaseComponent {


  constructor(props) {
    super(props)
    this.state = {date: new Date().getUTCDate()}
  }


  render() {
    return (
        <View style={style.container}>
          {this.renderNoLeftItemNaivgationBar('DatePicker')}


          <TouchableOpacity onPress={() => {
            let dataPicker = new ByfDatePicker()
            dataPicker.show((dateArr)=>{
              this.setState({
                date:dateArr[0]+dateArr[1]
              })
            });


          }}>
            <View style={{backgroundColor: '#090', height: 100, width: 100}}>
              <Text>{this.state.date}</Text>
            </View>
          </TouchableOpacity>

        </View>
    )
  }
}

const style = StyleSheet.create({
  container: {},
})
