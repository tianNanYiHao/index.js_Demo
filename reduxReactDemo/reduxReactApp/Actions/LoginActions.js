/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-09-27 22:04
 * @Profile:  LoginActions
 * @Project:  reduxReactDemo

 * @Description:
 *
 */

import * as LoginTypes from '../ActionTypes/LoginActionTypes'


const initState = {
	logFlag: ''
}


var user = {
	name: '',
	age: '',
	sex: ''
}


/**
 * 未登录状态
 * @returns {{type: string, logFlag: *, user: null}}
 */
export function loginNoState() {
	return {
		type: LoginTypes.LoginNoState,
		logFlag: '请登录',
		user: user
	}
}

/**
 * 登陆,且记录用户信息
 * @param userInfo
 * @returns {Function}
 */
export function loginSuccess(userInfo) {

	// 解析json字符串
	let userInfoObj = JSON.parse(userInfo)
	return dispatch => {
		dispatch(this.saveUserInfo(userInfoObj))
	}
}

/**
 * 登陆错误
 * @returns {{type: string, logFlag: string, user: null}}
 */
export function loginError() {
	return {
		type: LoginTypes.LoginError,
		logFlag: '登陆错误',
		user: null
	}
}

/**
 * 退出登录前状态
 * @returns {{type: string, logFlag: string}}
 */
export function shouldLogOut() {
	return {
		type:LoginTypes.LogShouldout,
		logFlag:'退出',
	}
}

/**
 * 退出登录
 * @returns {{type: string, logFlag: string, user: null}}
 */
export function logOutSuccess() {
	return {
		type: LoginTypes.LogOutSuccess,
		logFlag: '登出成功',
		user: null
	}
}

/**
 * 存储用户信息
 * @param userInfo
 * @returns {{type: string, logFlag: string, user: *}}
 */
export function saveUserInfo(userInfo) {
	return {
		type: LoginTypes.LoginSuccess,
		logFlag: '登陆成功',
		user: userInfo
	}
}

