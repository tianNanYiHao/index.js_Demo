/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-14 17:50
 * @Profile:  HalfPage
 * @Project:  test

 * @Description: 按业务需求不同,将半透明背景及半页组件组合后,提供的完整组件及业务Api
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
import HalfTransparent from "./HalfTransparent";
import HalfPagePaylist from "./HalfPagePaylist";
import HalfPagePwd from "./HalfPagePwd";
import HalfPageMsg from "./HalfPageMsg";

class HalfPage extends Component {

    /* 模拟枚举:指定半页视图的类型*/
    static Type = {
        // 支付列表半页,
        halfPagePaylist: 0,
        // 短信半页,
        halfPageMsg: 1,
        // 支付密码半页,
        halfPagePaypwd: 2,
    };

    /**************************************** 初始构造 ****************************************/

    static propTypes = {
        type: PropTypes.number,
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    /**************************************** 渲染 ****************************************/
    render() {
        switch (this.props.type) {
            case HalfPage.Type.halfPagePaylist:
                return this._halfPagePaylist();
            case HalfPage.Type.halfPageMsg:
                return this._halfPageMsg();
            case HalfPage.Type.halfPagePaypwd:
                return this._halfPagePaypwd();
            default:
                return null;
        }
    }

    /*单独支付列表*/
    _halfPagePaylist() {
        return <HalfTransparent ref={ref => this.halfTransparentView = ref} canHide={true} containerView={
            <HalfPagePaylist ref={ref => this.halfpageView = ref}/>
        } cancelIdleCallback={() => this.hide()}/>
    }

    /*单独短信*/
    _halfPageMsg() {
        return <HalfTransparent ref={ref => this.halfTransparentView = ref} canHide={true} containerView={
            <HalfPageMsg ref={ref => this.halfpageView = ref}/>
        } cancelIdleCallback={() => this.hide()}/>
    }

    /*单独密码*/
    _halfPagePaypwd() {
        return <HalfTransparent ref={ref => this.halfTransparentView = ref} canHide={true} containerView={
            <HalfPagePwd ref={ref => this.halfpageView = ref}/>
        } cancelIdleCallback={() => this.hide()}/>
    }

    /**************************************** 对外方法 ****************************************/

    /*显示*/
    show() {
        if (HalfPage.Type.halfPagePaylist === this.props.type) {
            Animated.parallel([
                ...this.halfTransparentView.getShowAnimated(),
                this.halfpageView.getShowAnimated()
            ]).start()
        }
        if (HalfPage.Type.halfPageMsg === this.props.type) {
            Animated.parallel([
                ...this.halfTransparentView.getShowAnimated(),
                this.halfpageView.getShowAnimated()
            ]).start()
        }
        if (HalfPage.Type.halfPagePaypwd === this.props.type) {
            Animated.parallel([
                ...this.halfTransparentView.getShowAnimated(),
                this.halfpageView.getShowAnimated()
            ]).start()
        }
    }

    /*隐藏*/
    hide() {
        if (HalfPage.Type.halfPagePaylist === this.props.type) {
            Animated.parallel([
                Animated.sequence(this.halfTransparentView.getHideAnimated()),
                this.halfpageView.getHideAnimated()
            ]).start()
        }
        if (HalfPage.Type.halfPageMsg === this.props.type) {
            Animated.parallel([
                Animated.sequence(this.halfTransparentView.getHideAnimated()),
                this.halfpageView.getHideAnimated()
            ]).start()
        }
        if (HalfPage.Type.halfPagePaypwd === this.props.type) {
            Animated.parallel([
                Animated.sequence(this.halfTransparentView.getHideAnimated()),
                this.halfpageView.getHideAnimated()
            ]).start()
        }

    }

}


export default HalfPage