/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-06 11:16
 * @Profile:  ResponderDemo
 * @Project:  test

 * @Description: 手势操作demo
 *
 */


import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    Text,
    View,
    Platform,
    PanResponder,
    Animated,
    Easing,
    TouchableHighlight,
    TouchableOpacity

} from 'react-native';
import BaseComponent from "../BaseComponent/BaseComponent";
import pxdp from "../../Common/pxdp";




export default class ResponderDemo extends BaseComponent {


    constructor(props) {
        super(props);

        this.state = {
            isHeightShow: false, //小圆点在触发手势后,是否变色响应
            marginLeft: 0, //小圆点的左外边距
            marginTop: 0,  //小圆点的顶外边距
        };
    }


    componentWillMount() {
        this.panResponder = PanResponder.create({

            /***************** 要求成为响应者 *****************/
            // 单机手势是否可以成为响应者
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            // 移动手势是否可以成为响应者
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            // 拦截子组件的单击手势传递,是否拦截
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            // 拦截子组件的移动手势传递,是否拦截
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,


            /***************** 响应者事件回调处理 *****************/
            // 单击手势监听回调
            onPanResponderGrant: (e, gestureState) => {
                console.log('onPanResponderGrant==>' + '单击手势申请成功,开始处理手势')
                this._onPanResponderGrant()
            },
            // 移动手势监听回调
            onPanResponderMove: (e, gestureState) => {
                console.log('onPanResponderMove==>' + '移动手势申请成功,开始处理手势' + `${gestureState}`)
                this._onPanResponderMove(e);
            },
            // 手势动作结束回调
            onPanResponderEnd: (evt, gestureState) => {
                console.log('onPanResponderEnd==>' + '手势操作完成了,用户离开')
                this._onPanResponderEnd(evt)
            },
            // 手势释放, 响应者释放回调
            onPanResponderRelease: (e) => {
                // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
                // 一般来说这意味着一个手势操作已经成功完成。
                console.log('onPanResponderRelease==>' + '放开了触摸,手势结束')
            },
            // 手势申请失败,未成为响应者的回调
            onResponderReject: (e) => {
                // 申请失败,其他组件未释放响应者
                console.log('onResponderReject==>' + '响应者申请失败')
            },

            // 当前手势被强制取消的回调
            onPanResponderTerminate: (e) => {
                // 另一个组件已经成为了新的响应者，所以当前手势将被取消
                console.log('onPanResponderTerminate==>' + '由于某些原因(系统等)，所以当前手势将被取消')
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
                // 默认返回true。目前暂时只支持android。
                return true;
            },
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>

                {this.renderNomalNavigationBar('触摸响应页')}

                <TouchableOpacity
                    onPress={()=>this.enterPenresnponderShow()}
                    style={{backgroundColor:'#00ffee',width:pxdp.width,height:pxdp.fixHeight(50)}}
                />
                <Animated.View style={{
                    backgroundColor: this.state.isHeightShow ? '#ffddff' : '#ff0fa0',
                    borderColor: '#ff0',
                    borderWidth: 1,
                    borderRadius: pxdp.fixWidth(25),
                    width: pxdp.fixWidth(50),
                    height: pxdp.fixWidth(50),

                    position: 'absolute',
                    left: this.state.marginLeft,
                    top: this.state.marginTop,
                }} {...this.panResponder.panHandlers}
                />


            </View>


        )
    }


    /**************************************** 逻辑处理 ****************************************/
    // 单点手势开始
    _onPanResponderGrant() {
        this.setState({
            isHeightShow: true,
        })
    }

    // 移动手势处理
    _onPanResponderMove(evt) {
        let pageX = evt.nativeEvent.pageX - pxdp.fixWidth(25);
        let pageY = evt.nativeEvent.pageY - pxdp.fixWidth(25);
        this.setState({
            marginLeft: pageX,
            marginTop: pageY,
        })
    }

    // 手势结束
    _onPanResponderEnd(evt) {
        let pageX = evt.nativeEvent.pageX - pxdp.fixWidth(25);

        if (pageX <= pxdp.width / 4) {
            pageX = 0;
        }
        if (pageX >= pxdp.width * 3 / 4) {
            pageX = pxdp.width - pxdp.fixWidth(50);
        }

        this.setState({
            marginLeft: pageX,
            isHeightShow: false,
        })
    }


    enterPenresnponderShow(){
        this.push('LChooseCellIndex')
    }

}


const styles = StyleSheet.create({})