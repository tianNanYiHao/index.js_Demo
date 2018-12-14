/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-07 13:41
 * @Profile:  ChooseList
 * @Project:  test

 * @Description:
 *
 */


import React, {Component} from 'react'
import {
    Text,
    View,
    Image, PanResponder,
    StyleSheet,

} from 'react-native'

import PropTypes from 'prop-types'
import pxdp from "../../Common/pxdp";

export default class ChooseList extends Component {

    /**************************************** 初始构造 ****************************************/
    static propTypes = {
        dataArr: PropTypes.array,
    }

    constructor(props) {
        super(props);
        this.cellHeight = pxdp.fixHeight(50);
        this.cellAllHeight = this.props.dataArr.length * this.cellHeight;

        this.state = {
            topOY:0,
        };
    }


    componentWillMount() {
        this.panResponder = PanResponder.create({

            onStartShouldSetPanResponder: (e, g) => true,
            onMoveShouldSetPanResponder: (e, g) => true,
            onStartShouldSetPanResponderCapture: (e, g) => true,
            onMoveShouldSetPanResponderCapture: (e, g) => true,

            onPanResponderGrant: (e, g) => this._onPanResponderGrant(e, g),
            onPanResponderMove: (e, g) => this._onPanResponderMove(e, g),
            onPanResponderRelease: (e, g) => this._onPanResponderRelease(e, g),
        })
    }

    /**************************************** 渲染 ****************************************/
    render() {
        return (

            <View style={{backgroundColor:'#99f'}}>
                {this.createUI()}
            </View>
        )
    }

    /**************************************** 逻辑 ****************************************/

    createUI() {
        let arr = [];
        this.props.dataArr.forEach((item) => {
            arr.push(
                <View style={{
                    width: pxdp.width, height: this.cellHeight, borderWidth: 1, borderColor: '#090',
                    borderRadius: 10, justifyContent:'center', marginTop:this.state.topOY
                }} {...this.panResponder.panHandlers}>
                    <Text>{item.title}</Text>
                </View>
            )
        })
        return arr;
    }


    //拖拽触发
    _onPanResponderGrant(e, g) {
        console.log('1')
    }

    //拖拽移动
    _onPanResponderMove(e, g) {
        console.log('2')
        let oy = e.nativeEvent.pageY

        this.setState({
            topOY:oy,
        })

    }

    //结束拖拽
    _onPanResponderRelease(e, g) {
        console.log('3')
    }


}

const style = StyleSheet.create({})

/**************************************** listCell ****************************************/