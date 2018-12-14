/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-07 10:52
 * @Profile:  ChooseCellIndex
 * @Project:  test

 * @Description:
 *
 */


import React, {Component} from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    PanResponder

} from 'react-native'
import BaseComponent from "../BaseComponent/BaseComponent";
import ChooseList from "./ChooseList";

export default class ChooseCellIndex extends BaseComponent {


    /**************************************** 初始构造 ****************************************/

    constructor(props) {
        super(props);

        this.data = [
            {title: 'A'},
            {title: 'B'},
            {title: 'C'},
            {title: 'D'},
            {title: 'E'},
        ];

        this.state = {};
    }


    /**************************************** 渲染方法 ****************************************/
    render() {
        return (

            <View style={{flex: 1}}>
                {this.renderNomalNavigationBar('模拟切换顺序组件')}
                <ChooseList dataArr={this.data}/>
            </View>
        )

    }

    /**************************************** 逻辑处理 ****************************************/


}

const style = StyleSheet.create({})

