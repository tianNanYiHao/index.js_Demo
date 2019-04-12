/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-11 14:03
 * @Profile:  EventEmitterDemo
 * @Project:  完整导航应用Demo

 * @Description:
 *
 */


import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    AlertIOS,
    Platform,


    NativeModules,
    NativeEventEmitter,

} from 'react-native'
import BaseComponent from "../BaseComponent/BaseComponent";


const LFEmitter = NativeModules.LFEmitter;
const NativeModuleEmitter = new NativeEventEmitter(LFEmitter);

export default class EventEmitterDemo extends BaseComponent {

    constructor(props) {
        super(props)

        this.state = {}
    }


    componentDidMount() {

        if (Platform.OS !== 'android') {

            this.addListenner();
        }
    }


    addListenner() {

        let notiName = 'sssss';
        LFEmitter.setNotiNameByType(notiName, (success) => {
            AlertIOS.alert("RN->IOS, 传递一个事件监听名" + notiName, success);
        });

        this.listenner = NativeModuleEmitter.addListener(notiName, (data) => {
            this.getNotice(data);
        });
    }

    // 接受到监听
    getNotice(data) {
        AlertIOS.alert('接受到了oc的通知:', data.desc, "好的")
    }

    componentWillUnmount() {
        // 删除监听
        if (Platform.OS !== 'android') {
            this.listenner.remove()
        }
    }

    render() {

        if (Platform.OS === 'android') {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>安卓暂不支持截屏通知...后期在做上去</Text>
                </View>
            )
        } else {
            return (
                <View>
                    {this.renderNomalNavigationBar('接受原生发送给RN的消息')}

                    <View style={{
                        flexDirection: 'column', justifyContent:
                            'center', alignItems:
                            'center', width:
                            300, height:
                            300
                    }}>
                        <Text> {'在本页面进行截屏可以看到效果'}</Text>
                        <Text> {'在本页T面进行截屏可以看到效果'}</Text>
                        <Text> {'在本页面进行截屏可以看到效果'}</Text>
                        <Text> {'调用顺序为 NR----设置事件监听名---->iOS保存监听名'}
                        </Text>
                        <Text> {'调用顺序为 iOS----触发截屏,发送消息推送到---->RN'}
                        </Text>
                    </View>
                </View>
            )
        }
    }
}

/*
* 封装的 LFEmitter使用
* 1. 调用 setNotiNameByType方法设置监听名称
* 2. 调用 NativeModuleEmitter.addListener 添加监听
*
*
* */