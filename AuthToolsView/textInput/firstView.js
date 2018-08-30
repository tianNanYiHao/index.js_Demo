import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';


import AuthToolView from './authToolView'
import { fixScreenH } from './SzieFix';

export default class firstView extends Component {

    render() {
        return (
            <View >

                <ScrollView style={style.scrollerViewStyle} >

                    {/* 账户输入框 */}
                    <AuthToolView style={style.loginStyle} titleString="登陆账号" textInputPlaceHolderString="输入您的手机号" tipString="您的手机号有误,请重新输入" regType={1} ></AuthToolView>

                    {/* 登陆密码框 */}
                    <AuthToolView titleString="登陆密码" textInputPlaceHolderString="输入您的登陆密码" tipString="您的密码有误,请输入8-20位字母数字密码组合" regType={2}></AuthToolView>

                    {/* 支付密码框 */}
                    <AuthToolView titleString="支付密码" textInputPlaceHolderString="输入您的支付密码" tipString="您的支付密码有误,请输入6位数字密码" regType={3}></AuthToolView>

                    {/* 邮箱 */}
                    <AuthToolView titleString="登陆邮箱" textInputPlaceHolderString="输入您的登陆邮箱" tipString="您的邮箱输入有误,请输入正确邮箱" regType={4}></AuthToolView>

                <View style={style.bottomViewStyle} ></View>
                </ScrollView>

            </View>
        )
    }
}


const style = StyleSheet.create({

    scrollerViewStyle: {
        marginTop: fixScreenH(64),
        height:fixScreenH(600)
    },
    loginStyle: {
        marginTop: fixScreenH(64),
    },
    bottomViewStyle:{
        marginTop:fixScreenH(5),
        width:10,
        height:10
    }



})