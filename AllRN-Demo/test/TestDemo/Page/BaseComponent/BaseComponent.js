/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-09 15:21
 * @Profile:  BaseComponent
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

import React, {Component} from 'react'
import {
    Text,
    Platform,
    Image,
    View,
    AlertIOS,
    Button,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import RouteManager from "../../RouteManager/RouteManager";
import {NavigationBar} from 'teaset'
export default class BaseComponent extends Component {


    /**
     * 创建通用导航栏视图
     * @param title 标题
     * @param bgColor 背景色
     * @param hideLine 是否隐藏底部线
     * @returns {*}
     */
    renderNomalNavigationBar(title = '标题', bgColor = '#ff90db', hideLine = true) {
        return <NavigationBar
                type={'ios'}
                title={title}
                style={{backgroundColor: bgColor, position:'relative'}}
                leftView={this.createNavLeftItem()}
                rightView={this.createNavRightItem()}
                hiddenLine={hideLine}
            />
    }

    /**
     * 创建无左边按钮的导航bar
     * @param title
     * @param bgColor
     * @param hideLine
     * @returns {*}
     */
    renderNoLeftItemNaivgationBar(title = '标题', bgColor = '#ff90db', hideLine = true) {
        return <NavigationBar
                type={'ios'}
                title={title}
                style={{backgroundColor: bgColor, position:'relative'}}
                hiddenLine={hideLine}
            />
    }


    /*创建导航左边视图*/
    createNavLeftItem() {
        return <TouchableOpacity onPress={() => this.pop()}>
            <Text>返回</Text>
        </TouchableOpacity>
    }

    /*创建导航右边视图*/
    createNavRightItem() {

    }


    /*跳转*/
    push(routeName, params) {
        RouteManager.push(routeName, params)
    }

    /*返回*/
    pop() {
        RouteManager.pop();
    }

    /*返回指定页面*/
    goBack(routeName, params) {
        RouteManager.goBack(routeName)
    }

    /*返回到首页*/
    popToTop(params) {
        RouteManager.popToTop(params)
    }

    /*切换当前路由*/
    replace(routeName, params) {
        RouteManager.replace(routeName, params)
    }

    /*重置路由*/
    reset(routes, index) {
        RouteManager.reset(routes, index)
    }


}

