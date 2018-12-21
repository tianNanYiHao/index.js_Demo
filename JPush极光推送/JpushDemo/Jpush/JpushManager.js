/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-20 14:39
 * @Profile:  JpushManager
 * @Project:  JpushDemo

 * @Description: 封装Jpush的管理类
 *
 */


import React from 'react'
import {
    Platform,
    DeviceEventEmitter

} from 'react-native'
import JpushModule from 'jpush-react-native'
import {DeviceEventEmitterManager} from "./DeviceEventEmitterManager";


/**
 *  此类为Jpush的管理类
 *  使用特点: 在整个App启动的地方,调用
 */
class JpushManager {


    /*初始化*/
    static init() {
        if (Platform.OS === 'android') {
            JpushModule.initPush();
            JpushModule.notifyJSDidLoad((resultCode) => {
                if (resultCode === 0) {
                    console.log('notifyJSDidLoad - success')
                }
            })
        } else {
            /**
             * iOS Only
             * 初始化 JPush SDK 代码,
             * NOTE: 如果已经在原生 SDK 中添加初始化代码则无需再调用 （通过脚本配置，会自动在原生中添加初始化，无需额外调用）
             */
            JpushModule.setupPush()
        }
    }


    /*设置别名*/
    static setAlias(alias) {
        JpushModule.setAlias(alias, (resultData) => {
            if (resultData.errorCode === 0) {
                console.log('设置别名成功:' + resultData.alias)
            } else {
                console.log('设置别名失败')
            }
        })
    }

    /*接受推送消息并分发*/
    static receiveRemoteNotifaction() {
        if (Platform.OS !== 'android') {
            // App未启动, 点击推送弹框后触发该回调,直接打开App不触发  !!!! ios-only !!!!
            JpushModule.addOpenNotificationLaunchAppListener((msg) => {
                console.log('接受到消息推送后,用户点击了消息弹框调起App, 才能触发本回调,在此之前App未启动!');
                DeviceEventEmitterManager.pushNotifaction(msg)
            });
        }

        // App已启动, 点击推送弹框后触发该回调,直接打开App不触发 - ios/Android
        JpushModule.addReceiveOpenNotificationListener((msg) => {
            console.log('接受到消息推送后,用户点击了消息弹簧,触发本回调,在此之前,App或在后台,或在前台,均可响应');
            DeviceEventEmitterManager.pushNotifaction(msg)
        });

        // App已启动,且在前台接受到消息 - ios/Android
        JpushModule.addReceiveNotificationListener((msg) => {
            console.log('App已启动,且在前台接受到消息推送');
            DeviceEventEmitterManager.pushNotifaction(msg)
        })
    }

    /*接受自定义消息并分发*/
    static receiveCustomMsg() {
        // 自定义消息  - ios/Android
        JpushModule.addReceiveCustomMsgListener((msg) => {
            console.log('自定义消息');
            DeviceEventEmitterManager.pushNotifaction(msg)
        })
    }


}


export default JpushManager


