import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    TabBarIOS,
} from 'react-native';

//导入各控制器页面
import wyHome from '../wangyiNewAppDemo/wyhome';
import wyFind from '../wangyiNewAppDemo/wyfind';
import wyMsg from '../wangyiNewAppDemo/wymsg';
import wyMine from '../wangyiNewAppDemo/wymine';

export default class wyMain extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            isSelectdItem: 0
        }
    }

    render() {
        return (
            <TabBarIOS
                tintColor={'#FF8C00'}
            >
                {/*首页*/}
                <TabBarIOS.Item
                    icon={require('../../src/img/wyNewsAppDemo/TabBar/tabbar_home.png')}
                    selectedIcon={require('../../src/img/wyNewsAppDemo/TabBar/tabbar_home_highlighted.png')}
                    title={'首页'}
                    selected={this.state.isSelectdItem == 0}
                    onPress={() => { this.setState({ isSelectdItem: 0 }) }}
                >
                    <NavigatorIOS
                        style={{ flex: 1 }}
                        tintColor={'#FF8C00'}
                        initialRoute={
                            {
                                component: wyHome,
                                title: '首页',
                                rightButtonIcon: require('../../src/img/wyNewsAppDemo/NavigationBar/navigationbar_friendattention.png'),
                                leftButtonIcon: require('../../src/img/wyNewsAppDemo/NavigationBar/navigationbar_pop.png')
                            }
                        }
                    />
                </TabBarIOS.Item>

                {/*发现*/}
                <TabBarIOS.Item
                    icon={require('../../src/img/wyNewsAppDemo/TabBar/tabbar_discover.png')}
                    selectedIcon={require('../../src/img/wyNewsAppDemo/TabBar/tabbar_discover_highlighted.png')}
                    title={'发现'}
                    selected={this.state.isSelectdItem == 1}
                    onPress={() => { this.setState({ isSelectdItem: 1 }) }}
                >
                    <NavigatorIOS
                        style={{ flex: 1 }}
                        initialRoute={
                            {
                                component: wyFind,
                                title: '发现'
                            }
                        }
                    />
                </TabBarIOS.Item>

                {/*消息*/}
                <TabBarIOS.Item
                    icon={require('../../src/img/wyNewsAppDemo/TabBar/tabbar_message_center.png')}
                    selectedIcon={require('../../src/img/wyNewsAppDemo/TabBar/tabbar_message_center_highlighted.png')}
                    title={'消息'}
                    selected={this.state.isSelectdItem == 2}
                    onPress={() => { this.setState({ isSelectdItem: 2 }) }}
                >
                    <NavigatorIOS
                        style={{ flex: 1 }}
                        initialRoute={
                            {
                                component: wyMsg,
                                title: '消息中心'
                            }
                        }
                    />
                </TabBarIOS.Item>

                {/*我的*/}
                <TabBarIOS.Item
                    icon={require('../../src/img/wyNewsAppDemo/TabBar/tabbar_profile.png')}
                    selectedIcon={require('../../src/img/wyNewsAppDemo/TabBar/tabbar_profile_highlighted.png')}
                    title={'我的'}
                    selected={this.state.isSelectdItem == 3}
                    onPress={() => { this.setState({ isSelectdItem: 3 }) }}
                >
                    <NavigatorIOS
                        style={{ flex: 1 }}
                        initialRoute={
                            {
                                component: wyMine,
                                title: '个人中心'
                            }
                        }
                    />
                </TabBarIOS.Item>

            </TabBarIOS>
        );

    }
}

const style = StyleSheet.create({

    container: {
        flex: 1
    }

});
