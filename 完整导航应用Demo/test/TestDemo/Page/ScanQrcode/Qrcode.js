/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-28 17:27
 * @Profile:  Qrcode
 * @Project:  test

 * @Description:  使用的库 react-native-smart-barcode 二维码扫码库
 *
 * npm install react-native-smart-barcode --save
 * npm install react-native-smart-timer-enhance --save
 *
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



 class Qrcode extends BaseComponent{


    componentDidMount() {
        
    }
    
    render(){
        return(
            <View style={{flex:1}}>
                {this.renderNoLeftItemNaivgationBar('二维码展示,二维码保存')}

            </View>
        )
    }

    scan(){

    }

    _onBarCodeRead(e){
        console.log(e)
    }

}

const styles = StyleSheet.create({
    itemStyle:{
    }
})


export default Qrcode