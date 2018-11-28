/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-09 10:01
 * @Profile:  Lunch
 * @Project:  test

 * @Description:
 *
 */
/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-01 16:21
 * @Profile:  TeasetSelect
 * @Project:  test

 * @Description:
 *
 */

import React, {Component} from 'react'
import {
    Text,
    Platform,
    Image,
    View,
    AlertIOS,
    Button,
    TouchableOpacity,
    StyleSheet,
    Animated,
} from 'react-native'
import BaseComponent from "../BaseComponent/BaseComponent";

export default class AnimatedDemo extends BaseComponent {


    constructor(props) {
        super(props);

        this.showHiddenFlag = true;
        this.currentAlpha = 1;

        this.state = {
            fadeAnimin: new Animated.Value(1),
            fadeAnimated: new Animated.Value(1),
        };
    }


    componentDidMount() {


    }

    /**************************************** 渲染 ****************************************/
    render() {

        return (
            <View style={{flex: 1}}>

                {/***************** 动画一 *****************/}
                <View style={{flex: 1 / 2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#cc1'}}>
                    <Animated.View
                        style={{backgroundColor: 'red', width: 100, height: 100, opacity: this.state.fadeAnimin}}
                    />
                    <TouchableOpacity style={{backgroundColor: '#0feedd', height: 40, width: 200}}
                                      onPress={() => this.showHidden(1)}/>
                </View>

                {/***************** 动画二 *****************/}
                <View style={{flex: 1 / 2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d41'}}>
                    <Animated.View
                        style={{
                            backgroundColor: '#B4A6DD',
                            width: 100,
                            height: 100,
                            opacity: this.state.fadeAnimin,  // 透明动画
                            transform: [
                                {
                                    translateY: this.state.fadeAnimated.interpolate({  //位移动画
                                        inputRange: [0, 1],
                                        outputRange: [80, 0]
                                    })
                                },
                                {
                                    scale: this.state.fadeAnimated  // 比例动画
                                }
                            ],
                        }}/>
                    <TouchableOpacity style={{backgroundColor: '#0feedd', height: 40, width: 200}}
                                      onPress={() => this.showHidden(2)}/>

                    {/***************** 动画三 *****************/}
                </View>
            </View>
        )

    }

    /**************************************** 逻辑处理 ****************************************/

    showHidden(tag) {
        if (tag === 1) {
            this.showHiddenFlag = !this.showHiddenFlag;
            if (this.showHiddenFlag) {
                Animated.timing(
                    this.state.fadeAnimin,
                    {toValue: 1}
                ).start();
            }
            else {
                Animated.timing(
                    this.state.fadeAnimin,
                    {toValue: 0}
                ).start();
            }
        }
        if (tag === 2) {

            this.currentAlpha = this.currentAlpha === 1 ? 0 : 1;
            Animated.timing(
                this.state.fadeAnimated,
                {toValue: this.currentAlpha}
            ).start();
        }
    }


}

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#889',
        borderWidth: 1,
        borderColor: '#090',

    }
})