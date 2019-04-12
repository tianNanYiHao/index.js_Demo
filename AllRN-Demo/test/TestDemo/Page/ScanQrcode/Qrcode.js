/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-28 17:27
 * @Profile:  Qrcode
 * @Project:  test

 * @Description:  使用的库 react-native-smart-barcode 二维码扫码库 / 截屏库 npm install react-native-view-shot
 *
 *
 * 1. 二维码生成库 -- 用于生成二维码
 * npm install react-native-svg --save  // 或者使用 yarn add react-native-svg
 * react-native link react-native-svg  // 不要忽略这一步，不然会报错
 * npm install react-native-qrcode-svg --save

 *
 * //2. 截屏库 - 返回 base64等格式图片
 * npm install react-native-view-shot
 * react-native link react-native-view-shot
 *
 *
 * //3. RN访问本地系统文件库  react-native-fs -->适用于android(下载图片,然后用CamerRoll保存本地图片到相册)
 * npm install react-native-fs --save
 * react-native link react-native-fs
 *
 * //4. RN自带的保存图片API: CameraRoll. -->CameraRoll模块提供了访问本地相册的功能
 * // 在Android上,标签必须是当地的图像或视频的URI,比如“文件:/ / / sdcard / img.png”。
 * // 在iOS,标签可以是任何图像URI(包括本地、远程资产库中和base64数据URI)或本地视频文件的URI(远程或不支持数据URI保存视频在这个时候)。
 * // 如果标签的文件扩展名。mov。mp4,推断出视频。否则它将被视为一个照片。覆盖的自动选择,您可以传递一个可选的类型参数,必须“照片”或“视频”之一。返回一个承诺将解决新的URI。
 *
 *
 * //5. 关于: data:image/png;base64, 后缀base64字符串 , 默认格式的图片资源描述, 用户html中显示图片
 *
 *
 *
 *
 */


import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    CameraRoll,
    Platform,
    NativeModules,
} from 'react-native'
import BaseComponent from "../BaseComponent/BaseComponent";
import QRcodeView from "../../Component/QRCodeView/QRcodeView"; //自定义二维码组件


import  RNFS from 'react-native-fs'
import RNFetchBlob from 'react-native-fetch-blob'

import {captureScreen} from 'react-native-view-shot' //截图库
import {Toast} from 'teaset'


export default class Qrcode extends BaseComponent {

    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderNoLeftItemNaivgationBar('二维码展示,二维码保存')}

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => this.createQrcodeview(1)}>
                        <Text>
                            {
                                '点击显示二维码\n ' +
                                'react-native-view-shot获取图片base64\n' +
                                'android->fs(下载网络图到缓存 \n' +
                                '保存普通RUL网络图片: android/ios->CamerRoll.saveToCameraRoll()'
                            }
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.createQrcodeview(2)}>
                        <Text style={{marginTop: 20}}>
                            {
                                '点击显示二维码, \n' +
                                'react-native-view-shot获取图片base64\n' +
                                '保存截图: 安卓调用modules保存图片/ios->CamerRoll.saveToCameraRoll()'
                            }
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.createQrcodeview(3)}>
                        <Text style={{marginTop: 20}}>
                            {
                                "点击显示二维码,\n " +
                                'react-native-view-shot获取图片base64\n' +
                                "安卓借助fs(获取路径)/rn-fetch-blob(实现下载)库" +
                                "保存截图: (android/ios->CamerRoll)"
                            }
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.printSystemDocutment()}>
                        <Text style={{marginTop: 20}}>点击打印一些系统路径...</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }


    /**************************************** 点击事件 ****************************************/
    createQrcodeview(tag) {
        //1. 加载二维码展示组件
        QRcodeView.show('i am a qrcode', async () => {

            try {
                // 调用截屏库 截图
                let base64Data = await captureScreen({
                    format: 'png',
                    quality: 0.8,
                    // result: 'tmpfile', //data-uri,base64
                    // result: 'data-uri', //data-uri,base64
                    result: 'base64', //data-uri,base64
                });
                console.log('====屏幕截图成功!====');
                console.log(base64Data)

                let screenShotShowImg;
                // android
                if (Platform.OS === 'android') {
                    if (tag === 1) { //android 保存一张网络图
                        screenShotShowImg = 'http://img5.imgtn.bdimg.com/it/u=3235021643,1765423594&fm=26&gp=0.jpg'
                        this.saveImg(screenShotShowImg)
                        QRcodeView.hidden()
                    }
                    if (tag === 2) { //android 通过mudules保存图片
                        NativeModules.SaveImgBase64.savePicture(base64Data);
                        QRcodeView.hidden()
                        return
                    }
                    if (tag === 3) { // android 借助fs下载到本地缓存,再用CamerRoll导入相册
                        screenShotShowImg = base64Data; // 目前存在问题, CamerRoll.saveToCameraRoll(tag), tag 必须为URL,或本地URI
                        this.saveImg(screenShotShowImg,true)
                        QRcodeView.hidden()
                    }
                }

                // ios
                else {
                    // 'data:image/png;base64,' RFC2397中定义的Data URI scheme，目的是将一些小的数据，直接嵌入到网页中，从而不用再从外部文件载入。
                    screenShotShowImg = `data:image/png;base64,${base64Data}`;
                    this.saveImg(screenShotShowImg)
                    QRcodeView.hidden()
                }
            }
            catch (e) {
                Toast.show('图片保存失败,请重新尝试!')
            }
        })
    }


    // 打印一些系统文件地址,,,
    printSystemDocutment() {

        console.log("-------------- 打印本地文件系统相关路径---------------")
        console.log('MainBundlePath=' + RNFS.MainBundlePath)

        console.log('CachesDirectoryPath=' + RNFS.CachesDirectoryPath)
        console.log('DocumentDirectoryPath=' + RNFS.DocumentDirectoryPath)
        console.log('TemporaryDirectoryPath=' + RNFS.TemporaryDirectoryPath)
        console.log('LibraryDirectoryPath=' + RNFS.LibraryDirectoryPath)
        console.log('ExternalDirectoryPath=' + RNFS.ExternalDirectoryPath)
        console.log('ExternalStorageDirectoryPath=' + RNFS.ExternalStorageDirectoryPath)

        console.log("-------------- 打印本地文件系统相关路径---------------")
        //打印日志---ios
        // MainBundlePath=/var/containers/Bundle/Application/9115F4F8-B2F6-4594-B2FC-9FF173946670/DvaStarter.app
        // CachesDirectoryPath=/var/mobile/Containers/Data/Application/558EF9E2-31DA-46FF-925F-160BB4D1EF35/Library/Caches
        // DocumentDirectoryPath=/var/mobile/Containers/Data/Application/558EF9E2-31DA-46FF-925F-160BB4D1EF35/Documents
        // TemporaryDirectoryPath=/private/var/mobile/Containers/Data/Application/558EF9E2-31DA-46FF-925F-160BB4D1EF35/tmp/
        // LibraryDirectoryPath=/var/mobile/Containers/Data/Application/558EF9E2-31DA-46FF-925F-160BB4D1EF35/Library
        // ExternalDirectoryPath=null
        // ExternalStorageDirectoryPath=null


    }


    /**************************************** 逻辑处理 ****************************************/

    // 保存图片到相册, ios/android 分别调用不同方法
    async saveImg(screenShotShowImg, isUseRN_FETCH_BLOB=false) {

        ToastUt.showToastForLong('图片保存中...')

        try {
            // 总结安卓截图保存仅相册流程
            //1. 展示二维码.->  react-native-qrcode-svg(必须前置react-native-svg)
            //2. 截图,得到base64的图片数据 -> react-native-view-shot
            //3. 获取安卓或ios, 本地文件系统的路径,以便调用-> react-native-fs,( RNFS.DocumentDirectoryPath)
            //4. 通过某些库 download下载出图片,toFile到某个路径保存->react-native-fs (目前看, 安卓仅能下载网络图, 本地截图没办法下载)
            //5. 通过CamerRoll.saveToCamerRoll 保存进相册

            // android
            if (Platform.OS === 'android') {

                if (!isUseRN_FETCH_BLOB) {
                    // 安卓使用 react-native-fs 下载网络图片.再去保存
                    let time = new Date()
                    let downloadDest = `${RNFS.ExternalDirectoryPath}/${time.getTime()}.png`;
                    let ret = RNFS.downloadFile({
                        fromUrl: screenShotShowImg,
                        toFile: downloadDest,
                    }).promise.then((res) => {
                        if (res && res.statusCode === 200) {
                            var promise = CameraRoll.saveToCameraRoll("file://" + downloadDest);
                            promise.then(function (result) {
                                ToastUt.showToastForShort("图片已保存至相册")
                            }).catch(function (error) {
                                ToastUt.showToastForShort("保存失败")
                            })
                        }
                    })
                }
                // 安卓使用 react-native-fetch-blob 下载图片,再去保存
                else {
                    let time = new Date()
                    let downloadDest = `${RNFS.ExternalDirectoryPath}/${(time.getTime())}.png`;
                    RNFetchBlob.fs.writeFile(downloadDest,screenShotShowImg,'base64').then((result)=>{
                        var promise = CameraRoll.saveToCameraRoll("file://"+downloadDest);
                        promise.then(function (result) {
                            ToastUt.showToastForShort("图片已保存至相册")
                        }).catch(function (error) {
                            ToastUt.showToastForShort("保存失败")
                        })
                    })
                }

            }

            // iOS
            else {
                // 总结iOS截图保存仅相册流程
                //1. 展示二维码.->  react-native-qrcode-svg(必须前置react-native-svg)
                //2. 截图,得到base64的图片数据 -> react-native-view-shot
                //3. 通过CamerRoll.saveToCamerRoll 保存进相册(格式为'data:image/png;base64,....base64格式图片数据字符串....')
                let data = await CameraRoll.saveToCameraRoll(screenShotShowImg)
                console.log(data)
                // 打印:"assets-library://asset/asset.JPG?id=E6207CE6-2239-4DA6-A9A3-64F6A6603326&ext=JPG"
                this.showToastForShort(`保存成功！地址如下：\n${data}`)
            }

        }
        catch (e) {
            console.log(e)
            this.showToastForShort(`保存失败！\n${e}`);
            console.log(`保存失败！\n${e}`);
        }
    }


    // saveForAndroid(base64Img, success, fail) {
    //     const dirs = RNFS.ExternalDirectoryPath; // 外部文件，共享目录的绝对路径（仅限android）
    //     const downloadDest = `${dirs}/${((Math.random() * 10000000) || 0)}.png`;
    //     const imageDatas = base64Img.split('data:image/png;base64,');
    //     const imageData = imageDatas[1];
    //     RNFetchBlob.fs.writeFile(downloadDest, imageData, 'base64').then((result) => {
    //         console.log('result=====', result);
    //         try {
    //             CameraRoll.saveToCameraRoll(downloadDest).then((e1) => {
    //                 console.log('success', e1);
    //                 success && success(e1);
    //             }).catch((e2) => {
    //                 console.log('failed', e2);
    //                 Alert.alert('没有读写权限。请在[设置]-[应用权限]-[XX应用]开启');
    //             });
    //         } catch (e3) {
    //             console.log('catch', e3);
    //             fail && fail();
    //         }
    //     });
    // }


    /**************************************** 工具类 ****************************************/


}


class ToastUt extends Toast {


    static showToastForLong(text) {
        Toast.show({
            text: text,
            position: 'center',
            duration: 3000
        });
    }

    static showToastForShort(text) {
        Toast.show({
            text: text,
            position: 'center',
            duration: 2000
        });
    }
}