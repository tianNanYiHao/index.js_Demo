/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-20 11:17
 * @Profile:  JpushHome
 * @Project:  JpushDemo

 * @Description: jpush测试页面
 *
 */


import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    DeviceEventEmitter

} from 'react-native'

import JpushManager from "../Jpush/JpushManager";
import {DeviceEventEmitterManager} from "../Jpush/DeviceEventEmitterManager";

export default class JpushHome extends Component {


    constructor(props) {
        super(props);
        this.state = {
            textInfo: '',
        };
    }


    componentDidMount() {

        JpushManager.init();
        JpushManager.setAlias('liuff');
        JpushManager.receiveRemoteNotifaction();
        JpushManager.receiveCustomMsg();


        this.lis = DeviceEventEmitterManager.addListener(DeviceEventEmitterManager.type.NotifactionGloable,(msg)=>{
            this.setState({
                textInfo:'ddddddddddd'
            })
        })


    }

    componentWillUnmount() {
        this.lis.remove()
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text numberOfLines={90}>{this.state.textInfo}</Text>
            </View>
        )
    }


}