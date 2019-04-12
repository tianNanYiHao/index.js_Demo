/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-03 17:44
 * @Profile:  RenderTest
 * @Project:  test

 * @Description:
 *
 */


import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native'
import pxdp from "../../Common/pxdp";

export default class RenderTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'abc',
            state2: ''
        };
        console.log(`构造函数中:=====>${this.state.title}`);
    }


    componentWillMount() {
        console.log(`componentWillMount中:=====>${this.state.title}`);
    }


    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.title === 'fff') {
            return true
        }
        return true
    }


    componentWillUpdate(nextProps, nextState) {

        console.log(`componentWillUpdate中this:=====>${this.state.title}`);
        console.log(`componentWillUpdate中nextState:=====>${nextState.title}`);
    }

    componentDidUpdate(nextProps, nextState) {
        console.log(`componentDidUpdate中this:=====>${this.state.title}`);
        console.log(`componentDidUpdate中nextState:=====>${this.state.title}`);
    }


    render() {
        console.log(`render中:=====>${this.state.title}`);
        console.log(`render中:=====>${this.state.state2}`);
        return (
            <TouchableOpacity onPress={() => this.touchTitle()}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: pxdp.width,
                    height: pxdp.fixHeight(400)
                }}>
                    <Text>测试本页,需debug查看console.log()</Text>
                    <Text style={{fontSize: 20, color: '#09ccff'}}>{this.state.title}</Text>
                    <Text style={{fontSize: 20, color: '#fdea99'}}>{this.state.state2}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    touchTitle = () => {
        console.log(`触发setState前:=====>${this.state.title}`);
        console.log(`触发setState前:=====>${this.state.state2}`);
        this.setState({
            title: 'fff'
        })

        setTimeout(() => {
            this.setState({
                state2: 'ssss'
            })
        },300)

        console.log(`触发方法setState后:=====>${this.state.title}`);
        console.log(`触发方法setState后:=====>${this.state.state2}`);
    }


}