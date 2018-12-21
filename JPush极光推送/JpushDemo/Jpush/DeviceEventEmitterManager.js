/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-20 19:17
 * @Profile:  JpushDeviceEventType
 * @Project:  JpushDemo

 * @Description: 枚举JpushManager接受推送后发送通知的类型
 *
 */


import {DeviceEventEmitter} from 'react-native'


/**
 * 接受消息推送后,分发事件通知的管理类
 * params为推送的对象,
 * 推送时,后端或模拟推送消息时,
 * 一定要增加 type类型字段,且value值与下列类型字符串匹配,
 * 其目的就在于根据推送的业务类型,进行不同的推送分发
 * 否则默认接受全局推送
 * 如-> (type:'01')
 */
class DeviceEventEmitterManager {


    /*推送的业务类型*/
    static type = {
        NotifactionGloable: '01', //全局范围内,接受推送
        NotifactionPage_Pay: '02', //单独某一页面接受推送_支付通知,
        NotifactionPage_Buy: '03', //单独某一页面接受推送_购买通知,
        NotifactionPage_Show: '04', //单独某一页面接受推送_购买通知,
    }


    /*根据业务类型,进行推送分发,不指定类型则作为全局推送通知*/
    static pushNotifaction(params) {

        if (params.type === this.type.NotifactionPage_Pay) {
            DeviceEventEmitter.emit(this.type.NotifactionPage_Pay, params);
        }
        if (params.type === this.type.NotifactionPage_Buy) {
            DeviceEventEmitter.emit(this.type.NotifactionPage_Buy, params);
        }
        if (params.type === this.type.NotifactionPage_Show) {
            DeviceEventEmitter.emit(this.type.NotifactionPage_Show, params);
        }
        else {
            DeviceEventEmitter.emit(this.type.NotifactionGloable, params);
        }
    }

    /*消息监听*/
    static addListener(name, callBack) {
        return DeviceEventEmitter.addListener(name, callBack);
    }

}

export {DeviceEventEmitterManager}




