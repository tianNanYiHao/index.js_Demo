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
    PixelRatio

} from 'react-native'

import PropTypes from 'prop-types'
import pxdp from "../../Common/pxdp";


export default class ChooseList extends Component {

    /**************************************** 初始构造 ****************************************/
    static propTypes = {
        title: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.cellHeight = pxdp.fixHeight(50);

        this.lastChangeY = 0;
        this.realChangeY = 0;
        this.state = {
            topOY: 0,
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
            <View style={{
                width: pxdp.width, height: this.cellHeight, borderWidth: 1, borderColor: '#090',
                borderRadius: 10, top: this.state.topOY, backgroundColor: '#00ddea'
            }} {...this.panResponder.panHandlers}>
                <Text>{this.props.title}</Text>
            </View>
        )
    }

    /**************************************** 逻辑 ****************************************/


    //拖拽触发
    _onPanResponderGrant(e, g) {
        console.log('触发了: 点击Grant')
        // console.log(e.nativeEvent.locationY);
        // console.log(e.nativeEvent.pageY);

        //1. 获取触摸点的绝对位置
        this.touchY = e.nativeEvent.pageY;
    }

    //拖拽移动
    _onPanResponderMove(e, g) {
        console.log('触发了: 移动Move');
        // console.log(e.nativeEvent);
        // console.log(g);

        //2. 计算top真正的移动距离

        //2.1 获取移动过程中,在Y轴上移动了多少(该值不能直接作为top变量,否则不能实现拖拽精准移动)
        let changeY = g.moveY - this.touchY;
        //2.2 根据本次的Y轴移动及上次Y轴移动,计算本次真正的Y轴移动变化量
        let realChangeY = changeY - this.lastChangeY;
        //2.3 计算移动中, 触摸点真正的移动了多少距离
        this.realChangeY = this.realChangeY + realChangeY;
        //2.4 同理,top相对触摸点,也移动了同样的距离
        this.setState({
            topOY: this.realChangeY
        });
        //2.5 记录上次移动的距离
        this.lastChangeY = changeY;
    }

    //结束拖拽
    _onPanResponderRelease(e, g) {
        console.log('释放了: 离开屏幕Release')
        //3. 结束触发后, 清除本次交互时,记录的Y轴移动大小,避免影响下次再次交互
        this.lastChangeY = 0;
    }


}

const style = StyleSheet.create({})

/**************************************** listCell ****************************************/