/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-10-24 13:42
 * @Profile:  Navgation
 * @Project:  FlatlistDemo

 * @Description:
 *
 */


import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'

import *as page from '../page'


export default Navigatior = StackNavigator(
    {

        page1: {screen: page.page1},
        page2: {screen: page.page2},
        page3: {screen: page.page3}

    },
    {
        initialRouteName: "page1",
        cardStyle: ({
            backgroundColor: '#090'
        }),
        navigationOptions: {
            header: null,
            gesturesEnabled: true
        }
    }

)

