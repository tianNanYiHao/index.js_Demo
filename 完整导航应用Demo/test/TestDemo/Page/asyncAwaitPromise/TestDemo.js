/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-10-26 09:33
 * @Profile:  TestDemo
 * @Project:  test

 * @Description:
 *
 */


import React, {Component} from 'react'
import {
    Text,
    Platform,
    Image,
    View,
    AlertIOS,
    StyleSheet,
    Dimensions,
} from 'react-native'
import BaseComponent from "../BaseComponent/BaseComponent";
import Button from 'react-native-button'
import pxdp from "../../Common/pxdp";
import Dog from "./Dog";


let w = Dimensions.get('window').width;


export default class TestDemo extends BaseComponent {

    render() {
        return (

            <View>
                {this.renderNomalNavigationBar('TestDemo页面')}
                <View style={{
                    backgroundColor: '#fefefe',
                    flexDirection: 'row',
                    width: pxdp.width,
                    height: pxdp.height - pxdp.fixHeight(64),
                    flexWrap: 'wrap',
                    paddingHorizontal: 20,
                }}>

                    <Button style={styles.button} styleDisabled={styles.buttonDisabled} onPress={() => this.check()}>
                        pppp
                    </Button>
                    <Button style={styles.button} styleDisabled={styles.buttonDisabled} onPress={() => this.check2()}>
                        ddddddd
                    </Button>
                    <Button style={styles.button} styleDisabled={styles.buttonDisabled} onPress={() => this.check3()}>
                        promise
                    </Button>
                    <Button style={styles.button} styleDisabled={styles.buttonDisabled} onPress={() => this.check4()}>
                        async/await
                    </Button>
                    <Button style={styles.button} styleDisabled={styles.buttonDisabled} onPress={() => this.check4()}>
                        rest运算符
                    </Button>

                    <Button style={styles.button} styleDisabled={styles.buttonDisabled} onPress={() => this.check5()}>
                        测试函数原型
                    </Button>

                </View>
            </View>


        )
    }

    /**************************************** 测试去重 ****************************************/
    check() {

        let cfcaCertSnList = ['2', '998', '09d0', '787'];
        let cerArr = ['sss', 'ff', '1', '090'];
        let isFind2 = false;
        for (let i = 0; i < cfcaCertSnList.length; i++) {
            let obj1 = cfcaCertSnList[i]
            for (let j = 0; j < cerArr.length; j++) {
                let obj2 = cerArr[j];
                if (obj1 === obj2) {
                    isFind2 = true;
                    break
                }
            }
            if (isFind2) {
                AlertIOS.alert("ss_" + isFind2 + '_' + obj1)
                return
            }
        }
        AlertIOS.alert("dd" + isFind2)


    }

    /**************************************** 测试 模拟异步转同步 ****************************************/

    /*模拟promise异步转同步*/
    async check2() {

        try {
            AlertIOS.alert('0')
            let time = await TestDemo.sleepAwait(5000);
            AlertIOS.alert(`==>${time}`)
        }
        catch (e) {

        }

    }

    static sleepAwait(time) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(time)
            }, time)
        })
    }


    /**************************************** 测试1 测试Promise ****************************************/
    check3() {


        // Promise.all([this.loadData1(1000), this.loadData2(1000), this.loadData3(1000)]).then(([result1, result2, result3]) => {
        //
        // })


        this.loadData1(1000).then((result1) => {
            if (result1) {
                this.loadData2(2000).then((result2) => {

                    if (result2) {
                        this.loadData3(3000).then((result3) => {

                            this.check()
                        })
                    }

                })
            }
        })
    }

    async check4() {
        try {
            let result1 = await this.loadData1(1000);
            let result2 = await this.loadData2(2000);
            let result3 = await this.loadData3(3000);
            this.check()
        }
        catch (e) {

        }
    }

    loadData1(time) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve('data1')
            }, time)
        })
    }

    loadData2(time) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve('data2')
            }, time)
        })
    }

    loadData3(time) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve('data3')
            }, time)
        })
    }


    /**************************************** 测试 函数原型相关 ****************************************/

    check5() {

        let dog1 = new Dog('dudu', 12, 'eat meat')
        let dog2 = new Dog('xiaodu', 18, 'eat my shit')
        console.log(dog1)
        console.log(dog1.age)

        console.log('-=-=-=-=-= change dog1 property -=-=-=-=-=-=-=')
        dog1.age = 21
        dog1.name = 'Wangwang';
        console.log(dog1)

        console.log(dog1.__proto__) // {constructor: ƒ}
        console.log(Object.getPrototypeOf(dog1)) // {constructor: ƒ}
        console.log(Dog.prototype) //{constructor: ƒ}
        console.log(Object.getPrototypeOf(dog1) === Dog.prototype) //{constructor: ƒ} --->>>>> true


        console.log('-=-=-=-=-= add property -=-=-=-=-=-=-=')
        Dog.prototype.today = 'opopopop';
        Dog.prototype.today = 'sssssssss';
        console.log(Dog)
        console.log(Dog.prototype)
        console.log(Dog.prototype.name)
        console.log(dog1.name)
        // console.log(dog1.name)
    }


}

const styles = StyleSheet.create({
    button: {

        color: '#ff2',
        backgroundColor: '#090',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 20,

    },
    buttonDisabled: {
        color: '#8f2',
        borderWidth: 1,
        borderColor: '#0f0',
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 20,
    }
})