/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
} from 'react-native';

var Dimensions = require('Dimensions');
var rightLeftSpace = 20;
var screenWidth = Dimensions.get('window').width;

class LoginView extends Component {
    render() {
        return (

            <View style={styles.container}>
                {/*头像image*/}
                <Image source={require('./ios/myApp/Images.xcassets/loginDemo/iconLogin.png')} style={styles.iconStyle}></Image>
                {/*输入textInput*/}
                <TextInput placeholder={'请输入登陆账号'} keyboardType={'default'} style=
                    {styles.textInputViewStyle}></TextInput>
                <TextInput placeholder={'请输入登陆密码'} keyboardType={'number-pad'} secureTextEntry={true}
                    style={styles.textInputViewStyle}></TextInput>
                {/*登陆按钮*/}
                <View style={styles.logBtnStyle}>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                    }}>登 陆</Text>
                </View>
                {/*新用户text*/}
                <View style={styles.newUserView}>
                    <Text style={styles.newUserTextStyle}>忘记密码</Text>
                    <Text style={styles.newUserTextStyle}>新用户注册</Text>
                </View>
                {/*其他登陆方式*/}
                <View style={styles.bottomViewStyle}>
                    <Text>其他快捷方式登陆:</Text>
                    <Image source={require('./ios/myApp/Images.xcassets/loginDemo/iconWX.png')} style={styles.bottomIconStyle}></Image>
                    <Image source={require('./ios/myApp/Images.xcassets/loginDemo/iconWB.png')} style={styles.bottomIconStyle}></Image>
                    <Image source={require('./ios/myApp/Images.xcassets/loginDemo/iconFB.png')} style={styles.bottomIconStyle}></Image>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //背景视图样式
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        alignItems: 'center',
    },
    //icon样式
    iconStyle: {
        marginTop: 64,
        marginBottom: 60,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#45f5'
    },
    //输入框样式
    textInputViewStyle: {
        marginLeft: rightLeftSpace,
        marginBottom: 1,
        height: 45,
        width: screenWidth - rightLeftSpace * 2,
        textAlign: 'center',
        borderColor: '#dddddd',
        borderWidth: 1,
        borderRadius: 5

    },
    //登陆样式
    logBtnStyle: {
        backgroundColor: '#58A5F6',
        width: screenWidth - rightLeftSpace * 2,
        height: 48,
        marginTop: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    //新用户背景图样式
    newUserView: {
        width: screenWidth - rightLeftSpace * 2,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    //新用户text样式
    newUserTextStyle: {
        color: '#358BEF',

    },
    //底部视图样式
    bottomViewStyle: {
        position: 'absolute',
        bottom: 20,
        left: rightLeftSpace,
        flexDirection:'row',
        alignItems:'center',
    },
    bottomIconStyle: {
        height:40,
        width:40,
        marginLeft:10
    }


})


//输出 LoginView 这个类
export default LoginView;
