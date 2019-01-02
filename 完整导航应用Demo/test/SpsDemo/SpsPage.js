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
            <View>
                {this.renderNoLeftItemNaivgationBar('SPS模块')}
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: pxdp.width,
                    height: pxdp.fixHeight(400)
                }}>
                    <TouchableOpacity onPress={() => this.dismiss()}>
                        <Text>回调方法一</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:100}} onPress={() => this.dismiss2()}>
                        <Text>回调方法二</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    async dismiss() {
        try {
            let info = await  NativeModules.SPSNativeModule.getPayInfoAndDismissSps2();
            console.log(info);
            let [scheme,tn] = info;
            // await NativeModules.SPSNativeModule.openBack(`${scheme}`+'://sandbao/sps?'+'tn="sssssbbbbb"'+'&respCode="0000"')
            await NativeModules.SPSNativeModule.openBack(`${scheme}`+'://')

        }
        catch (e) {
        }

    }
    dismiss2() {
        NativeModules.SPSNativeModule.getPayInfoAndDismissSps((info)=>{
            console.log(info);
            let [scheme,tn] = info;
        })

    }
}


const styles = StyleSheet.create({})