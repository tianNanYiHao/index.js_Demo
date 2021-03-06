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
import {addCustomProps} from "../../Common/AddComponetProps";

export default class Home2 extends BaseComponent {

  //组件加载完成
  componentDidMount() {
    console.log("=====================================222")
  }

  componentWillUnmount() {
    console.log("=====================================333")
  }
    render() {
        return (
            <View>
                {this.renderNoLeftItemNaivgationBar('Home2页面')}
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 64
                }}>

                    <TouchableOpacity onPress={() => this.action(1)}>
                        <Text style={styles.text}>{'Push:Home3'}</Text>
                    </TouchableOpacity>
                </View>
            </View>


        )
    }

    action(tag) {
        if (tag === 1) {
            this.push('LHome3')

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
