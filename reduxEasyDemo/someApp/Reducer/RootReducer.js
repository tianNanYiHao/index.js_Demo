/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-15 10:50
 * @Profile:  RootReducer
 * @Project:  reduxSecondDemo

 * @Description:
 *
 */


/*
* 创建RootReducer,管理各reducer
* */

import {combineReducers} from 'redux'

import loadReducer from './loadReducer'

const rootReducer = combineReducers({
    loadReducer,

})

export default rootReducer