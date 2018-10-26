/**
 * 开启/删除数字证书验证身份
 *
 * @summary short description for the file
 * @author Arjun Komath
 *
 * Created at     : 2018-08-07 16:47:27
 * Last modified  : 2018-08-07 18:02:38
 */


import AlertUtils from "../../../Common/Components/Alert";

{/*********************************** RN导入  ***********************************/
}
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    NativeModules
} from 'react-native';

{/***********************************  资源导入  ***********************************/
}
import {connect} from 'react-redux';
import {BaseComponent, InputBaseView, CommonButton} from '../../../Common/Components';
import {px2dp} from '../../../Common/Itools/Px2dp';
import {
    AUTHTOOL_GET_AUTHTOOL_V1,
    AUTHTOOL_GET_REGAUTHTOOLS_V1,
    AUTHTOOL_SET_AUTHTOOL_V1, AUTHTOOL_SETREGAUTHTOOLS_V1,
    TOKEN_GET_TTOKEN_V1
} from "../../Constants/Urls";
import *as UserAction from '../../Actions/UserAction'
import RequestManager from "../../../Common/Managers/RequestManager";
import ArrayUtils from "../../../Common/Itools/ArrayUtils";

{/***********************************  窗体实现  ***********************************/
}

class ValidateIdentity extends BaseComponent {

    /*********************************** 构造函数 ***********************************/
    constructor(props) {
        super(props);
        this.state = {
            IdCard: '',      //身份证号
            isIdCard: false, //是否是身份证号
            name: this.props.userModel.user.userRealName
        }
    }

    /*********************************** 窗体布局 ***********************************/
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f8f8f8'}}>
                {this.renderNavigationBar(this.props.type == 0 ? '启用数字证书' : '删除数字证书')}

                <Text style={{
                    fontSize: FontSize(14),
                    color: '#999999',
                    marginVertical: px2dp(15),
                    marginLeft: px2dp(15)
                }}>
                    {this.props.type == 1 ? '删除证书前需验证身份' : '启用证书前需验证身份'}
                </Text>
                <InputBaseView
                    inputType="idCard"
                    title={"身份证"}
                    titleWidth={80}
                    style={styles.inputBaseViewStyle}
                    value={this.state.IdCard}
                    isLine={false}
                    placeholder={`请输入${this.state.name}的身份证号`}
                    onChangeText={(text) => {
                        this.setState({IdCard: text});
                    }}
                    onChangeState={(result) => {
                        this.setState({isIdCard: result});
                    }}
                />
                <CommonButton
                    style={{marginHorizontal: px2dp(35), marginTop: px2dp(50)}}
                    title='验证'
                    buttonState={this.state.isIdCard ? "normal" : "disable"}
                    onPress={() => this.openCertStepOne()}
                />
                {/* 底部logo */}
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Image source={Images.in_the_end_gray} style={{position: 'absolute', bottom: px2dp(30)}}/>
                </View>

            </View>
        );
    }

    /*********************************** 逻辑实现区 ***********************************/

    /*开启CFCA证书:验证身份+开启证书+导入本地证书库+删除本地证书*/

    //1. 验证身份
    async openCertStepOne() {
        try {
            RequestManager.showLoading();
            await RequestManager.request(TOKEN_GET_TTOKEN_V1, '{"tTokenType":"01002601"}');
            await RequestManager.request(AUTHTOOL_GET_REGAUTHTOOLS_V1, '{}');
            await RequestManager.request(AUTHTOOL_GET_AUTHTOOL_V1, '{}');

            let authTools = [];
            authTools.push({
                "identity": {
                    "identityNo": this.state.IdCard,
                    "type": "01",
                },
                "type": "identity"
            });
            let authTooldic = {"authTools": authTools}
            await RequestManager.request(AUTHTOOL_SET_AUTHTOOL_V1, JSON.stringify(authTooldic));
            RequestManager.hideLoading();

            // 验证身份成功
            // 启用证书->sdk交换pincode : 删除证书
            this.props.type == 0 ? this.openCertStepTwo() : this.deleteCertificate()


        }
        catch (e) {
            RequestManager.hideLoading();
            AlertUtils.showErr(e, '退出', '重新输入', (index) => {
                if (index == 0) {
                    this.pop()
                } else {
                    // 清除输入
                    this.setState({
                        IdCard: '',
                        isIdCard: false
                    })
                }
            })
        }
    }

    // 2. 启用证书->sdk交换pincode
    async openCertStepTwo() {
        try {
            RequestManager.showLoading()
            let certReq = await NativeModules.CfcaScapModule.generateCertReq(this.state.IdCard.substr(this.state.IdCard.length - 4, 4));
            let regAuthTools = [];
            regAuthTools.push({
                "cfca": {
                    "csr": certReq,
                    "keyLength": "2048"
                },
                "type": "cfca"
            })
            let regAuthToolsDic = {"regAuthTools": regAuthTools};
            let data = await RequestManager.request(AUTHTOOL_SETREGAUTHTOOLS_V1, JSON.stringify(regAuthToolsDic))
            RequestManager.hideLoading();

            // 导入证书
            this.importCer(data)

        }
        catch (e) {
            RequestManager.hideLoading();
            AlertUtils.showErr(e, '退出', '重新输入', (index) => {
                if (index == 0) {
                    this.pop()
                } else {
                    // 清除输入
                    this.setState({
                        IdCard: '',
                        isIdCard: false
                    })
                }
            })
        }
    }

    // 3. 启用证书->导入证书
    async importCer(data) {
        try {
            RequestManager.showLoading();
            // 开启SDK,证书导入
            let resolve = await NativeModules.CfcaScapModule.importCertificate(data.data.regAuthTools[0].cfca.signatureCert);

            // redux中添加新证书编号
            this.props.userModel.user.cfcaCertSnList.push(data.data.regAuthTools[0].cfca.serialNo);
            this.props.dispatch(UserAction.saveModel(this.props.userModel.user))
            RequestManager.hideLoading();

            AlertUtils.show("数字证书启用成功", '确定', '', (index) => {
                if (index == 0) {

                    this.pop()
                }
            })
        }
        catch (e) {
            RequestManager.hideLoading();
            AlertUtils.show("数字证书启用失败", '取消', '再次尝试', (index) => {
                if (index == 0) {
                    this.pop()
                }
                else {
                    this.importCer(data)
                }
            })
        }
    }

    //4. 删除证书
    async deleteCertificate() {
        try {
            RequestManager.showLoading();
            let resolve = await NativeModules.CfcaScapModule.deleteCertificate(this.props.serialNo)
            // redux中清除已删除证书编号
            ArrayUtils.remove(this.props.userModel.user.cfcaCertSnList,this.props.serialNo);
            this.props.dispatch(UserAction.saveModel(this.props.userModel.user))
            RequestManager.hideLoading();


            AlertUtils.show("数字证书删除成功", '确定', '', (index) => {
                if (index == 0) {
                    this.pop()
                }
            })
        }
        catch (e) {
            AlertUtils.show("数字证书删除失败", '取消', '再次尝试', (index) => {
                if (index == 0) {
                    this.pop()
                }
                else {
                    this.deleteCertificate()
                }
            })
        }
    }


}

{/***********************************  布局样式  ***********************************/
}
const styles = StyleSheet.create({
    inputBaseViewStyle: {
        paddingHorizontal: px2dp(20)
    }

})

/***************** 关联Redux *****************/
function mapStateToProps(state) {
    return {
        userModel: state.PUserModel
    }
}

export default connect(mapStateToProps)(ValidateIdentity)
