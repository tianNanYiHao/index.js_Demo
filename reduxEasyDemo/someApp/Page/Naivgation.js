/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-21 19:58
 * @Profile:  Naivgation
 * @Project:  reduxEasyDemo

 * @Description:
 *
 */


import React from 'react'
import {StackNavigator} from 'react-navigation'

import PageOne from './PageOne'
import PageTwo from './PageTwo'


const AppNav = StackNavigator(
    {

        PageOne: {screen: PageOne},
        PageTwo: {screen: PageTwo},
    },
    {
        headerMode: 'screen'
    }
)

export default AppNav