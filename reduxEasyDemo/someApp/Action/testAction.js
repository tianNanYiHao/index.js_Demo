/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-22 10:31
 * @Profile:  testAction
 * @Project:  reduxEasyDemo

 * @Description:
 *
 */



import {testActionType0,testActionType1,testActionType2} from './testActionType'
import PersonData from '../Common/DataModel'


var a = 1;
export function changeData1() {

    return dispatch => {
        PersonData.name = '校长'
        PersonData.age = '59'
        PersonData.like = [{'person1': 'son'}, {'person2': 'dog'}]
        PersonData.today = {
            "am": {
                "home": 'play',
                "school": 'work',
            },
            "pm": {
                "home": 'play',
                "school": 'search',
            }
        }
        dispatch(change1(PersonData))
    }
}


export function changeDate2() {
    return dispatch=>{
        PersonData.name = '小明'
        PersonData.age = '19'
        PersonData.like = [{'person1': 'mom'}, {'person2': 'dad'},]
        PersonData.today = {
            "am": {
                "home": 'eat',
                "school": 'study',
            },
            "pm": {
                "home": 'sleep',
                "school": 'study',
            }
        }
        dispatch(change2(PersonData))
    }
}



export function change1(data) {
    return {
        type: testActionType1,
        data: data,
        cd:a++

    }
}

export function change2(data) {
    return {
        type: testActionType2,
        data: data,
        cd:a++
    }
}

