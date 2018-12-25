/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-25 11:05
 * @Profile:  SwiperDemo
 * @Project:  test

 * @Description: react-native-swiper 轮播图组件demo
 *
 */


import React, {Component} from 'react'

import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,

} from 'react-native'
import BaseComponent from "../BaseComponent/BaseComponent";
import Swiper from 'react-native-swiper'
import pxdp from "../../Common/pxdp";

export default class SwiperDemo extends BaseComponent {


    componentDidMount() {

    }

    render() {
        return (
            <View style={{flexDirection: 'column'}}>
                {this.renderNomalNavigationBar('轮播图组件Demo', '#09dffe')}

                <TouchableOpacity ref={ref => this.touch = ref} onPress={()=>this.cccc()}/>


                {/*swiper需要一个固定大小的父视图来固定, 否则没有效果*/}
                <View style={{width: pxdp.width, height: pxdp.fixHeight(300)}}>

                    <Swiper
                        height={300}
                        width={pxdp.width}

                        index={0} //初始进入的页面页码
                        horizontal={true} //是否水平模式
                        loop={true} //是否循环播放
                        showButtons={true} //是否显示左右两侧的箭头
                        autoplay={true} //自动轮播
                        autoplayTime={2} //轮播时间
                        showPagination={true}//
                        paginationStyle={{bottom: pxdp.fixHeight(20)}} //dot位置

                        dot={<View style={{ //dot
                            width: pxdp.fixWidth(15),
                            height: pxdp.fixWidth(6),
                            borderRadius: pxdp.fixWidth(3),
                            backgroundColor: '#0f0f0f',
                            marginHorizontal: 3,
                        }}/>}
                        activeDot={<View style={{
                            width: pxdp.fixWidth(10), height: pxdp.fixWidth(6), backgroundColor: '#ffd001',
                            borderRadius: pxdp.fixWidth(3)
                        }}/>}  //活动状态的dot

                        onIndexChanged={(index) => this._onIndexChanged(index)} //当用户拖拽时更新索引调用
                        onTouchStartCapture={(index) => this._onTouchStartCapture(index)} //触摸当前图片的事件
                    >
                        <View style={{width: pxdp.width, height: pxdp.fixHeight(300), backgroundColor: '#ffd'}}/>
                        <View style={{width: pxdp.width, height: pxdp.fixHeight(300), backgroundColor: '#f0d'}}/>
                        <View style={{width: pxdp.width, height: pxdp.fixHeight(300), backgroundColor: '#1fd'}}/>

                    </Swiper>
                </View>
            </View>
        )
    }


    /**************************************** 事件处理 ****************************************/
    _onTouchStartCapture(index) {
        console.log('this_onTouchStartCapture' + `${index}`)
    }

    _onIndexChanged(index) {

        // 滚动到那一页, 就打印那一页下标
        console.log(`${index}`)
    }
}

const style = StyleSheet.create({})