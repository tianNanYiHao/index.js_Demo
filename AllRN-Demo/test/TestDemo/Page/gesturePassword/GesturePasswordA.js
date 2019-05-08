/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-05-08 13:56
 * @Profile:  gesturePasswordA
 * @Project:  test

 * @Description: 手势密码
 *
 *
 *  https://github.com/spikef/react-native-gesture-password 具体用例在此处查看
 *
 */


import React, {} from 'react'
import {
    View,
    Image,
    StyleSheet,
    Platform,
    Text,
    Dimensions

} from 'react-native'
import {NavigationBar} from 'teaset'
import BaseComponent from "../BaseComponent/BaseComponent";
import PasswordGesture from 'react-native-gesture-password'
import pxdp from "../../Common/pxdp";


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default class GesturePasswordA extends BaseComponent {


    constructor(props) {
      super(props);
      this.state = {
          status:'',
          message:'',
          pwd:''
      };
    }

    render() {
        {/*<View style={{height:Height+44, width:Width, backgroundColor:'#06caaa'}}>*/
        }


        {/*<NavigationBar*/
        }
        {/*type={'ios'}*/
        }
        {/*title={"====="}*/
        }
        {/*style={{backgroundColor: "#009ffe", position:'absolute', top:0, right:0}}*/
        }
        {/*leftView={null}*/
        }
        {/*rightView={null}*/
        }
        {/*hiddenLine={true}*/
        }
        {/*/>*/
        }

        {/*</View>*/}

        return (


            <PasswordGesture
        ref={'pg'}
        // status={this.state.status}
        // message={this.state.message}

        status={"normal"}
        message={this.state.pwd}

        onStart={()=>this._onStart()}
        onEnd={(pwd)=>this._onEnd(pwd)}
        />
        )
    }


    _onStart(){
        // this.setState({
        //     status: 'normal',
        //     message: 'Please input your password.'
        // });
    }

    _onEnd(pwdd){


        console.log(pwdd)
        this.setState({
            pwd:pwdd
        })

        // if (pwd == '123456') {
        //     this.setState({
        //         status: 'right',
        //         message: 'Password is right, success.'
        //     });
        // }
        // else {
        //     this.setState({
        //         status: 'wrong',
        //         message: '密码错误, 请重新输入.'
        //     });
        // }

    }

}