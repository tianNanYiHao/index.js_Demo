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
            marginLeft: 100, //小圆点的左外边距
            marginTop: 100,  //小圆点的顶外边距
            ml: 0,
            mt: 0,
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
                this._onPanResponderGrant(e)
            },
            // 移动手势监听回调
            onPanResponderMove: (e, gestureState) => {
                console.log('onPanResponderMove==>' + '移动手势申请成功,开始处理手势' + `${gestureState}`)
                this._onPanResponderMove(e, gestureState);
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
                    onPress={() => this.enterPenresnponderShow()}
                    style={{backgroundColor: '#00ffee', width: pxdp.width, height: pxdp.fixHeight(50)}}
                />
                <View style={{
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
                >
                    <View style={{
                        backgroundColor: '#090',
                        width: 10,
                        height: 10,
                        marginLeft: this.state.ml,
                        marginTop: this.state.mt
                    }}/>
                </View>


            </View>


        )
    }


    /**************************************** 逻辑处理 ****************************************/
    /*
    * 备注: 拖动小圆点的实现方法
    * 对小圆点设置绝对布局,
    * 通过触发开始的pageXY与moveXY的差值
    * 来变更top,left的大小,
    * position一定要为 absolute
    * */


    // 单点手势开始
    _onPanResponderGrant(e) {
        this.setState({
            isHeightShow: true,
            ml: e.nativeEvent.locationX,
            mt: e.nativeEvent.locationY,
        })


        //1. 开始触发时,获取触摸点绝对位置
        this.touchX = e.nativeEvent.pageX;
        this.touchY = e.nativeEvent.pageY;

    }

    // 移动手势处理
    _onPanResponderMove(evt, g) {
        console.log("        ");
        console.log(evt.nativeEvent);
        console.log('=================')
        console.log(g);

        //2. 根据触发点计算真实的左侧,顶侧位移变化
        let realMarginLeft = g.moveX - this.touchX;
        let realMarginTop = g.moveY - this.touchY;

        this.setState({
            marginLeft: realMarginLeft,
            marginTop: realMarginTop
        })


    }

    // 手势结束
    _onPanResponderEnd(evt) {
        let pageX = evt.nativeEvent.pageX;

        this.setState({
            isHeightShow: false,
        });

        if (pageX <= pxdp.width / 4) {
            pageX = 0;
            this.setState({
                marginLeft: pageX,
            })
        }
        if (pageX >= pxdp.width * 3 / 4) {
            pageX = pxdp.width - pxdp.fixWidth(50);
            this.setState({
                marginLeft: pageX,
            })
        }
    }


    enterPenresnponderShow() {
        this.push('LChooseCellIndex')
    }

}


const styles = StyleSheet.create({})