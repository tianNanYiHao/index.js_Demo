/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-28 16:41
 * @Profile:  Spinkit
 * @Project:  test

 * @Description:
 *
 */



import React,{Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native'
import BaseComponent from "../BaseComponent/BaseComponent";

import Spinner from 'react-native-spinkit'


export default class Spinkit extends BaseComponent{


    render(){
        return(
            <View style={{flex:1}}>
                {this.renderNoLeftItemNaivgationBar('网络加载动画库 Spinkit')}
                <View style={{flex: 1, padding: 40, backgroundColor: '#000000', flexDirection:'row', justifyContent:'space-around',
                    alignItems:
                'stretch', flexWrap:'wrap'}}>
                    <Spinner style={styles.itemStyle} color={'#0ff897'} isVisible={true} type={'CircleFlip'} size={40}/>
                    <Spinner style={styles.itemStyle} color={'#0ff897'} isVisible={true} type={'Bounce'} size={40}/>
                    <Spinner style={styles.itemStyle} color={'#0ff897'} isVisible={true} type={'Wave'} size={40}/>
                    <Spinner style={styles.itemStyle} color={'#0ff897'} isVisible={true} type={'WanderingCubes'} size={40}/>
                    <Spinner style={styles.itemStyle} color={'#0ff897'} isVisible={true} type={'Pulse'} size={40}/>
                    <Spinner style={styles.itemStyle} color={'#0ff897'} isVisible={true} type={'ChasingDots'} size={40}/>
                    <Spinner style={styles.itemStyle} color={'#0ff897'} isVisible={true} type={'ThreeBounce'} size={40}/>
                    <Spinner style={styles.itemStyle} color={'#0ff897'} isVisible={true} type={'Circle'} size={40}/>
                    <Spinner style={styles.itemStyle} color={'#0ff897'} isVisible={true} type={'9CubeGrid'} size={40}/>
                    <Spinner style={styles.itemStyle} color={'#0ff897'} isVisible={true} type={'FadingCircle'} size={40}/>
                    <Spinner style={styles.itemStyle} color={'#0ff897'} isVisible={true} type={'FadingCircleAlt'} size={40}/>
                </View>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    itemStyle:{

        height:50,
        width:50,
        margin:20,

    }
})