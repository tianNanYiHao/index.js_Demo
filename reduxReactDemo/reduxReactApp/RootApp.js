/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-09-27 16:28
 * @Profile:  RootApp
 * @Project:  reduxReactDemo

 * @Description:
 *
 */


import React, {Component} from 'react'
import {
	View,
	Text
} from 'react-native'

import {Provider} from 'react-redux'
import NavigationApp from './NavigationAPP'
import configureStore from './ConfigureStore/ConfigureStore'

const store = configureStore()

export default class RootApp extends Component {

	render() {
		return (
			<Provider store={store}>
				<NavigationApp/>
			</Provider>
		)
	}

}
