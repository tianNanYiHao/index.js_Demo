/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView,
    AlertIOS,
    Button
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render() {
        return (
            <View style={{width: '100%', height: '50%', margin: 10, flexDirection: 'column'}}>


                <WebView
                    ref={'webView'}
                    source={require('./page1.html')}
                    automaticallyAdjustContentInsets={true}
                    javaScriptEnabled={true}
                    scalesPageToFit={true}
                    style={{width: 200, height: 50, backgroundColor: '#090'}}
                    onMessage={this.htmlPostMessage} //监听web发过来的数据
                />

                <Button title="RN向web发送消息,方式一" style={{height: 100, width: 100, backgroundColor: '#090'}}
                        onPress={()=>this.rnPostMessage1()}
                />
                <Button title="RN向web发送消息,方式二" style={{height: 100, width: 100, backgroundColor: '#090'}}
                        onPress={()=>this.rnPostMessage2()}
                />

            </View>
        );
    }




    // 接受web向RN通信的方法
    // HTML->RN
    htmlPostMessage(e) {
        AlertIOS.alert(e.nativeEvent.data);
    }


    // RN->HTML 方法一: 通过js注入的方式
    rnPostMessage1() {
        let tn = 'dfsaf9909090907778765aa545xllo2777vvv';
        let state = '0001';

        let jsStr = `spsReturn('${tn}','${state}')`;
        this.refs.webView.injectJavaScript(jsStr);
    }

    // RN->HTML 方法二: html通过监听message事件
    rnPostMessage2() {
        this.refs.webView.postMessage('html通过监听message方法, 获取RN传递的信息')
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
