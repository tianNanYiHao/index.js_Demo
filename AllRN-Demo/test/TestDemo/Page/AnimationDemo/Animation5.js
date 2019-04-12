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

import React, {Component,PureComponent} from 'react'
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

export default class Animation5 extends BaseComponent {


    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    /**************************************** 渲染 ****************************************/
    render() {

        return (
            <View style={{flex: 1}}>
                {this.renderNomalNavigationBar('动画5')}
            </View>
        )
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



