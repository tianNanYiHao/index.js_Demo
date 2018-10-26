/**
 * 安全中心
 *
 * @summary short description for the file
 * @author 臧芮
 *
 * Created at     : 2018-06-14 14:41:47
 * Last modified  : 2018-07-24 16:32:24
 */


import RequestManager from "../../../Common/Managers/RequestManager";

{/*********************************** RN导入  ***********************************/
}
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    NativeModules
} from 'react-native';

{/***********************************  资源导入  ***********************************/
}
import {connect} from 'react-redux';
import {FontSize, px2dp} from '../../../Common/Itools';
import {BaseComponent, RightArrow, AlertUtils} from '../../../Common/Components';
import {Colors} from '../../../Common/Constants/FontAndColor';
import {TYPE_CHANGELOGPWD, TYPE_CHANGEPAYPWD} from '../../Constants/BaseType';
import Label from 'teaset/components/Label/Label';

{/***********************************  窗体实现  ***********************************/
}

class SecurityCenter extends BaseComponent {

    /*********************************** 构造函数 ***********************************/
    constructor(props) {
        super(props);
        this.state = {
            on: false //当前用户是否开启了证书
        }
    }

    /*********************************** 窗体布局 ***********************************/

    //组件加载完成
    componentDidMount() {
        this.listener = this.props.navigation.addListener('didFocus', (resolve) => {
            this.viewWillAppear(resolve)
        })
    }

    viewWillAppear() {
        // 检测当前用户是否开启证书
        this.checkCfca();
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    /*********************************** 页面布局 ***********************************/
    render() {
        return (
            <ContainerView>
                {this.renderNavigationBar("安全中心")}
                {/********* 暂时隐藏 *************/}
                <View style={styles.viewStyle}>
                    <RightArrow title="数字证书" onPress={() => this.showCfca()} subTitle='保护钱币账户，提升支付安全'
                                rightTitle={this.state.on ? '已启用' : '未启用'}
                                rightTitleStyle={{color: '#72757c'}} line={false}
                    />
                </View>

                <View style={styles.viewStyle}>
                    <RightArrow title="修改支付密码" onPress={() => this.push('PSafetyInspection', {
                        "type": TYPE_CHANGEPAYPWD,
                        "tokenType": "01000601",
                        "phoneNum": this.props.PUserModel.user.phoneNo
                    })}/>
                    <RightArrow title="修改登录密码" onPress={() => this.push('PSafetyInspection', {
                        "type": TYPE_CHANGELOGPWD,
                        "tokenType": "01000501",
                        "phoneNum": this.props.PUserModel.user.phoneNo
                    })} line={false}/>
                </View>
                <Image source={Images.in_the_end_gray}
                       style={{alignSelf: 'center', position: "absolute", bottom: px2dp(30)}}/>

            </ContainerView>
        );
    }

    /*********************************** 逻辑实现区 ***********************************/

    //检测是否启用cfca证书
    checkCfca() {
        RequestManager.showLoading();
        let cfcaCertSnList = this.props.userModel.user.cfcaCertSnList;

        //1.无cfaca的serialNo->为开启证书
        if (cfcaCertSnList.length === 0) {
            this.refEnableState(false)
        }
        //2.有cfca的serialNo->调用SDK匹配,检测是否开启证书
        else {
            NativeModules.CfcaScapModule.getCertificateSerialNumbers().then(result => {
                // 获取证书数组
                let cerArr = JSON.parse(result)

                let isFind2 = false; //标识
                this.serialNo = ''; //记录匹配的证书编号,以供删除
                for (let i = 0; i < cfcaCertSnList.length; i++) {
                    let obj1 = cfcaCertSnList[i]
                    for (let j = 0; j < cerArr.length; j++) {
                        let obj2 = cerArr[j];
                        if (obj1 === obj2) {
                            this.serialNo = obj1;
                            isFind2 = true;
                            break;
                        }
                    }
                    if (isFind2) {
                        RequestManager.hideLoading()
                        this.refEnableState(isFind2)
                        return
                    }
                }
                RequestManager.hideLoading()
                this.refEnableState(isFind2)

            }).catch(e => {
                RequestManager.hideLoading()
                this.refEnableState(false)
            })
        }
    }

    // 更新证书启用状态
    refEnableState(isOpenCfca) {
        this.setState({
            on: isOpenCfca
        })
    }

    // 进入cfca证书页面
    showCfca() {
        this.push('PDigitalCertificate', {Enable: this.state.on, serialNo: this.serialNo})
    }


}

{/***********************************  布局样式  ***********************************/
}
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#fff",
        marginTop: px2dp(15),
        marginHorizontal: px2dp(20),
        borderRadius: px2dp(6),
        overflow: "hidden",
        justifyContent: "center"
    }

})


function mapStateToProps(state) {
    return {
        userModel:state.PUserModel
    }
}

export default connect(mapStateToProps)(SecurityCenter);