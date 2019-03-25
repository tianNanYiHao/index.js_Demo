/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-22 10:32
 * @Profile:  testReducer
 * @Project:  reduxEasyDemo

 * @Description:
 *
 */


import {testActionType1, testActionType2, testActionType0} from '../Action/testActionType'



/*
* 当dispatch执行了任意一个action方法后, redux会去RootReducer中遍历每一个reducer.
* 去找对应Type的reduce, 根据switch去返回各自的数据
* 当数据层级过于复杂, 如 person.today.am.home 变化时, page页面的数据不会执行更新render,
* 但是,再给一个基本数据类型的变化值, 就可以做到数据变化后驱动render更新, 这个问题需要好好研究............
* */


// 导入一个数据结构模型党组
import PersonData from '../Common/DataModel'

export default function showData(initState = {}, action) {
    switch (action.type) {
        case testActionType1:
            return {
                data: action.data,
                cd:action.cd  //加入一个计数返回值, 能做到深拷贝同样的事情, 这个明天继续研究.....
            };
            break;
        case testActionType2:
            return {
                data: action.data,
                cd:action.cd
            };
            break;
        default:
            return {
                data: PersonData,
            }
    }


}