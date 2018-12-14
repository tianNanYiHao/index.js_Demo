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
import HalfTransparentView from "../../Component/HalfTransparentView";
import HalfPage from "../../Component/HalfPage";

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
                {this.renderNomalNavigationBar('动画1')}
                <TouchableOpacity
                    style={{height: pxdp.fixHeight(100), width: pxdp.fixHeight(100), backgroundColor: '#090'}}
                    onPress={() => this.touchShow()}/>
                {this.renderHalfPage()}
            </View>
        )
    }


    touchShow() {


    }

    renderHalfPage() {
        return <HalfPage type={HalfPage.HalfPageType.halfPageMsg}/>
    }

}


