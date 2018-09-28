/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-09-27 22:42
 * @Profile:  RootReducer
 * @Project:  reduxReactDemo

 * @Description:
 *
 */

import {combineReducers} from 'redux'

import carReducer from '../Reducers/CarReducer'
import loginReducer from '../Reducers/LoginReducer'

const rootReducer = combineReducers({
	carReducer,
	loginReducer
})

export default rootReducer