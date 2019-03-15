/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-15 13:53
 * @Profile:  loadReducer
 * @Project:  reduxSecondDemo

 * @Description:
 *
 */

import {loadError, loadSuccess} from '../Action/loadActionType'


/*
* reducer的作用就是将action处理的结果
* 提交给Store,
* 然后在page页面,数据再从sotre获取
*
* */
export default function showLoad(state=[], action) {
    switch (action.type) {
        case loadSuccess:
            return {
                ...state,
                info:action.info  // 从 action获取处理后的结果
            };
            break;
        case loadError:
            return {
                ...state,
                info:action.info
            };
            break;
        default:
            return state;
    }
}