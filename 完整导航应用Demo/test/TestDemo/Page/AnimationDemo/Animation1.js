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

import React, {Component, PureComponent} from 'react'
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
import pxdp from "../../Common/pxdp";
import HalfPage from "../../Component/HalfPage/HalfPage";

export default class Animation1 extends BaseComponent {


    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    /**************************************** 渲染 ****************************************/
    render() {

        return (
            <View style={{flex: 1}}>
                {this.renderNomalNavigationBar('支付列表/短信/密码/动画')}
                <TouchableOpacity
                    style={{height: pxdp.fixHeight(100), width: pxdp.fixHeight(100), backgroundColor: '#090'}}
                    onPress={() => this.touchShow(1)}/>

                <TouchableOpacity
                    style={{height: pxdp.fixHeight(100), width: pxdp.fixHeight(100), backgroundColor: '#dcaaef'}}
                    onPress={() => this.touchShow(2)}/>

                {this.renderHalfPage()}
            </View>
        )
    }


    touchShow(e) {
        if (e === 1) {
            this.halfPage.show()
        }else {
            this.halfPage.hide()
        }
    }

    renderHalfPage() {
        return <HalfPage ref={ref => this.halfPage = ref} type={HalfPage.Type.halfPagePaylist}/>

    }

}


