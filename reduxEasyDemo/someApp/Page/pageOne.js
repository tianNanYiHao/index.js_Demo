/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-15 11:05
 * @Profile:  pageOne
 * @Project:  reduxSecondDemo

 * @Description:
 *
 */


import React, {Component} from 'react'

import {connect} from 'react-redux'


import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import {loadSomeThing} from "../Action/loadAction";


class PageOne extends Component {

    render() {
        return (
            <TouchableOpacity onPress={() => this.touchLoad()}>
                <View style={{height:300, flexDirection: 'column', justifyContent: 'center'}}>
                    <Text>{this.props.loadInfo}</Text>
                    <Text>{'----------点我看效果-------------'}</Text>
                    <Text>{this.props.abcdefg}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    touchLoad() {
        console.log('================')
        this.props.dispatch(loadSomeThing())
    }
}

const mapStateToProps = (store) => {
    return {
        loadInfo: store.loadReducer.info,
        abcdefg: '我是乱加的props属性哈哈哈'
    }
}
export default connect(mapStateToProps)(PageOne)