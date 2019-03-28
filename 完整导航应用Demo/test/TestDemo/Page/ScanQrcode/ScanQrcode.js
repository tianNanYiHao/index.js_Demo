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
    TouchableOpacity
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
                {/*<TouchableOpacity onPress={()=>this.scan()}>*/}
                {/*<Text>...点我扫码...</Text>*/}
                {/*</TouchableOpacity>*/}

                <Barcode onBarCodeRead={(e)=>this._onBarCodeRead(e)} style={{flex:1}}/>

            </View>

        )
    }

    scan(){

    }

    _onBarCodeRead(e){
        console.log('////////////////////============')
        console.log(`e.nativeEvent.data.type = ${e.nativeEvent.data.type}, e.nativeEvent.data.code = ${e.nativeEvent.data.code}`)
        console.log('////////////////////============')
    }

}

const styles = StyleSheet.create({
    itemStyle:{
    }
})


export default TimerEnhance(ScanQrcode)