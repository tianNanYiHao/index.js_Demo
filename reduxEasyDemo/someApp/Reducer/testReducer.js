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
* 后日研究发现, 用一个方法将数据重新拆分后再组合回去, 同样可以实现数据变化后立即驱动render更新效果......
*
*
* 暂时的结论:
* action传入的type以及data, 在data数据结构层次深的情况下, 直接return {data:action.data},
* 由于还是同一个地址存储的数据对象, 所以虽然Redux中store的数据已经更新,但是在关联page的connect高阶组件中,
* 不会去触发render刷新方法, 导致数据变动后没有立即响应刷新,
* 解决的方案为: var 一个新的空对象, 将action.data的数据重新用该新地址存储, 可以实现立即触发render,及时刷新page
* */


// 导入一个数据结构模型党组
import PersonData from '../Common/DataModel'
import CopyDataTool from "../Common/CopyTool";

export default function showData(initState = {}, action) {
    switch (action.type) {
        case testActionType1:
            return {
                data: CopyDataTool.copy(action.data)
                // data: action.data,
            };
            break;
        case testActionType2:
            return {
                data: CopyDataTool.copy(action.data)
                // data: action.data,
            };
            break;
        default:
            return {
                data: PersonData,
            }
    }


}