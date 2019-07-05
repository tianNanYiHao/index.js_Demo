/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-07-04 17:10
 * @Profile:  SwitchButton
 * @Project:  test

 * @Description:
 *
 */


import React, {Component} from 'react'
import {
  Text,
  Button,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  View,
  StyleSheet, Dimensions,
  Easing,
} from 'react-native'

import PropTypes from 'prop-types'

export default class SwitchButton extends Component {

  static propTypes = {
    currentState: PropTypes.bool,
    changState: PropTypes.any,
  }

  static defaultProps = {
    currentState: false, // 当前按钮状态, 默认false

  }

  constructor(props) {
    super(props)
    this.state = {
      circleMarginLeft: new Animated.Value(fixHeight(1)),
      backgroundColorForOpen: '#999999', //开启/关闭状态颜色
      openFlag: props.currentState,
    }
  }

  componentDidMount() {
    if (this.props.currentState) {
      this.open()
    } else {
      this.close()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentState) {
      this.open()
    } else {
      this.close()
    }
  }


  render() {
    return (
        <TouchableWithoutFeedback onPress={() => this.touchItme()}>
          <View style={[styles.baseView, {backgroundColor: this.state.backgroundColorForOpen}]}>
            <Animated.View style={[styles.circle, {
              marginLeft: this.state.circleMarginLeft,
            }]}/>
          </View>
        </TouchableWithoutFeedback>
    )
  }

  /**************************************** 事件 ****************************************/
  touchItme() {
    let openFlag = !this.state.openFlag
    if (openFlag) {
      this.open()
      this.props.changState(true)
    }
    else {
      this.close()
      this.props.changState(false)
    }
  }


  open() {
    this.openAnimation()
    this.setState({
      backgroundColorForOpen: '#3968FF',
      openFlag: true,
    })
  }

  close() {
    this.closeAnimation()
    this.setState({
      backgroundColorForOpen: '#999999',
      openFlag: false,
    })
  }


  /***************** action *****************/

  openAnimation() {
    Animated.timing(this.state.circleMarginLeft, {
      toValue: fixHeight(19),
      duration: 200,
      easing: Easing.bezier(0.44, 0.07, 0.87, 0.34),
    }).start()
  }

  closeAnimation() {
    Animated.timing(this.state.circleMarginLeft, {
      toValue: fixHeight(1),
      duration: 200,
      easing: Easing.bezier(0.44, 0.07, 0.87, 0.34),
    }).start()
  }


}

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


const styles = StyleSheet.create({
  baseView: {
    width: fixHeight(40),
    height: fixHeight(22),
    borderRadius: fixHeight(11),
    justifyContent: 'center',
  },
  circle: {
    width: fixHeight(20),
    height: fixHeight(20),
    borderRadius: fixHeight(10),
    backgroundColor: '#fff',
  },
})
