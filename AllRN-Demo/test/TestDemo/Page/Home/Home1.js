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

export default class Home1 extends BaseComponent {

    constructor(props) {
        super(props);
        this.flag = false;
        this.state = {
            urll: '',
        };
    }

    render() {
        return (

            <View>
                {this.renderNoLeftItemNaivgationBar('Home1页面')}
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 64
                }}>

                    <TouchableOpacity onPress={() => this.action(1)}>
                        <Text style={styles.text}>{'Push:Home2'}</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => this.change()}>
                    <Image source={{uri: this.state.urll}}
                           style={{height: 100, width: 100}}/>
                           <Text>sssssss</Text>
                </TouchableOpacity>

            </View>

        )
    }

    /**************************************** Description ****************************************/
    change() {
        this.flag = !this.flag;
        if (this.flag) {

            this.setState({
                urll:'https://go-test.sandpay.com.cn/sandbaotest/扫一扫.png'
            })
        }
        else {
            this.setState({
                urll:'https://go-test.sandpay.com.cn/sandbaotest/扫一扫1.png'
            })
        }
    }

    action(tag) {
        if (tag === 1) {
            this.push('LHome2')
        }
    }

}

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