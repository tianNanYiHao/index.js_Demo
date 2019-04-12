/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-07 16:53
 * @Profile:  RouteConfigHelp
 * @Project:  test

 * @Description: 路由配置的额外设置
 *
 */


import React, {Component,PureComponent} from 'react'
import {
    InteractionManager,
} from 'react-native'
import RouteManager from "../RouteManager/RouteManager";
import hoistNonReactStatics from 'hoist-non-react-statics'


/*高阶组件,为每个屏幕组件添加路由管理(加载时添加路由/卸载时移除路由)功能更*/
export const AddRouteManagerToComponent = (OldComponent) => {

    class NewComponent extends PureComponent {

        static displayName = `addRouteManagerToComponent(${OldComponent.displayName ||
        OldComponent.name})`;


        componentDidMount() {
            requestAnimationFrame(() => {
                // 页面加载,添加路由
                RouteManager.addNavigation(this.props.navigation);
            });
            // 等待切换动画完成后,再去执行其他操作
            InteractionManager.runAfterInteractions(() => {

            })
        }

        componentWillUnmount() {
            requestAnimationFrame(() => {
                // 页面移除,移除路由
                RouteManager.removeNavigation(this.props.navigation);
            });
            // 等待切换动画完成后,再去执行其他操作
            InteractionManager.runAfterInteractions(() => {

            })
        }

        render() {
            return (
                <OldComponent

                    ref={v => this.oldComponent = v}
                    {...this.props}
                    {...this.props.navigation.state.params}
                />
            )
        }
    }

    return hoistNonReactStatics(NewComponent, OldComponent);

};


/* 为每个屏幕组件添加必要配置*/
export const config = (RoutConfig) => {
    for (let name in RoutConfig) {
        let Component = RoutConfig[name].screen;
        RoutConfig[name].screen = AddRouteManagerToComponent(Component);
    }
    return RoutConfig;
}





