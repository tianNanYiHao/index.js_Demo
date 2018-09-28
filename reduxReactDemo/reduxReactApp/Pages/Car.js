/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-09-27 16:25
 * @Profile:  Car
 * @Project:  reduxReactDemo

 * @Description:
 *
 */

import React, {Component} from 'react'
import {
	Platform,
	View,
	Text,
	StyleSheet
} from 'react-native'

import Counter from "../Component/Counter";
import Button from "../Component/Button";

import {connect} from 'react-redux'
import *as LogActions from '../Actions/LoginActions'
import *as carActions from '../Actions/CarActions'

class Car extends Component {

	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: -100}}>
				<Text>{this.props.currentUser.name}</Text>
				<Text>{this.props.currentUser.age}</Text>
				<Text>{this.props.currentUser.sex}</Text>
				<Counter counter={this.props.currentCarNum} decrementFn={this.decrementFn.bind(this)} incrementFn={this.incrementFn.bind(this)}/>
				<Button text={this.props.currentLogFlag} onClick={this.onClick.bind(this)}/>
			</View>
		)
	}

	incrementFn() {
		this.props.dispatch(carActions.increment())
	}

	decrementFn() {
		this.props.dispatch(carActions.decrement())
	}

	onClick() {
		this.props.dispatch(LogActions.logOutSuccess())
		this.props.navigation.replace('Login')
	}


}

const styles = StyleSheet.create({})

/**************************************** 关联Redux ****************************************/

const mapStateToProps = (store) => {
	return {
		currentCarNum: store.carReducer.carNumber,
		currentUser: store.loginReducer.user,
		currentLogFlag:store.loginReducer.logFlag
	}
}

export default connect(mapStateToProps)(Car)
