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
import RouteManager from "../../RouteManager/RouteManager";
import BaseComponent from "../BaseComponent/BaseComponent";

export default class Home extends BaseComponent {


    render() {
        return (

            <View>
                {this.renderNoLeftItemNaivgationBar('Home页面')}
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#ffeeff',
                    paddingHorizontal: 15,
                    paddingVertical: 35,
                    flexWrap: 'wrap',
                    marginTop: 64
                }}>

                    <TouchableOpacity onPress={() => this.action(0)}>
                        <Text style={styles.text}>{'Push:Home1'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.action(1)}>
                        <Text style={styles.text}>{'TestDemo'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.action(2)}>
                        <Text style={styles.text}>{'TeasetSelect'}</Text>
                    </TouchableOpacity>


                </View>

            </View>


        )
    }

    action(tag) {
        if (tag === 0) {
            this.push('LHome1')
        }

        if (tag === 1) {
            this.push('LTestDemo')
        }
        if (tag === 2) {
            this.push('LTeasetSelect')
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