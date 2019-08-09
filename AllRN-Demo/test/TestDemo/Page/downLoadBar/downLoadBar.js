/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-08-06 13:50
 * @Profile:  downLoadBar
 * @Project:  test

 * @Description:
 *
 */

import React, {} from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  PanResponder,
  Animated, Easing,
} from 'react-native'



import BaseComponent from '../BaseComponent/BaseComponent'
import SlideMoveBar from '../../Component/SlideMoveBar/SlideMoveBar'
import { Images } from '../../src'
import SwitchButton from '../../Component/Switchbutton/SwitchButton'
import DownLoadBar from '../../Component/DownLoadBar/DownLoadBar'
import PrettyLog from '../../Common/PrettyLog'

export default class SlideMoveBarPage extends BaseComponent {

  constructor(props) {
    super(props)
    this.a = 0
    this.state = {
      currentIndex: -1,
    }
  }


  componentWillMount() {
    PrettyLog.yellowLog('============')
  }

  render() {
    return (
        <View>
          {this.renderNomalNavigationBar('下载进度条')}
          <DownLoadBar currentItem={0.7} type={'lineBar'}/>
          <DownLoadBar currentItem={this.state.currentIndex}/>
          <TouchableOpacity style={{backgroundColor: 'red', width: 100, height: 100}} onPress={() => {
            if (this.a ===10){
              return
            }
            this.a +=1;
            this.setState({
              currentIndex:this.a,
            })
          }}/>
        </View>
    )
  }


  /**************************************** Description ****************************************/

}
