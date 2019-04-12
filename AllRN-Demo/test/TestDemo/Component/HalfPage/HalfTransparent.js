/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-13 11:10
 * @Profile:  HalfTransparentView
 * @Project:  test

 * @Description: 公共组件:半透明灰度的带动画视图组件,仅负责动画处理
 *
 */

import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
    Animated,
    Easing,

} from 'react-native'

import PropTypes from 'prop-types'
import App from "../../../App";
import pxdp from "../../Common/pxdp";

class HalfTransparent extends Component {

    /**************************************** 初始构造 ****************************************/
    static propTypes = {
        canHide: PropTypes.bool, //灰度背景是否支持触摸隐藏
        containerView: PropTypes.element, //接受一个内容视图
        cancelIdleCallback: PropTypes.func, //灰度背景触摸事件回调
    };

    static defaultProps = {
        canHide: true, //默认支持灰度背景触摸隐藏
    };

    constructor(props) {
        super(props);
        this.state = {
            opacityAni: new Animated.Value(0),
            topY: new Animated.Value(0),
        }
    }

    /**************************************** 渲染视图 ****************************************/

    render() {
        return (
            <Animated.View
                style={[styles.container, {
                    top: this.state.topY.interpolate({
                        inputRange: [0, 1],
                        outputRange: [pxdp.height, 0]
                    })
                }]}>
                <TouchableWithoutFeedback onPress={() => this.touchCanHide()}>
                    <Animated.View style={[{flex: 1, backgroundColor: '#000000'}, {opacity: this.state.opacityAni}]}/>
                </TouchableWithoutFeedback>
                {this.props.containerView}
            </Animated.View>
        );
    }

    /**************************************** 内部逻辑 ****************************************/

    /*触摸并判断是否可隐藏*/
    touchCanHide() {
        if (this.props.canHide && this.props.cancelIdleCallback) {
            this.props.cancelIdleCallback()
        } else {
            // do nothing
        }
    }

    /**************************************** 外部方法 ****************************************/

    /*创建show动画对象*/
    getShowAnimated() {
        return [
            // 先执行位移动画(隐式的快速完成) top变为0
            Animated.timing(this.state.topY, {
                toValue: 1,
                duration: 10,
                easing: Easing.linear,
            }),
            // 在执行渐变动画 透明度加深
            Animated.timing(this.state.opacityAni, {
                toValue: 0.3,
                duration: 500,
                easing: Easing.linear()
            })
        ]
    }

    /*创建hide动画对象*/
    getHideAnimated() {
        return [
            // 先执行渐变动画 透明度减弱
            Animated.timing(this.state.opacityAni, {
                toValue: 0,
                duration: 500,
                easing: Easing.linear()
            }),
            // 再执行位移动画(隐式的快速完成) top变为最大
            Animated.timing(this.state.topY, {
                toValue: 0,
                duration: 10,
                easing: Easing.linear,
            })
        ]
    }


    /*半透明背景显示*/
    show() {
        Animated.sequence(this.getShowAnimated()).start()
    }

    /*半透明背景隐藏*/
    hide() {
        Animated.sequence(this.getHideAnimated()).start()
    }


}


const
    styles = StyleSheet.create({
        container: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            position: 'absolute',
            backgroundColor: 'transparent',
        }
    })


export default HalfTransparent