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

import {NavigationBar} from 'teaset'

export default class Lunch extends BaseComponent {


    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {

        let count = 1;
        for (let i = 0; i <= count; i++) {

            setTimeout(() => {
                this.setState({
                    count: i
                });
                if (i === count) {
                    this.replace('LHome');
                }
            }, i * 1000)
        }

    }


    render() {
        return (

            <View>
                {this.renderNoLeftItemNaivgationBar('Lunch页面')}
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#ffeeff',
                    paddingHorizontal: 15,
                    paddingVertical: 25,
                    flexWrap: 'wrap',
                }}>
                    <Text>{this.state.count}</Text>
                    <TouchableOpacity onPress={() => this.action(1)}>
                        <Text style={styles.text}>{'Replace路由:GoHome'}</Text>
                    </TouchableOpacity>

                </View>

            </View>


        )
    }

    action(tag) {
        if (tag === 1) {

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