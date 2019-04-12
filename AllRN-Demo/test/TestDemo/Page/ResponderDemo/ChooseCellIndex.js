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
            infoArr: [
                {
                    title: 'aa',
                },
                {
                    title: 'bb',
                },
                {
                    title: 'cc',
                },
                {
                    title: 'dd',
                },
            ],
            topArr: [
                {top: 0},
                {top: 0},
                {top: 0},
                {top: 0},
            ],
        }

    };


    componentWillMount() {

    }


    /**
     * 功能为完成, 暂未做到排序实现, 仅完成了拖拽手势位移
     */
    /**************************************** 渲染方法 ****************************************/
    render() {
        return (

            <View style={{flex: 1}}>
                {this.renderNomalNavigationBar('模拟切换顺序组件')}
                <View style={{backgroundColor: '#090', top: 100}}>
                    {this.renderList()}
                </View>
            </View>
        )

    }

    renderList() {

        let addArr = []
        this.state.infoArr.forEach((item, index) => {
            addArr.push(
                <ChooseList key={item.title} title={item.title} topOY={this.state.topArr[index].top} index={index}
                            callBack={(realChangeOY, isPlus) => this.changeState(index, realChangeOY, isPlus)}/>
            )
        });
        return addArr
    }


    /**************************************** 逻辑处理 ****************************************/
    changeState(index, realChangeOY, isPlus) {
        console.log(`${index}` + '>>>>>' + `${realChangeOY}`);


    }

}

const style = StyleSheet.create({})

