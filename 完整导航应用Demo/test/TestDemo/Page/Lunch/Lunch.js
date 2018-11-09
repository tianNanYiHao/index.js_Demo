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

export default class Lunch extends BaseComponent {


    render() {
        return (
            <View style={{flex:1}}>

                {this.renderNoLeftItemNaivgationBar('Lunch页面')}
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#ffeeff',
                    paddingHorizontal: 15,
                    paddingVertical: 25,
                    flexWrap: 'wrap',
                    marginTop:64
                }}>
                    <TouchableOpacity onPress={() => this.action(1)}>
                        <Text style={styles.text}>{'Replace路由:GoHome'}</Text>
                    </TouchableOpacity>

                </View>

            </View>


        )
    }

    action(tag) {
        if (tag === 1) {
            this.replace('LHome');
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