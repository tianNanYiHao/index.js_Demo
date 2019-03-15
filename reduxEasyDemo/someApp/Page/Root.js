/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-15 11:01
 * @Profile:  Root
 * @Project:  reduxSecondDemo

 * @Description:
 *
 */




import React,{Component} from 'react'
import {Provider} from 'react-redux'
import configerStore from '../Store/ConfigerStore'

import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity

} from 'react-native'

import PageOne from './pageOne'

const store = configerStore()

export default class Root extends Component{
    render(){
        return (

            <Provider store={store}>
                <PageOne/>
            </Provider>
        )
    }
}

