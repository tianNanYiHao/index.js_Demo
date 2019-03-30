/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-28 17:27
 * @Profile:  Qrcode
 * @Project:  test

 * @Description:  使用的库 react-native-smart-barcode 二维码扫码库 / 截屏库 npm install react-native-view-shot
 *
 *
 * //1. 二维码生成库
 * npm install react-native-smart-barcode --save
 * npm install react-native-smart-timer-enhance --save
 *
 * npm install react-native-svg --save  // 或者使用 yarn add react-native-svg
 * react-native link react-native-svg  // 不要忽略这一步，不然会报错
 * npm install react-native-qrcode-svg --save

 *
 * //2. 截屏库
 * npm install react-native-view-shot
 * react-native link react-native-view-shot
 *
 *
 * //3. RN自带的保存图片API: CameraRoll.
 *
 * //4. RN访问本地系统文件库  react-native-fs
 * npm install react-native-fs --save
 * react-native link react-native-fs
 *
 *
 * //5. react-native-fetch-blob  上传下载库
 * ///https://my.oschina.net/KJhulinhua/blog/1014853
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
    Platform
} from 'react-native'
import BaseComponent from "../BaseComponent/BaseComponent";
import QRcodeView from "../../Component/QRCodeView/QRcodeView"; //自定义二维码组件

import RNFS from 'react-native-fs'; //访问本地文件库
// import RNFetchBlob from 'rn-fetch-blob'; //上传下载库


import {captureScreen} from 'react-native-view-shot' //截图库
import {Toast} from 'teaset'


export default class Qrcode extends BaseComponent {


    componentDidMount() {

    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderNoLeftItemNaivgationBar('二维码展示,二维码保存')}

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => this.createQrcodeview()}>
                        <Text>点击显示二维码!!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.printSystemDocutment()}>
                        <Text style={{marginTop: 20}}>点击打印一些系统路径...</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }


    /**************************************** 点击事件 ****************************************/
    createQrcodeview() {
        QRcodeView.show('i am a qrcode', async () => {
            try {
                // 调用截屏库 截图
                let data = await captureScreen({
                    format: 'png',
                    quality: 0.8,
                    result: 'base64',
                })
                console.log('====屏幕截图成功!');
                console.log(data)

                const screenShotShowImg = `data:image/png;base64,${this.data}`;
                this.saveImg("http://www.hangge.com/blog/images/logo.png")

                QRcodeView.hidden()
            }
            catch (e) {
                Toast.show('图片保存失败,请重新尝试!')
            }


        })
    }


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

    async saveImg(screenShotShowImg) {

        this.showToastForLong('图片保存中...')

        try {
            if (Platform.OS === 'android') {
                console.log('ad')
                //不经过拼接直接保存到相册
                // this.saveForAndroid(screenShotShowImg, (result) => {
                //     this.showToastForShort(`保存成功！地址如下：\n${result}`);
                // }, () => {
                //     this.showToastForShort('保存失败！');
                // });



                const RNFS = require('react-native-fs'); //文件处理
                const storeLocation = `${RNFS.DocumentDirectoryPath}`;
                let pathName = new Date().getTime() + "文件名.png"
                let downloadDest = `${storeLocation}/${pathName}`;
                const ret = RNFS.downloadFile({fromUrl:screenShotShowImg,toFile:downloadDest});
                ret.promise.then(res => {
                    if(res && res.statusCode === 200){
                        var promise = CameraRoll.saveToCameraRoll("file://" + downloadDest);
                        promise.then(function(result) {
                            console.log("图片已保存至相册")
                        }).catch(function(error) {
                            console.log("保存失败")
                        })
                    }
                })

            }
            else {
                console.log('ios')
                let data = await CameraRoll.saveToCameraRoll(screenShotShowImg)
                console.log(data)
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

    showToastForLong(text) {
        Toast.show({
            text: text,
            position: 'center',
            duration: 5000
        });
    }

    showToastForShort(text) {
        Toast.show({
            text: text,
            position: 'center',
            duration: 5000
        });
    }

}
