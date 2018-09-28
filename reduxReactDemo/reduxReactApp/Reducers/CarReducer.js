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

export default function carReducer(state = initState, action) {
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
