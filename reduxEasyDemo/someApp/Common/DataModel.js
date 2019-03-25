/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-25 13:38
 * @Profile:  DataModel
 * @Project:  reduxEasyDemo

 * @Description: 模拟一个数据结构,结构层次嵌套较深
 *
 */



const PersonData = {
    "name": '',
    "age": '',
    "like": [
        {"person1":''},
        {"person2":''},
        {"person3":''},
    ],
    "today": {
        "am": {
            "home": '',
            "school":'',
        },
        "pm": {
            "home": '',
            "school": '',
        }
    },

}

export default PersonData
