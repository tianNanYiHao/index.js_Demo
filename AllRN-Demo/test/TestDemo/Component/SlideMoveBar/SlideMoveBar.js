/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-06-14 13:56
 * @Profile:  SlideMoveBar
 * @Project:  test

 * @Description:
 *
 */


import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet,
    PanResponder,
    Dimensions,
    Animated, Easing,
} from 'react-native';

import PropTypes from 'prop-types';

export default class SlideMoveBar extends Component {

    static propTypes = {
        style: PropTypes.any,
        checkSuccess: PropTypes.func.isRequired,
    };
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.slideItmeWidht = fixWidth(48); //滑块宽度
        this.currentXPoint = new Animated.Value(0); //未验证成功前, 失去触发后记录的x坐标, 动画属性值
        this.state = {
            slideItemMarginLeft: 0, //滑块初始位置X
            slideItemMarginTop: 0, //滑块初始位置Y
            slideOver: false, //滑动结束
            slideTip: '请按住滑块,拖动到最右边',// 滑块内部文字
            slideTipColor: '#999999', //滑块文字颜色
        };
        this.xPoint = this.state.slideItemMarginLeft; //滑块x坐标初始位置
        this.yPoint = this.state.slideItemMarginTop; //滑块y左边初始位置
        this.xmin = 0;
        this.xMax = width - this.slideItmeWidht;
    }


    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => {
                return !this.state.slideOver;
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return !this.state.slideOver;
            },
            // 按下
            onPanResponderGrant: (evt, gestureState) => {
                this._onPanResponderGrant(evt, gestureState)
            },
            // 移动
            onPanResponderMove: (evt, gestureState) => {
                this._onPanResponderMove(evt, gestureState)
            },
            // 释放
            onPanResponderRelease: (evt, gestureState) => {
                this._onPanResponderRelease(evt, gestureState)
            },
            onPanResponderTerminate: (evt, gestureState) => {
            },
        });

    }

    /***************** PanResponder事件 *****************/

    /*按下*/
    _onPanResponderGrant(evt, gestureState) {

    }

    /*移动*/
    _onPanResponderMove(evt, gestureState) {
        // slideX slideY 移动的xy坐标计算
        let slideX = this.xPoint + gestureState.dx;  // 计算x/y 点真实的移动路径数据
        let slideY = this.yPoint + 0; // y坐标不允许移动

        if (slideX < this.xmin) {
            slideX = 0;
        }

        // 移动中,满足成功条件
        if (slideX >= this.xMax) {
            slideX = this.xMax;
            this.setState({
                slideOver: true,
                slideTip: '验证成功',
                slideTipColor: '#fff'
            });
            this.props.checkSuccess() // 执行回调(不可放到释放中执行)
        }
        // 移动中,未满足验证条件
        else {
            this.setState({
                slideOver: false,
                slideTip: '请按住滑块,拖动到最右边',
                slideTipColor: '#999'
            });
        }

        // 公共执行 - 更新x/y位置
        this.setState({
            // dx/dy ==> 的累积横向路程和纵向路程
            slideItemMarginLeft: slideX,
            slideItemMarginTop: slideY,
        });
        this.currentXPoint.setValue(this.state.slideItemMarginLeft); //设置动画开始位置
    }

    /*释放*/
    _onPanResponderRelease(evt, gestureState) {
        // 获取释放后, 最终的xy坐标
        let slideXEnd = this.xPoint + gestureState.dx;  // 计算x/y 点真实的移动路径数据
        let slideYEnd = this.yPoint + 0; // y坐标不允许移动

        // 释放后, 判断未成功验证
        if (this.state.slideItemMarginLeft < this.xMax) {
            this.setState({
                slideItemMarginLeft: 0
            });
            this.xPoint = 0;
            this.yPoint = 0;

            // 释放后, 才允许执行回滚动画
            this.goBackAnimation();
        }
        // 释放后, 判断为成功验证
        else {
            this.xPoint = this.state.slideItemMarginLeft; //移动结束, 更新当前x/y 点的最新位置
            this.yPoint = this.state.slideItemMarginTop;
        }
    }


    /**************************************** 渲染 ****************************************/
    render() {
        return (
            /* 底色视图*/
            <View style={[styles.container, this.props.style]} >

                {/*更随底色-绝对布局*/}
                <Animated.View style={[styles.innerContainer, {
                    backgroundColor: '#63c226',
                    width: this.currentXPoint,
                    position: 'absolute', top: 0, left: 0
                }]}/>

                {/*底部文字视图-绝对布局*/}
                <View style={{
                    width: width,
                    height: fixHeight(40),
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0
                }}>
                    <Text style={{fontSize: 16, color: this.state.slideTipColor}}>{this.state.slideTip}</Text>
                </View>

                {/*滑块-相对布局*/}
                {/*<View style={[styles.item, {*/}
                    {/*marginTop: this.state.slideItemMarginTop,*/}
                    {/*marginLeft: this.state.slideItemMarginLeft*/}
                {/*}]} {...this._panResponder.panHandlers}/>*/}
                <Animated.View style={[styles.item,{
                    marginLeft:this.currentXPoint
                }]} {...this._panResponder.panHandlers}/>

            </View>
        )
    }

    /**************************************** Description ****************************************/

    /*执行回退动画*/
    goBackAnimation() {
        Animated.timing(this.currentXPoint, {
            toValue: 0,
            duration: 500,
            easing: Easing.bezier(0.57, 0.0, 0.745, 0.715)
        }).start()
    }

}


/***************** 工具属性 *****************/
const defaultHeight = 667;
const defaultWidth = 375;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const fixHeight = (h) => {
    return h * (height / defaultHeight);
};

const fixWidth = (w) => {
    return w * (width / defaultWidth);
};

/**************************************** 样式 ****************************************/
const styles = StyleSheet.create({
    container: {
        width: width,
        height: fixHeight(40),
        backgroundColor: '#778899'
    },
    innerContainer: {
        height: fixHeight(40),
    },

    item: {
        width: fixWidth(48),
        height: fixHeight(40),
        backgroundColor: '#F0FFFF'
    }
})