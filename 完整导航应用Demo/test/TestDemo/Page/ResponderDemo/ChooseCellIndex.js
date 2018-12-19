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
    PanResponder,
    Animated,

} from 'react-native'
import BaseComponent from "../BaseComponent/BaseComponent";
import ChooseList from "./ChooseList";

export default class ChooseCellIndex extends BaseComponent {


    /**************************************** 初始构造 ****************************************/

    constructor(props) {
        super(props);

        this.state = {
        };
    }


    componentWillMount() {

    }


    /**************************************** 渲染方法 ****************************************/
    render() {
        return (

            <View style={{flex: 1}}>
                {this.renderNomalNavigationBar('模拟切换顺序组件')}

                {this.renderList()}
            </View>
        )

    }

    renderList() {

        let arr = ['aa', 'bb', 'cc'];
        let addArr = []
        arr.forEach((item) => {
            addArr.push(
                <ChooseList title={item}/>
            )
        })
        return addArr

    }


    /**************************************** 逻辑处理 ****************************************/


}

const style = StyleSheet.create({})

