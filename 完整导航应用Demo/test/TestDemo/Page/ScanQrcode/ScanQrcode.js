/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-28 17:27
 * @Profile:  ScanQrcode
 * @Project:  test

 * @Description: 使用的库 react-native-smart-barcode 二维码扫码库
 *
 * npm install react-native-smart-barcode --save
 * npm install react-native-smart-timer-enhance --save
 */



import React,{Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native'
import BaseComponent from "../BaseComponent/BaseComponent";


import Barcode from 'react-native-smart-barcode'
import TimerEnhance from 'react-native-smart-timer-enhance'


class ScanQrcode extends BaseComponent{


    componentDidMount() {

    }

    render(){
        return(
            <View style={{flex:1}}>
                {this.renderNoLeftItemNaivgationBar('二维码扫码识别')}
                <Barcode ref={barcode=>this._barCode=barcode} onBarCodeRead={(e)=>this._onBarCodeRead(e)} style={{flex:1}}/>
            </View>

        )
    }



    /*扫码成功读取数据回调*/
    _onBarCodeRead(e){
        console.log('////////////////////============')
        console.log(`e.nativeEvent.data.type(码类型) = ${e.nativeEvent.data.type}, e.nativeEvent.data.code(码值) = ${e.nativeEvent.data.code}`)
        console.log('////////////////////============')
        this._barCode.stopScan();

        Alert.alert('扫码结果','码类型:'+`${e.nativeEvent.data.type}\n`+`${e.nativeEvent.data.code}`,[
            {'text':'再扫',onPress:()=>this._scanAgain()},
            {'text':'取消',onPress:()=>this._scanCancle()},
        ])
    }

    _scanCancle(){
        this.pop();
    }
    _scanAgain(){
        this._barCode.startScan();
    }
}

const styles = StyleSheet.create({
    itemStyle:{
    }
})


export default TimerEnhance(ScanQrcode)