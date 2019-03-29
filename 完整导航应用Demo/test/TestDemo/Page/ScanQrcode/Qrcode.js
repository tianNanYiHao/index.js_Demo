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
 * npm install react-native-svg --save  // 或者使用 yarn add react-native-svg
 react-native link react-native-svg  // 不要忽略这一步，不然会报错
 npm install react-native-qrcode-svg --save
 版权声明：本文为博主原创文章，转载请附上博文链接！
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

import QRCode from 'react-native-qrcode-svg'

 class Qrcode extends BaseComponent{


    componentDidMount() {
        
    }
    
    render(){
        return(
            <View style={{flex:1}}>
                {this.renderNoLeftItemNaivgationBar('二维码展示,二维码保存')}
                <QRCode value={'18833928943eeeefffffjcskek2kdjskv2111[sf1'} size={80} color={'#ff3456'}
                        backgroundColor={'#99ee99'}/>
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