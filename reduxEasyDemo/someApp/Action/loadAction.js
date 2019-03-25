/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-15 13:49
 * @Profile:  loadAction
 * @Project:  reduxSecondDemo

 * @Description:
 *
 */


import {loadSuccess, loadError} from './loadActionType'


/*
* 在page页面关联Redux后,
* 通过page页面的dispatch调用该方法
*
* */
export function loadSomeThing(type) {
    return dispatch => {
        type ? dispatch(loadok('success[|]success')) : dispatch(loadnotOk('lose{|}lose'))
    }
}


export function loadok(info) {
    return {
        type: loadSuccess,
        info: info
    }
}

export function loadnotOk(info) {
    return {
        type: loadError,
        info: info
    }
}