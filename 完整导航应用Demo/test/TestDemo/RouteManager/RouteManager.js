/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-08 10:46
 * @Profile:  RouteManager
 * @Project:  test

 * @Description: 路由管理类
 *
 */


import {NavigationActions} from 'react-navigation'

export default class RouteManager {

    /*当前路由栈,栈顶路由对象:navigation*/
    static navigation = null;

    /*当前路由栈对象列表*/
    static navigationArr = [];

    /*重复点击的间隔时间*/
    static intervalTime = 500;

    /*上次点击的时间*/
    static lastActionTime = 0;

    /*顶级路由对象*/
    static topLevelNavigator = null;

    /*是否使用顶级导航器模式*/
    static useTopLevelNavigator = true;


    /**
     * 获取顶级路由对象(顶级导航器)
     * @param navigatorRef 顶级导航器
     */
    static setTopLevelNaivgator(navigatorRef) {
        this.topLevelNavigator = navigatorRef;
    }

    /**
     * 将栈顶路由对象添加到当前路由栈列表
     * 建议由屏幕组件的didMount触发
     * @param navigation 栈顶路由对象
     */
    static addNavigation(navigation) {
        let index = this.navigationArr.findIndex((item) => navigation.state.key === item.state.key);
        if (index === -1) {
            this.navigation = navigation;
            this.navigationArr.push(navigation)
        }
    }

    /**
     * 将栈顶路由对象从当前路由栈列表删除
     * 建议由屏幕组件的willUnMount触发
     * @param navigation 栈顶路由对象
     */
    static removeNavigation(navigation) {
        let index = this.navigationArr.findIndex((item) => navigation.state.key === item.state.key);

        this.navigationArr.splice(index, 1);
        this.navigation = this.navigationArr[this.navigationArr.length - 1];
    }


    /**
     * 跳转指定路由
     * @param routeName 路由名
     * @param params 传递参数
     * @param delay 避免重复点击
     * @param useTopLevelNavigator 是否以顶级导航器方式管理路由,默认为NO
     */
    static push(routeName, params, delay = true, useTopLevelNavigator = this.useTopLevelNavigator) {
        let nowTime = new Date().getTime();
        if ((nowTime - this.lastActionTime) <= this.intervalTime && delay) {
            console.log('短时间点击太过频繁');
            return;
        }
        if (!this.navigation) {
            console.log('路由未创建,请检查');
        }
        this.lastActionTime = nowTime;

        if (useTopLevelNavigator) {
            this.topLevelNavigator._navigation.push(routeName, params);
        } else {
            this.navigation.navigate(routeName, params);
        }
    }

    /**
     * 返回到指定路由页面
     * @param routeName 路由名
     * @param useTopLevelNavigator 是否以顶级导航器方式管理路由,默认为NO
     */
    static goBack(routeName, useTopLevelNavigator = this.useTopLevelNavigator) {
        if (routeName) {
            if (useTopLevelNavigator) {
                let index = this.topLevelNavigator._navigation.state.routes.findIndex((item) => routeName === item.routeName);
                let key = this.topLevelNavigator._navigation.state.routes[index + 1].key;//a,b,c,d 由d->b, 需要拿到c的key, 再去执行goBack(key)
                this.topLevelNavigator._navigation.goBack(key);
            } else {
                let index = this.navigationArr.findIndex((item) => routeName === item.state.routeName);
                let tagetNavigation = this.navigationArr[index + 1]; //a,b,c,d 由d->b, 需要拿到c的key, 再去执行goBack(key)
                let key = tagetNavigation.state.key;
                this.navigation.goBack(key)
            }
        } else {
            if (useTopLevelNavigator) {
                this.topLevelNavigator._navigation.goBack();
            } else {
                this.navigation.goBack();
            }
        }

    }

    /**
     * 返回上一级路由页面
     * @param useTopLevelNavigator 是否以顶级导航器方式管理路由,默认为NO
     */
    static pop(useTopLevelNavigator = this.useTopLevelNavigator) {
        if (useTopLevelNavigator) {
            this.topLevelNavigator._navigation.pop();
        } else {
            this.navigation.pop();
        }
    }

    /**
     * 返回到最底层路由
     * @param params 参数
     * @param useTopLevelNavigator 是否以顶级导航器方式管理路由,默认为NO
     */
    static popToTop(params, useTopLevelNavigator = this.useTopLevelNavigator) {
        if (useTopLevelNavigator) {
            this.topLevelNavigator._navigation.popToTop(params)
        } else {
            this.navigation.popToTop(params);
        }
    }

    /**
     * 替换当前路由
     * @param routeName 路由名
     * @param params 参数
     * @param useTopLevelNavigator 是否以顶级导航器方式管理路由,默认为NO
     */
    static replace(routeName, params, useTopLevelNavigator = this.useTopLevelNavigator) {
        if (useTopLevelNavigator) {
            this.navigation.replace(routeName, params)
        } else {
            this.navigation.replace(routeName, params);
        }
    }

    /**
     * 重置路由信息
     * @param routes 路由名字数组
     * @param index  最顶层路由下标
     * @param useTopLevelNavigator 是否以顶级导航器方式管理路由,默认为NO
     */
    static reset(routes, index = 0, useTopLevelNavigator = this.useTopLevelNavigator) {

        let routesArr = [];
        for (let i = 0; i < routes.length; i++) {
            let route = routes[i];
            routesArr.push(NavigationActions.navigate({routeName: route.routeName, params: route.params}))
        }
        const resetAction = NavigationActions.reset({actions: routesArr, index: index});

        if (useTopLevelNavigator) {
            this.topLevelNavigator.dispatch(resetAction)
        } else {
            this.navigation.dispatch(resetAction);
        }
    }
}

// 全局化
global.RouteManager = RouteManager;