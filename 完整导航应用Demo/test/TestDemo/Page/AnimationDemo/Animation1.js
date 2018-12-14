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
import HalfTransparentView from "../../Component/HalfPage/HalfTransparentView";
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
                {this.renderNomalNavigationBar('动画1')}
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
            this.halfBase.show();
            this.half.show()
        }
        if (e === 2) {
            this.halfBase.hide();
            this.half.hide()
        }
    }

    renderHalfPage() {
        return <HalfTransparentView ref={ref1 => this.halfBase = ref1} canHide={true}
                                    containerView={<HalfPage ref={ref2 => this.half = ref2}
                                                             type={HalfPage.HalfPageType.halfDefault}/>}/>

    }

}


