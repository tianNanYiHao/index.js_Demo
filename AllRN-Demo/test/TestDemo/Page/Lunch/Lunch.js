/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-09 10:01
 * @Profile:  Lunch
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
import BaseComponent from "../BaseComponent/BaseComponent";
import CodePush from 'react-native-code-push'

import {NavigationBar} from 'teaset'


// 设置codepush配置选项
let codePushOptions = {
    //设置检查更新的频率
    //ON_APP_RESUME APP恢复到前台的时候
    //ON_APP_START APP开启的时候
    //MANUAL 手动检查
    checkFrequency : CodePush.CheckFrequency.ON_APP_RESUME
};

export default class Lunch extends BaseComponent {


    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    //如果有更新的提示
    syncImmediate() {
        CodePush.sync( {
                //安装模式
                //ON_NEXT_RESUME 下次恢复到前台时
                //ON_NEXT_RESTART 下一次重启时
                //IMMEDIATE 马上更新
                installMode : CodePush.InstallMode.IMMEDIATE ,
                //对话框
                updateDialog : {
                    //是否显示更新描述
                    appendReleaseDescription : true ,
                    //更新描述的前缀。 默认为"Description"
                    descriptionPrefix : "更新内容：" ,
                    //强制更新按钮文字，默认为continue
                    mandatoryContinueButtonLabel : "立即更新" ,
                    //强制更新时的信息. 默认为"An update is available that must be installed."
                    mandatoryUpdateMessage : "必须更新后才能使用" ,
                    //非强制更新时，按钮文字,默认为"ignore"
                    optionalIgnoreButtonLabel : '稍后' ,
                    //非强制更新时，确认按钮文字. 默认为"Install"
                    optionalInstallButtonLabel : '后台更新' ,
                    //非强制更新时，检查到更新的消息文本
                    optionalUpdateMessage : '有新版本了，是否更新？' ,
                    //Alert窗口的标题
                    title : '更新提示'
                } ,
            } ,
        );
    }

    componentWillMount() {
        CodePush.disallowRestart();//禁止重启
        this.syncImmediate(); //开始检查更新
    }

    componentDidMount() {

        CodePush.allowRestart();//在加载完了，允许重启

        let count = 1;
        for (let i = 0; i <= count; i++) {

            setTimeout(() => {
                this.setState({
                    count: i
                });
                if (i === count) {
                    this.replace('LHome');
                }
            }, i * 1000)
        }

    }


    render() {
        return (

            <View>
                {this.renderNoLeftItemNaivgationBar('Lunch页面')}
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#ffeeff',
                    paddingHorizontal: 15,
                    paddingVertical: 25,
                    flexWrap: 'wrap',
                }}>
                    <Text>{this.state.count}</Text>
                    <TouchableOpacity onPress={() => this.action(1)}>
                        <Text style={styles.text}>{'Replace路由:GoHomeddd'}</Text>
                    </TouchableOpacity>

                </View>

            </View>


        )
    }

    action(tag) {
        if (tag === 1) {

        }
    }

}

// 这一行必须要写
Lunch = CodePush(codePushOptions)(Lunch)



const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#889',
        borderWidth: 1,
        borderColor: '#090',

    }
})


//https://www.jianshu.com/p/6a5e00d22723 热跟新教程
//1. 将budle包导入xcode, 然后运行一个release/staging版本,用于生产/测试更新
//2. 修改代码,用于热更新变化,
//3. 执行命令,打出新代码bundle包, 替换到xcode工程,
//4. 执行命令,上传bundle包到code-push,
//5. 手机上杀掉App, 再重新打开, 看到推送及更新
//ps:CodePush默认是更新Staging 环境的，如果发布生产环境的更新包，需要指定--d参数：--d Production，如果发布的是强制更新包，需要加上 --m true强制更新
//ps:切换Production/Staging模式, 需要在Xcode中 Edit Scheme 切换Release/Staging , 记得Clean



