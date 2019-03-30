/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-29 15:45
 * @Profile:  QRcodeView
 * @Project:  test

 * @Description:
 *
 */


import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native'

import PropsType from 'prop-types'
import {Overlay} from 'teaset'
import pxdp from "../../Common/pxdp";
import {Images} from "../../src";
import QRCode from 'react-native-qrcode-svg'


class QRcodeView {

    static overLayView
    static overLayKey

    static show(qrValue,saveQrcodeCallBack) {
        if (!this.overLayView) {
            QRcodeView.overLayView = (
                <QrcodeViewComponent qrValue={qrValue} saveQrcode={saveQrcodeCallBack}/>
            )
        }
        this.overLayKey = Overlay.show(QRcodeView.overLayView)
    }

    static hidden() {
        this.overLayView = Overlay.hide(this.overLayKey)
        this.overLayView = null;
    }


}


class QrcodeViewComponent extends Component {

    static propTypes={
        saveQrcode:PropsType.func.isRequired,
        qrValue:PropsType.string.isRequired,
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Overlay.PopView
                    style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                    modal={true}
                    animated={true}
                    type="custom"
                    customBounds={
                        {x: 0, y: 0, width: pxdp.width, height: pxdp.height}
                    }
                >
                    <View style={{
                        backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center',
                        width: pxdp.fixWidth(290 + 60),
                        height: pxdp.fixHeight(355 + 60)
                    }}>
                        <Text style={{
                            color: "#fff",
                            fontSize: 20,
                            position: 'absolute',
                            top: pxdp.fixHeight(0)
                        }}>扫一扫,有惊喜!</Text>

                        <View
                            style={{
                                width: pxdp.fixWidth(290),
                                height: pxdp.fixHeight(355),
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10,
                                backgroundColor: '#fff'
                            }}>
                            <QRCode style={{marginTop: pxdp.fixHeight(55), marginHorizontal: pxdp.fixHeight(55)}}
                                    value={this.props.qrValue} size={pxdp.fixWidth(pxdp.fixWidth(235))}
                                    logo={Images.ericon}
                                    logoSize={pxdp.fixWidth(75)}
                            />
                            <TouchableOpacity onPress={this.props.saveQrcode}>
                                <Image source={Images.saveer}
                                       style={{
                                           marginTop: pxdp.fixHeight(20),
                                           width: pxdp.fixWidth(255),
                                           height: pxdp.fixHeight(50),
                                           borderRadius: 10,
                                           alignItems: 'center',
                                           justifyContent: 'center',
                                       }}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Overlay.PopView>
            </View>
        )
    }

}


export default QRcodeView;