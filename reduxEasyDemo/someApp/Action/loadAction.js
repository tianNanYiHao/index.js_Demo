/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-15 13:49
 * @Profile:  loadAction
 * @Project:  reduxSecondDemo

 * @Description:
 *
 */



import {loadSuccess,loadError} from './loadActionType'


/*
* 在page页面关联Redux后,
* 通过page页面的dispatch调用该方法
*
* */
export function loadSomeThing() {
    return dispatch=>{
        fetch('https://www.baidu.com').then(
            dispatch(loadok('oooooooooooooo'))
        ).catch(
            dispatch(loadnotOk('eeeeeeeeee'))
        )
    }
}


export function loadok(info) {
    return {
        type:loadSuccess,
        info:info
    }
}

export function loadnotOk(info) {
    return {
        type:loadError,
        info:info
    }
}