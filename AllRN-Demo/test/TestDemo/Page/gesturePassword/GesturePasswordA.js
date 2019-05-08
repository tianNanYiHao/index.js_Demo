/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-05-08 13:56
 * @Profile:  gesturePasswordA
 * @Project:  test

 * @Description: 手势密码
 *
 */


import React, {} from 'react'
import {
    View,
    Image,
    StyleSheet,
    Platform,

} from 'react-native'
import BaseComponent from "../BaseComponent/BaseComponent";

export default class GesturePasswordA extends BaseComponent {

    render() {
        return (
            <View>
                {this.renderNomalNavigationBar('手势密码')}

            </View>
        )
    }

}