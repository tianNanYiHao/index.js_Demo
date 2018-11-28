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
    ScrollView
} from 'react-native'

import PropsTyps from 'prop-types'
import Dimensions from 'Dimensions'
import BaseComponent from "../BaseComponent/BaseComponent";
import {LFlatListDemo} from "../index";
import pxdp from "../../Common/pxdp";

export default class ScrollViewDemo extends BaseComponent {


    constructor(props) {
        super(props);

        this.dataArr = [
            {title: '张三',},
            {title: '李四'},
            {title: '王五'},
            {title: '陆六'},
            {title: '祁期'},
        ];

        this.state = {};
    }

    render() {
        return (

            <View style={styles.container}>
                {this.renderNoLeftItemNaivgationBar('ScrollViewDemo页面')}
                <View style={{width: pxdp.width, height: pxdp.fixHeight(500), backgroundColor: '#ffa'}}>
                    <TouchableOpacity onPress={()=>this.changeScrollViewOffset()}>
                        <View style={{width: pxdp.width / 2, height: pxdp.fixHeight(50), backgroundColor: '#fff'}}/>
                    </TouchableOpacity>
                    <ScrollView ref={'aaabbcc'}>
                        {this.addItem()}
                    </ScrollView>
                </View>
            </View>

        )
    }


    /**************************************** 逻辑处理 ****************************************/

    addItem() {

        let itemViewArr = [];
        this.dataArr.forEach((item, index) => {
            itemViewArr.push(
                <View style={{width: pxdp.width, height: 80, backgroundColor: '#090'}}>
                    <Text>{item.title}</Text>
                </View>
            )
        })
        return itemViewArr;
    }

    changeScrollViewOffset(){
        let scrollview = this.refs.aaabbcc;
        scrollview.scrollTo({x:pxdp.width,y:0, animated:true})
    }


}

const styles = StyleSheet.create({})

