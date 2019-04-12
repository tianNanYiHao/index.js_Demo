/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-01 16:21
 * @Profile:  TeasetSelect
 * @Project:  test

 * @Description:
 *
 */

import React, {Component} from 'react'
import {
    Text,
    Platform,
    Image,
    View,
    AlertIOS,
    Button,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native'
import BaseComponent from "../BaseComponent/BaseComponent";
import pxdp from "../../Common/pxdp";

var flatLisBaseHeight = 0;

export default class FlatListDemo extends BaseComponent {

    constructor(props) {
        super(props);


        this.state = {
            isrefreshing: false,
            navHeight:0,
            dataArr: [
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},
            ]
        };
    }


    render() {
        return (

            <View>

                {this.renderNoLeftItemNaivgationBar('FlatListDemo页面')}

                <Button onPress={()=>this.click()} style={{height:80,width:90, backgroundColor:'#009'}} title='切换数据源(数据源不满屏),将导致上拉加载触发 '/>
                <View onLayout={(event) => this._onLayout(event)} style={[styles.flatlistBase,{height:this.state.navHeight}]}>
                    <FlatList
                        data={this.state.dataArr}
                        style={{marginHorizontal: 20, backgroundColor: '#fff'}}
                        renderItem={(item) => {
                            return <View style={{
                                height: pxdp.fixHeight(100),
                                alignItems: 'center',
                                borderColor: '#ff9013',
                                borderRadius: 10,
                                borderWidth: 1,
                            }}>
                                <Text>{'dddddddddddddddddddd'}</Text>
                            </View>
                        }}
                        ItemSeparatorComponent={() => {
                            return <View style={{height: 10, width: 10}}/>
                        }}
                        keyExtractor={(item, index) => index}
                        showsVerticalScrollIndicator={false}
                        refreshing={this.state.isrefreshing}
                        onRefresh={() => this.refresh()}
                        onEndReachedThreshold={0.1}
                        onEndReached={() => this.loadMore()}
                    />

                </View>
            </View>
        )
    }

    /**************************************** 逻辑处理 ****************************************/

    /*获取位置*/
    _onLayout(event) {
        let {x, y, width, height} = event.nativeEvent.layout;
        this.setState({
            navHeight:pxdp.height-y,
        })
    }


    /*切换数据源*/
    click(){
        this.setState({
            dataArr: [
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},
                {title: 'aa'},

            ]
        })
    }

    /*下拉刷新事件*/
    refresh() {
        this.setState({
            isrefreshing: true,
        })

        setTimeout(() => {
            this.setState({
                isrefreshing: false,
                dataArr: [
                    {title: 'aa'},
                    {title: 'aa'},
                    {title: 'aa'},
                    {title: 'aa'},
                    {title: 'aa'},
                    {title: 'aa'},

                ]
            })
        }, 5000)
        console.log('下拉刷新,,,,,')
    }

    /*上拉加载更多数据*/
    loadMore() {



        //1. 数据不满屏->触发
        //2. 数据切换不满屏->触发


        //计算当前数据是否满屏, 不满屏禁止触发| 满屏



        console.log('上拉加载,,,,,')
    }


    action(tag) {
        if (tag === 1) {
            this.push('LHome2')
        }
    }

}

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#889',
        borderWidth: 1,
        borderColor: '#090',
    },

    flatlistBase: {
        backgroundColor: '#090',
        justifyContent: 'center',
    }
})