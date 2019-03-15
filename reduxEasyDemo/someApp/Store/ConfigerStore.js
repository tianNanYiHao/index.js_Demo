/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-15 10:50
 * @Profile:  ConfigerStore
 * @Project:  reduxSecondDemo

 * @Description:
 *
 */


/*
* Store配置文件
* */

import {createStore,applyMiddleware} from 'redux';

import thunkMiddleware from 'redux-thunk'
import rootReducer from '../Reducer/RootReducer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);


export default function configerStore(initState) {
    const store = createStoreWithMiddleware(rootReducer,initState);
    return store;
}