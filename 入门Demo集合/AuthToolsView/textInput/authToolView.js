

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Animated,
    AlertIOS,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

// 导入尺寸工具
import { screenW, sceeenH, fixScreenW, fixScreenH } from './SzieFix';



export default class AuthToolView extends Component {

    static defauleProps = {
        //标题
        titleString: "",
        //输入框提示文字
        textInputPlaceHolderString: "",
        //警告文字
        tipString: "",
        //正则类型 - 决定输入框功能类型
        regType: 0
    }





    constructor(props) {
        super(props)

        this._onChangeText = this._onChangeText.bind(this)
        this._onEndEditing = this._onEndEditing.bind(this)
        this._onFocus = this._onFocus.bind(this)
        this._isPhoneNumber = this._isPhoneNumber.bind(this)

        this.state = {
            textStr: "",
            tipStr: ""
        }
    }

    _onFocus = () => {
        // 重置警告文字内容
        // 重置文本内容
        this.setState({
            textStr: "",
            tipStr: ""
        })
    }

    _onChangeText = (inputData) => {
        console.log("内容:" + inputData)
        // 实时获取输入的内容保存到state中
        this.setState({
            textStr: inputData
        })
    }

    _onEndEditing = (inputData) => {
        console.log("输入完成:内容为-> " + this.state.textStr)

        // 空字符串过滤掉
        if (this.state.textStr == "") {
            return
        }
        //正则校验
        let ok = this._isPhoneNumber(this.state.textStr)
        if (!ok) {
            this.setState({
                tipStr: this.props.tipString
            })
        }
    }

    // 正则校验 - 手机号
    _isPhoneNumber = (text) => {

        let regT = Number(this.props.regType)
        // 注意, 这是RegExp 正则的两种写法, 有区别,具体百度!!!!
        // const reg = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
        // const reg = new RegExp('^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$');

        // 登陆账户(手机号)
        if (regT == 1){
            const reg = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/ 
            return reg.test(text)
        }
        // 登陆密码(8-20位字母数字)
        if (regT == 2) {
            const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/
            return reg.test(text)
        }
        // 支付密码(6位纯数字)
        if (regT == 3) {
            const reg = /^\d{6}$/
            return reg.test(text)
        }

        // 邮箱()
        if (regT == 4) {
            const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            return reg.test(text)
        }

        return false
    }

    render() {
        return (

            <View style={style.contentView}>
                <Text style={style.title} >{this.props.titleString}</Text>
                <TextInput style={style.textInput}
                    placeholder={this.props.textInputPlaceHolderString}
                    autoFocus={false} //自动弹起键盘
                    clearButtonMode="while-editing"  //当编辑是,出现清空按钮
                    clearTextOnFocus={true} //当每次开始输入时,都会清除文本框的内容
                    password={true}
                    onChangeText={this._onChangeText}
                    onEndEditing={this._onEndEditing}
                    onFocus={this._onFocus}
                >
                </TextInput>
                <View style={style.line} ></View>
                <View style={style.tipView} >
                    <Text style={style.tipText} >{this.state.tipStr}</Text>
                </View>
            </View>
        );
    }


}


const style = StyleSheet.create({

    contentView: {
        marginTop: fixScreenH(25),
        width: screenW,
        backgroundColor: '#fff'
    },

    title: {
        marginLeft: fixScreenW(20),
        color: '#000',
        fontSize: 16
    },

    textInput: {
        // 设置尺寸
        marginLeft: fixScreenW(20),
        width: screenW - 2 * fixScreenW(20),
        height: fixScreenH(30),
        marginTop: fixScreenH(5),
        fontSize: 16,

        // 设置背景颜色
        backgroundColor: '#fff'
    },
    line: {
        marginLeft: fixScreenW(20),
        width: screenW - 2 * fixScreenW(20),
        height: 0.8,
        backgroundColor: '#1C86EE'

    },

    tipView: {
        width: screenW,
        justifyContent: 'center',
        height: fixScreenH(20),

    },

    tipText: {
        // 设置尺寸
        marginLeft: fixScreenW(20),
        width: screenW - 2 * fixScreenW(20),
        color: '#FF0000'

    }


});