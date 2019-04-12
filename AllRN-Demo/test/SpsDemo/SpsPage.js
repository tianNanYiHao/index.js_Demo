/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-01-02 14:50
 * @Profile:  SpsPage
 * @Project:  test

 * @Description:
 *
 */


import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Platform,
    NativeModules

} from 'react-native'
import BaseComponent from "../TestDemo/Page/BaseComponent/BaseComponent";
import pxdp from "../TestDemo/Common/pxdp";


export default class SpsPage extends BaseComponent {


    render() {
        return (
            <View style={{backgroundColor:'#fff', flex:1}}>
                {this.renderNoLeftItemNaivgationBar('SPS模块')}
                <View style={{
                    backgroundColor:'#fff',

                    alignItems: 'center',
                    justifyContent: 'center',
                    width: pxdp.width,
                    height: pxdp.fixHeight(400)
                }}>

                    <TouchableOpacity style={{margin:20}} onPress={() => this.dismiss('0000')}>
                        <Text>支付成功0000</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{margin:20}} onPress={() => this.dismiss('0001')}>
                        <Text>支付取消0001</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:20}} onPress={() => this.dismiss('0002')}>
                        <Text>支付失败0002</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    async dismiss(code) {
        try {
            let info = await  NativeModules.SPSNativeModule.getPayInfoAndDismissSps2();
            console.log(info);
            let [scheme, tn] = info;
            await NativeModules.SPSNativeModule.openBack(scheme, tn, code)
        }
        catch (e) {
        }

    }

}


const styles = StyleSheet.create({})