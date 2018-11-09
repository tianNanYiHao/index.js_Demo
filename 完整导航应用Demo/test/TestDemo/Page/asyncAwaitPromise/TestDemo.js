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
    Button,
    StyleSheet,
    Dimensions
} from 'react-native'
import BaseComponent from "../BaseComponent/BaseComponent";


let w = Dimensions.get('window').width;


export default class TestDemo extends BaseComponent {

    render() {
        return (

            <View >
                {this.renderNomalNavigationBar('TestDemo页面')}
                <View style={{
                    backgroundColor: '#fefefe',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop:64
                }}>

                    <Button stayle={styles.button} onPress={() => this.check()} title={'ppppppp'}/>
                    <Button stayle={styles.button} onPress={() => this.check2()} title={'ddddddd'}/>
                    <Button stayle={styles.button} onPress={() => this.check3()} title={'promise'}/>
                    <Button stayle={styles.button} onPress={() => this.check4()} title={'async/await'}/>
                    <Button stayle={styles.button} onPress={() => this.check4()} title={'rest运算符'}/>


                </View>
            </View>




        )
    }

    /**************************************** Description ****************************************/
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

    /**************************************** Description ****************************************/

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


    /**************************************** Description ****************************************/
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


}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        width: 80,
        height: 50,
        backgroundColor: '#090',
        marginHorizontal:20,

    }
})