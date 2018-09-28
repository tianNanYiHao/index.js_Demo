/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-09-27 22:49
 * @Profile:  ConfigureStore
 * @Project:  reduxReactDemo

 * @Description:
 *
 */


import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../Reducers/RootReducer'

const createStoreWithMiddleWare = applyMiddleware(thunkMiddleware)(createStore)

export default function configureStore(initState) {
	const store = createStoreWithMiddleWare(rootReducer, initState)
	return store
}