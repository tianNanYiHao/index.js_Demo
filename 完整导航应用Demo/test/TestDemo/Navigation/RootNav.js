/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-02 16:11
 * @Profile:  RootNav
 * @Project:  test

 * @Description: 根据路由配置信息(RouteConfigs,) 创建顶级导航RootNav
 *
 */


import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'

import RouteConfigs from "./RouteConfigs";

const RootNav = StackNavigator(

    //路由配置
    RouteConfigs,

    //导航样式设置
    {
        initialRouteName: "LLunch",
        navigationOptions:{
            header:null,
        }
    }
);

export default RootNav