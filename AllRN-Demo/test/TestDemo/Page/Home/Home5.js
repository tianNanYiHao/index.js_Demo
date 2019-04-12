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

export default class Home5 extends BaseComponent {


    render() {
        return (
            <View>
                {this.renderNoLeftItemNaivgationBar('Home5页面')}
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 64
                }}>

                    <TouchableOpacity onPress={() => this.action(1)}>
                        <Text style={styles.text}>{'GoBack:Home2'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.action(2)}>
                        <Text style={styles.text}>{'resetRoute: LHome->LHome3'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    action(tag) {
        if (tag === 1) {
            this.goBack('LHome2')
        }
        if (tag === 2) {
            this.reset([{"routeName":"LHome"},{"routeName":"LHome3"}],1)

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