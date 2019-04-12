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
} from 'react-native'
import RouteManager from "../../RouteManager/RouteManager";
import BaseComponent from "../BaseComponent/BaseComponent";

export default class TeasetSelect extends BaseComponent {


    render() {
        return (
            <View>
                {this.renderNomalNavigationBar('TeasetSelect页面')}
                <View style={{marginTop:64}}>
                    <TouchableOpacity onPress={() => this.action()}>
                        <Text>{'dddd'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    action() {

    }

}