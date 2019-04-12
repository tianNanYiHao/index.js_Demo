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

export default class Home extends BaseComponent {


    render() {
        return (

            <View>
                {this.renderNoLeftItemNaivgationBar('FetchTest页面')}
                <TouchableOpacity onPress={() => this.action(3)}>
                    <Text style={styles.text}>{'fetchLoad1'}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.action(4)}>
                    <Text style={styles.text}>{'fetchLoad2'}</Text>
                </TouchableOpacity>

            </View>


        )
    }


    action = (tag) => {
        if (tag === 3) {
            this.load1()
        }
        if (tag === 4) {
            this.load2()
        }
    };


    /*直接使用fetch*/
    load1() {
        let url = 'https://www.hao123.com';
        let header = '';

        fetch(url, header).then((response) => {
            console.log(response)
        }).then((responseData) => {
            console.log(responseData)
        }).catch((e) => {
            console.error(e)
        });
    }

    /*结合async/await 使用fetch*/
    async load2() {
        try {
            let url = 'https://www.hao123.com/111';
            let header = '';
            let data = await fetch(url, header);
        }
        catch (e) {
            console.error(e)
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