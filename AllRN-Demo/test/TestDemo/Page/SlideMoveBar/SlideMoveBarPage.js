/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-06-14 13:55
 * @Profile:  SlideMoveBar
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
    Animated, Easing
} from 'react-native';

import BaseComponent from "../BaseComponent/BaseComponent";
import SlideMoveBar from "../../Component/SlideMoveBar/SlideMoveBar";
import {Images} from "../../src";

export default class SlideMoveBarPage extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'red',
            marginTop: 50,
            marginLeft: 50,
            ccc: new Animated.Value(300),

        };
        this.xPoint = this.state.marginLeft; //记录小方块初始的x点坐标
        this.yPoint = this.state.marginTop; //记录小方块初始的y坐标
    }


    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },
            onPanResponderGrant: (evt, gestureState) => {
            },
            // 移动
            onPanResponderMove: (evt, gestureState) => {
                this.setState({

                    // dx/dy ==> 的累积横向路程和纵向路程
                    marginLeft: this.xPoint + gestureState.dx, // 计算x/y 点真实的移动路径数据
                    marginTop: this.yPoint + gestureState.dy,

                });
            },
            // 释放
            onPanResponderRelease: (evt, gestureState) => {
                this.xPoint = this.state.marginLeft; //移动结束, 更新当前x/y 点的最新位置
                this.yPoint = this.state.marginTop;
            },
            onPanResponderTerminate: (evt, gestureState) => {
            },
        });

    }

    render() {
        return (
            <View>
                {this.renderNomalNavigationBar('滑动验证条')}

                <View style={{
                    backgroundColor: '#090', width: 100, height: 100,
                    marginTop: this.state.marginTop,
                    marginLeft: this.state.marginLeft
                }} {...this._panResponder.panHandlers}>
                    <Text>1</Text>
                </View>

                <SlideMoveBar
                    marginTop={100}
                    slideItemDefaultImg={Images.check}
                    slideItemSuccessImg={Images.chenggong3}
                    checkSuccess={(res)=>{
                        if (res){
                            console.log('success')
                        }
                        else{
                            console.log('err')
                        }
                }}/>

                <Animated.View style={{
                    backgroundColor: '#00c',
                    width: 100, height: 100,
                    marginLeft: this.state.ccc
                }}/>

            </View>
        )
    }


    /**************************************** Description ****************************************/
    goBackAmination() {
        Animated.timing(this.state.ccc, {
            toValue: 0,
            duration: 500,
            easing: Easing.bezier(0.44, 0.07, 0.87, 0.34)
        }).start()
    }
}