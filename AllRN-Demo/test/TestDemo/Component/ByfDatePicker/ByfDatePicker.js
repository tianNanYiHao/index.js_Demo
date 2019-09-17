/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-09-16 11:02
 * @Profile:  ByfDatePicker
 * @Project:  test

 * @Description: 封装的宝易付datePicker
 *
 */


import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Overlay,Theme } from 'teaset'
import { Picker, DatePicker } from 'react-native-wheel-pick'
// https://github.com/TronNatthakorn/react-native-wheel-pick.git 注意改gradle中的依赖关键字compile
/*
* npm install react-native-wheel-pick
* react-native link react-native-wheel-pick
* */



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

/**************************************** 主代码 ****************************************/

class DatePickerComponent extends Component {

  static defaultProps = {
    cancle: function () {
    },
    over: function () {
    },
  }

  constructor(props) {
    super(props)
    let currentyear = new Date().getFullYear();
    let currentMonty = (new Date().getMonth() + 1);
    this.state = {
      dateYear: currentyear + '年',
      dateMonth: currentMonty < 10 ? '0' + currentMonty +'月': currentMonty+'月',
    }

    let yealHalf=[];
    let get_yealHalf_a = () => {
      for (let i = 10; i >0; i--) {
        let a = currentyear-i + "年";
        yealHalf.push(a)
      }
    }
    let get_yealHalf_b = () => {
      for (let i = 1; i < 10; i++) {
        let a = currentyear+i+"年";
        yealHalf.push(a)
      }
    }

    get_yealHalf_a();
    yealHalf.push(currentyear+'年');
    get_yealHalf_b();
    this.year= yealHalf;
  }

  render() {
    return (
        <View style={{backgroundColor: '#fff', width: width, height: fixHeight(64 + 375)+Theme.statusBarHeight}}>
          {this.renderNav()}
          {this.renderDate()}
          {this.renderDatePicker()}

        </View>
    )
  }

  // 导航条
  renderNav() {
    return (
        <View>
          <View style={{width:width,height:Theme.statusBarHeight}}/>

          <View style={{
            height: fixHeight(64), width: width, backgroundColor: '#fff', paddingHorizontal:fixWidth(14),
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderColor: '#EFEFEF', borderBottomWidth: 0.8,
          }}>

            <TouchableOpacity onPress={() => {
              this.props.cancle(1)
            }}>
              <Text style={[style.textNav, []]}>取消</Text>
            </TouchableOpacity>

            <Text style={{color: '#000', fontSize: 18}}>选择时间</Text>

            <TouchableOpacity onPress={() => {
              this.props.over([this.state.dateYear,this.state.dateMonth])
            }}>
              <Text style={[style.textNav, []]}>完成</Text>
            </TouchableOpacity>

          </View>
        </View>
    )
  }

  // 所选日期展示
  renderDate() {
    return (
        <View style={{backgroundColor: '#fff', alignItems: 'center', width: width, marginTop: fixHeight(29), justifyContent: 'space-between'}}>
          <Text style={style.textNav}>{this.state.dateYear + '-' + this.state.dateMonth}</Text>
          <View style={{marginTop: fixHeight(9), backgroundColor: '#3977FF', width: fixWidth(251), height: 0.8}}/>
        </View>
    )
  }

  // 日期选择
  renderDatePicker() {
    return (
        <View style={{flexDirection: 'row', marginTop: fixHeight(43)}}>
          <Picker
              style={{width: width / 2, height: fixHeight(200), backgroundColor: '#fff'}}
              selectedValue={this.state.dateYear}
              textSize={17}
              pickerData={this.year}
              onValueChange={value => {
                this.setState({
                  dateYear:value,
                })
              }}
              itemSpace={40} // this only support in android
          />
          <Picker
              style={{width: width / 2, height: fixHeight(200), backgroundColor: '#fff'}}
              selectedValue={this.state.dateMonth}
              textSize={17}
              pickerData={['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月']}
              onValueChange={value => {
                this.setState({
                  dateMonth:value,
                })
              }}
              itemSpace={40} // this only support in android
          />
        </View>

    )

  }

}

const style = StyleSheet.create({
  textNav: {
    color: '#3977FF',
    fontSize: 16,
  },
})


class ByfDatePicker {

  constructor() {
    this.key = ''
    this.overLayView = ''
  }

  show(callback) {
    this.overLayView = (
        <Overlay.View
            style={{flexDirection: 'column', alignItems: 'center'}}
            modal={false}
            animated={true}
            overlayOpacity={0.4}
        >
          <DatePickerComponent
              cancle={(param) => {
                callback(null);
                this.hidden()
              }}
              over={(param) => {
                callback(param);
                this.hidden()
              }}
          />
        </Overlay.View>
    )
    this.key = Overlay.show(this.overLayView)
  }

  hidden() {
    if (this.key) {
      Overlay.hide(this.key)
      this.key = null
    }
  }
}


export default ByfDatePicker


