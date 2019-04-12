/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-09 10:01
 * @Profile:  Lunch
 * @Project:  test

 * @Description:
 *
 */
/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-01 16:21
 * @Profile:  TeasetSelect
 * @Project:  test

 * @Description:
 *
 */

import React, {Component,PureComponent} from 'react'
import {
    Text,
    Platform,
    Image,
    View,
    AlertIOS,
    Button,
    TouchableOpacity,
    StyleSheet,
    Animated,
} from 'react-native'
import BaseComponent from "../BaseComponent/BaseComponent";
import pxdp from "../../Common/pxdp";

export default class AnimatedDemo extends BaseComponent {


    constructor(props) {
        super(props);

        this.infoArr = [
            "动画一",
            "动画二",
            "动画三",
            "动画四",
            "动画五",
        ]

        this.state = {

        };
    }


    componentDidMount() {


    }

    /**************************************** 渲染 ****************************************/
    render() {

        return (
            <View style={{flex: 1}}>
                {this.renderNomalNavigationBar('动画页面')}
                {this.createCellWithArr()}
            </View>
        )
    }

    /**************************************** 逻辑处理 ****************************************/
    createCellWithArr(){
        let arr= [];
        this.infoArr.forEach((item,index)=>{
            arr.push(
                <Cell key={index} index={index} title={item} action={(seletedIndex)=>this.action(seletedIndex)}></Cell>
            )
        })
        return arr;
    }

    action(seletedIndex){
        this.push(`LAnimation${seletedIndex+1}`);
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

    }
})


/**************************************** 自定义cell ****************************************/
class Cell extends React.PureComponent{

    render(){
        return (
            <TouchableOpacity onPress={()=>this.cellTouch()}>
                <View style={{width:pxdp.width,height:pxdp.fixHeight(50), justifyContent:'center', borderWidth:1,
                    borderColor:'#00f', borderRadius:10,
                }}>
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    cellTouch(){
        this.props.action(this.props.index)
    }

}

