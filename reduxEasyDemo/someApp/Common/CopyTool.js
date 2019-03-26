/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-26 11:05
 * @Profile:  CopyTool
 * @Project:  reduxEasyDemo

 * @Description:
 *
 */

export default class CopyDataTool {


    static copy(obj){
        let dict = {}

        dict['name'] = obj.name
        dict['age'] = obj.age
        dict['like'] = obj.like
        dict['today'] = obj.today

        return dict


        // return obj
    }

}