/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-13 17:35
 * @Profile:  HalfPage
 * @Project:  test

 * @Description:
 *
 */


import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Easing,
    Animated,
    StyleSheet

} from 'react-native'


import PropTypes from 'prop-types'


class HalfPage extends Component {

    /*指定半页视图的类型*/
    static HalfPageType = {
        // 支付列表半页,
        halfPagePayList: 0,
        // 短信半页,
        halfPageMsg: 1,
        // 支付密码半页,
        halfPagePaypwd: 2,
    };

    /**************************************** 初始构造 ****************************************/
    static propTypes = {
        type: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

    /**************************************** 渲染 ****************************************/


    render() {
        switch (this.props.type) {
            case this.HalfPageType.halfPagePayList:
                return this._renderPayToolList(0);
                break;

            case this.HalfPageType.halfPageMsg:
                return this._renderPayToolList(1);
                break;

            case this.HalfPageType.halfPagePaypwd:
                return this._renderPayToolList(2);
                break;

            default:
                return this._renderPayToolList(-1);
        }

    }


    _renderPayToolList(num) {
        return (
            <View>
                <Text>{`${num}`}</Text>
            </View>
        )
    }


    /**************************************** 逻辑处理 ****************************************/


}

const style = StyleSheet.create({})

export default HalfPage;