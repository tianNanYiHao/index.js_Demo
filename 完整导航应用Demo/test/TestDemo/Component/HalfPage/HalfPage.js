/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-13 17:35
 * @Profile:  HalfPage
 * @Project:  test

 * @Description:
 *
 */


import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Easing,
    Animated,
    StyleSheet

} from 'react-native'


import PropTypes from 'prop-types'
import pxdp from "../../Common/pxdp";


class HalfPage extends Component {

    /* 模拟枚举:指定半页视图的类型*/
    static HalfPageType = {
        // 默认半页
        halfDefault: -1,
        // 支付列表半页,
        halfPagePayList: 0,
        // 短信半页,
        halfPageMsg: 1,
        // 支付密码半页,
        halfPagePaypwd: 2,
    };

    /**************************************** 初始构造 ****************************************/
    static propTypes = {
        type: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.defaultHalfPageHeight = pxdp.fixHeight(376); //默认半页的高度
        this.state = {
            halfPageLeft: new Animated.Value(0), //半页左侧初始距离
            halfPageRight: new Animated.Value(0),//半页右侧初始距离
            halfPageTop: new Animated.Value(0), //半页顶侧初始距离
            halfPageBottom: new Animated.Value(0), //半页底侧初始距离
            halfPageHeight: new Animated.Value(0), //半页高度,
        }
    }

    /**************************************** 渲染 ****************************************/

    render() {
        switch (this.props.type) {
            case HalfPage.HalfPageType.halfPagePayList:
                return this._renderhalfPagePayList();
                break;

            case HalfPage.HalfPageType.halfPageMsg:
                return this._renderhalfPageMsg();
                break;

            case HalfPage.HalfPageType.halfPagePaypwd:
                return this._renderhalfPagePaypwd();
                break;

            default:
                return this._renderDefault(-1);
        }

    }

    /***************** 默认半页 *****************/
    _renderDefault() {
        return (
            <Animated.View style={[styleDefault.container, {
                height: this.state.halfPageHeight.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, this.defaultHalfPageHeight]
                })
            }]}/>
        )
    }

    /***************** 支付列表半页 *****************/
    _renderhalfPagePayList() {

    }

    /***************** 支付短信半页 *****************/
    _renderhalfPageMsg() {

    }

    /***************** 支付密码半页 *****************/
    _renderhalfPagePaypwd() {

    }


    /**************************************** 逻辑调用 ****************************************/

    /**************************************** 外部方法 ****************************************/
    show() {
        if (this.props.type === HalfPage.HalfPageType.halfDefault) {
            Animated.timing(this.state.halfPageHeight, {
                toValue: 1,
                duration: 500,
                easing: Easing.bezier(0.07,0.27,0,0.97)
            }).start()
        }
        if (this.props.type === HalfPage.HalfPageType.halfPagePayList) {

        }
        if (this.props.type === HalfPage.HalfPageType.halfPageMsg) {

        }
        if (this.props.type === HalfPage.HalfPageType.halfPagePaypwd) {

        }
    }

    hide() {
        if (this.props.type === HalfPage.HalfPageType.halfDefault) {
            Animated.timing(this.state.halfPageHeight, {
                toValue: 0,
                duration: 500,
                easing: Easing.bezier(0.44,0.07,0.87,0.34)
            }).start()
        }
        if (this.props.type === HalfPage.HalfPageType.halfPagePayList) {

        }
        if (this.props.type === HalfPage.HalfPageType.halfPageMsg) {

        }
        if (this.props.type === HalfPage.HalfPageType.halfPagePaypwd) {

        }
    }

}

/***************** 默认半页样式 *****************/
const styleDefault = StyleSheet.create({
    container: {
        width: pxdp.width,
        backgroundColor: '#0cdfea',
        position: 'absolute',
        bottom: 0,
    }
});

/***************** 支付列表样式 *****************/
const stylePayList = StyleSheet.create({});

/***************** 短信半页样式 *****************/
const stylePayMsg = StyleSheet.create({});

/***************** 密码半页样式 *****************/
const stylePaypwd = StyleSheet.create({});

export default HalfPage;