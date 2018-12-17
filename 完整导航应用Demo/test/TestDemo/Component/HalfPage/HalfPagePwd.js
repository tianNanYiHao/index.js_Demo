/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-13 17:35
 * @Profile:  HalfPage
 * @Project:  test

 * @Description: 公共组件:按类型创建的,带动画的不同半页视图组件,仅负责动画处理
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


class HalfPagePwd extends Component {


    /**************************************** 初始构造 ****************************************/
    static propTypes = {
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
        return (
            <Animated.View style={[stylePaypwd.container, {
                height: this.state.halfPageHeight.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, this.defaultHalfPageHeight]
                })
            }]}>
                <Text>{`密码页`}</Text>
            </Animated.View>
        )

    }


    /**************************************** 逻辑调用 ****************************************/

    /**************************************** 外部方法 ****************************************/

    /*创建show动画对象*/
    getShowAnimated() {
        return Animated.timing(this.state.halfPageHeight, {
            toValue: 1,
            duration: 500,
            easing: Easing.bezier(0.07, 0.27, 0, 0.97)
        })
    }

    /*创建hide动画对象*/
    getHideAnimated() {
        return Animated.timing(this.state.halfPageHeight, {
            toValue: 0,
            duration: 500,
            easing: Easing.bezier(0.44, 0.07, 0.87, 0.34)
        })
    }

    /*半页展示*/
    show() {
        this.getShowAnimated().start()

    }

    /*半页隐藏*/
    hide() {
        this.getHideAnimated().start()
    }

}

/***************** 密码半页样式 *****************/
const stylePaypwd = StyleSheet.create({
    container: {
        width: pxdp.width,
        backgroundColor: '#0cdfea',
        position: 'absolute',
        bottom: 0,
    }
});

export default HalfPagePwd;