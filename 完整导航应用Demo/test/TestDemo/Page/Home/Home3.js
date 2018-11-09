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

export default class Home3 extends BaseComponent {


    render() {
        return (

            <View>
                {this.renderNomalNavigationBar('Home3页面')}
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 64
                }}>

                    <TouchableOpacity onPress={() => this.action(1)}>
                        <Text style={styles.text}>{'Push:Home4'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.action(2)}>
                        <Text style={styles.text}>{'popToTop'}</Text>
                    </TouchableOpacity>
                </View>

            </View>


        )
    }

    action(tag) {
        if (tag === 1) {
            this.push('LHome4')
        }
        if (tag === 2) {
            this.popToTop();
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