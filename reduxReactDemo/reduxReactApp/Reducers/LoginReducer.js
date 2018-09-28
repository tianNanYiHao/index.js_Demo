/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-09-27 22:29
 * @Profile:  LoginReducer
 * @Project:  reduxReactDemo

 * @Description:
 *
 */

import * as LoginActionTypes from '../ActionTypes/LoginActionTypes'

// 需要用到的状态列表
const initState = {
	logFlag: '',
	user: null
}

/**
 * reducer (纯函数)- 接收一个action预处理事件,接受一个旧状态,返回给store一个新状态!
 * @param state
 * @param action
 * @returns {{logFlag: string, user: null}}
 */
export default function loginReducer(state = initState, action) {
	switch (action.type) {
		/***************** 登陆成功 *****************/
		case LoginActionTypes.LoginSuccess:
			return {
				...state,
				logFlag: action.logFlag,
				user: action.user
			}
			break;
		/***************** 登陆错误 *****************/
		case LoginActionTypes.LoginError:
			return {
				...state,
				logFlag: action.logFlag,
				user: action.user
			}
			break;
		/***************** 登出成功 *****************/
		case LoginActionTypes.LogOutSuccess:
			return {
				...state,
				logFlag: action.logFlag,
				user: action.user
			}
			break;
		/***************** 未登录状态 *****************/
		case LoginActionTypes.LoginNoState:
			return {
				...state,
				logFlag: action.logFlag,
				user: action.user
			}
			break;
		/***************** 退出前状态 此处不需要更新User*****************/
		case LoginActionTypes.LogShouldout:
			return {
				...state,
				logFlag: action.logFlag,
			}
			break;
		default:
			return state
	}

}
