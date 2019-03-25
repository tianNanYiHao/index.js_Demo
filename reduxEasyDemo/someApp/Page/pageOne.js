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
            <View style={{flex: 1, alignItems: 'center'}}>
                <TouchableOpacity onPress={() => this.touchLoad(1)}>
                    <View style={{
                        height: 150,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backgroundColor: '#3cffff'
                    }}>
                        <Text>{this.props.loadInfo}</Text>
                        <Text>{'----------点我看效果1-------------'}</Text>
                        <Text>{this.props.abcdefg}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.touchLoad(2)}>
                    <View style={{height: 150, flexDirection: 'column', justifyContent: 'center', backgroundColor:'#055909'}}>
                        <Text>{this.props.loadInfo}</Text>
                        <Text>{'----------点我看效果2-------------'}</Text>
                        <Text>{this.props.abcdefg}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.touchLoad2()}>
                    <View style={{
                        height: 300,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backgroundColor: '#bbcc22'
                    }}>
                        <Text>{'----------点我跳页面-------------'}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }

    touchLoad(type) {

        if (type===1){

        this.props.dispatch(loadSomeThing(true))
        }
        if (type ===2){
        this.props.dispatch(loadSomeThing(false))

        }

    }

    touchLoad2() {
        console.log(this.props.navigation)
        console.log('=======点击 push到PageTwo =========');
        this.props.navigation.push('PageTwo')
    }
}

const mapStateToProps = (store) => {
    return {
        loadInfo: store.loadReducer.info,
        abcdefg: '我是乱加的props属性哈哈哈'
    }
}
export default connect(mapStateToProps)(PageOne)