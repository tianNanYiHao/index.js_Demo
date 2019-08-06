/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-08-06 13:54
 * @Profile:  DownLoadBar
 * @Project:  test

 * @Description:
 *
 */


import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet, Dimensions,
  FlatList,

} from 'react-native'
import PrettyLog from '../../Common/PrettyLog'

/***************** 工具属性 *****************/
const defaultHeight = 667
const defaultWidth = 375
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const fixHeight = (h) => {
  return h * (height / defaultHeight)
}

const fixWidth = (w) => {
  return w * (width / defaultWidth)
}


export default class DownLoadBar extends Component {


  static defaultProps = {
    DLLeft: fixWidth(20),
    DLTop: fixHeight(40),
    DLWidth: fixWidth(180),
    DLHeight: fixHeight(30),
    SpaceItemCount: 10, // 格子个数

    currentItem: -1,

  }

  constructor(props) {
    super(props)
    this.borderWidth = 3
    this.DLInlineViewW = props.DLWidth - 2 * this.borderWidth
    this.DLInlineViewH = props.DLHeight - 2 * this.borderWidth
    this.DLInlineBorderWidth = 2
    this.DLInlineViewInW = this.DLInlineViewW - 2 * this.DLInlineBorderWidth
    this.DLInlineViewInH = this.DLInlineViewH - 2 * this.DLInlineBorderWidth
    this.DLInlIneSpace = fixWidth(2)
    this.spaceItemW = (this.DLInlineViewInW - this.DLInlIneSpace * props.SpaceItemCount) / props.SpaceItemCount
    this.spaceItemH = this.DLInlineViewInH
    this.orignData = [
      {color: '#001'},
      {color: '#002'},
      {color: '#003'},
      {color: '#004'},
      {color: '#005'},
      {color: '#006'},
      {color: '#007'},
      {color: '#008'},
      {color: '#009'},
      {color: '#009'},
    ]
    this.newData = []
    this.state = {}

  }

  getCurrent() {
    if (this.props.currentItem < 0) {
      this.newData = []
    }
    else if (this.props.currentItem === 10){
      this.newData = this.orignData;
    }
    else {
      this.newData.push(this.orignData[this.props.currentItem])
    }
  }


  render() {

    /*更新当前状态*/
    this.getCurrent()
    return (
        <View style={{
          width: this.props.DLWidth,
          height: this.props.DLHeight, borderWidth: this.borderWidth,
          borderColor: '#000000', borderRadius: this.borderWidth,
          marginLeft: this.props.DLLeft, marginTop: this.props.DLTop,
          backgroundColor: '#000000',
        }}>
          <View style={{
            backgroundColor: '#B0E0E6', height: this.DLInlineViewH, width: this.DLInlineViewW,
            borderWidth: this.DLInlineBorderWidth, borderColor: '#B0E0E6', borderRadius: this.DLInlineBorderWidth,
            flexDirection: 'row',
          }}>
            <FlatList
                style={{height: this.DLInlineViewInH, width: this.DLInlineViewInW, flexDirection: 'row'}}
                data={this.newData}
                renderItem={({item}) =>
                    <View style={{
                      height: this.spaceItemH, width: this.spaceItemW, backgroundColor: item.color, marginLeft: this.DLInlIneSpace,
                      borderRadius: 3,
                    }}/>
                }
                horizontal={true}
                keyExtractor={(item, index) => index}
            />

          </View>
        </View>

    )
  }

  renderItem(is) {
    return (
        <View style={{
          height: this.spaceItemH, width: this.spaceItemW, backgroundColor: '#fff', marginLeft: is ? 0 : this.DLInlIneSpace,
          borderRadius: 3,
        }}/>
    )
  }
}

/**************************************** cell ****************************************/
class CellView extends Component {

  static defaultProps = {
    color: '#090',
  }

  render() {
    return (
        <View style={{
          height: 20, width: 10, backgroundColor: '#00faed', marginLeft: 0,
          borderRadius: 3,
        }}/>
    )
  }
}
