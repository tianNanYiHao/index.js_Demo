/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-09-27 22:29
 * @Profile:  CarReducer
 * @Project:  reduxReactDemo

 * @Description:
 *
 */


import * as CarActionTypes from '../ActionTypes/CarActionTypes'

const initState = {
	carNumber: 0
}


/**
 * reducer (纯函数)- 接收一个action预处理事件,接受一个旧状态,返回给store一个新状态!
 * @param state
 * @param action
 * @returns {{logFlag: string, user: null}}
 * ps:方法名可以根据业务任意写, 会由Redux自动调用!
 */
export default function upDataCarNum(state = initState, action) {
	switch (action.type) {
		case CarActionTypes.Increment:
			return {
				...state,
				carNumber: action.carNumber
			}
			break;
		case CarActionTypes.Decrement:
			return {
				...state,
				carNumber: action.carNumber
			}
		default:
			return state
	}

}
