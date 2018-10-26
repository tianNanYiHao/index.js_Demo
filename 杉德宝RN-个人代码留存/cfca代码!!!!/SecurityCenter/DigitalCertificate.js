/**
 * 开启/删除数字证书
 *
 * @summary short description for the file
 * @author Arjun Komath
 *
 * Created at     : 2018-08-07 16:47:08
 * Last modified  : 2018-08-07 18:00:57
 */


import AlertUtils from "../../../Common/Components/Alert";

{/*********************************** RN导入  ***********************************/
}
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';

{/***********************************  资源导入  ***********************************/
}
import {connect} from 'react-redux';
import {BaseComponent, CommonButton} from '../../../Common/Components';
import {px2dp, FontSize} from '../../../Common/Itools';

{/***********************************  窗体实现  ***********************************/
}

class DigitalCertificate extends BaseComponent {

    /*********************************** 构造函数 ***********************************/
    constructor(props) {
        super(props);
        this.state = {
            Enable: this.props.Enable //是否启用数字证书
        }
    }

    componentDidMount() {
        this.lisener = this.props.navigation.addListener('didFocus', (resolve) => {
            this.viewWillAppear(resolve)
        })

    }

    viewWillAppear() {

    }

    componentWillUnmount() {
        this.lisener.remove();
    }

    /*********************************** 窗体布局 ***********************************/
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f8f8f8'}}>
                {this.renderNavigationBar('数字证书')}
                <View style={styles.box}>
                    <Image source={this.state.Enable ? Images.site_icon_sandlogo_enable : Images.site_icon_sandlogo_not}
                           style={styles.logoStyle}/>
                    <Text style={{
                        fontSize: FontSize(16),
                        color: '#000000',
                        textAlign: 'center',
                        marginBottom: px2dp(50)
                    }}>
                        {this.state.Enable ? '当前设备已启用' : '未启用数字证书'}
                    </Text>

                    <Text style={{fontSize: FontSize(15), color: '#000000', marginLeft: px2dp(20)}}>启用数字证书将可以</Text>
                    <View style={styles.txtBox}>
                        <View style={styles.point}></View>
                        <Text style={styles.text}>提高支付安全性</Text>
                    </View>
                    <View style={styles.txtBox}>
                        <View style={styles.point}></View>
                        <Text style={styles.text}>提高每日零钱支付限额</Text>
                    </View>

                    <CommonButton
                        style={{marginHorizontal: px2dp(15), marginBottom: px2dp(70)}}
                        title={this.state.Enable ? '删除证书' : '启用'}
                        onPress={() => {
                            this.replace('PValidateIdentity', {type: this.state.Enable ? 1 : 0,serialNo:this.props.serialNo})
                        }}
                    />
                </View>

                {/* 底部logo */}
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Image source={Images.in_the_end_gray} style={{position: 'absolute', bottom: px2dp(30)}}/>

                </View>
            </View>
        );
    }

    /*********************************** 逻辑实现区 ***********************************/



}


{/***********************************  布局样式  ***********************************/
}
const styles = StyleSheet.create({
    box: {
        marginHorizontal: px2dp(20),
        marginTop: px2dp(15),
        backgroundColor: '#ffffff',
        borderRadius: 6
    },
    logoStyle: {
        width: px2dp(91),
        height: px2dp(91),
        alignSelf: 'center',
        marginTop: px2dp(23),
        marginBottom: px2dp(15)
    },
    txtBox: {
        flexDirection: 'row',
        marginHorizontal: px2dp(20),
        alignItems: 'center'
    },
    point: {
        width: px2dp(5),
        height: px2dp(5),
        backgroundColor: '#999999',
        borderRadius: 5,
        marginRight: px2dp(5)
    },
    text: {
        fontSize: FontSize(14),
        color: '#999999'
    }

})

/**************************************** 关联redux ****************************************/
function mapStateToProps(state) {
    return {
        userModel: state.PUserModel
    }
}

export default connect(mapStateToProps)(DigitalCertificate)