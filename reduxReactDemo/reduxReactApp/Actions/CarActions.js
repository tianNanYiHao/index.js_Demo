/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-09-27 22:04
 * @Profile:  CarActions
 * @Project:  reduxReactDemo

 * @Description:
 *
 */

import * as CarActionTypes from '../ActionTypes/CarActionTypes'

const initState = {
	carNumber: 0
}


var carCount = 0


export function decrement() {
	return (dispatch) => {
		dispatch(this.changeCarNumber(false))
	}
}

export function increment() {
	return (dispatch) => {
		dispatch(this.changeCarNumber(true))
	}
}

export function changeCarNumber(isIncrement) {

	// + 不超过10件商品
	if (isIncrement) {
		if (carCount >= 10) {
			carCount = 10
		} else {
			carCount = carCount + 1
		}
		return {
			type: CarActionTypes.Increment,
			carNumber: carCount
		}

	}
	// - 最少1件商品
	else {
		if (carCount == 1) {
			carCount = 1
		} else {
			carCount = carCount - 1
		}
		return {
			type: CarActionTypes.Decrement,
			carNumber: carCount
		}


	}

}

