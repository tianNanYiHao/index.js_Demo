/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-01 16:21
 * @Profile:  TeasetSelect
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
    TouchableOpacity,
    StyleSheet,
    FlatList,
    NativeModules
} from 'react-native'


import PropsTyps from 'prop-types'
import Dimensions from 'Dimensions'
import BaseComponent from "../BaseComponent/BaseComponent";
import {LFlatListDemo} from "../index";
import LResponderDemo from "../ResponderDemo/ResponderDemo";
import Spinkit from "../Spinkit/Spinkit";
import LGesturePasswordA from "../gesturePassword/GesturePasswordA";

export default class Home extends BaseComponent {


    constructor(props) {
        super(props);

        this.state = {

            data: [
                {title: '路由跳转demo'},
                {title: '胡乱测试demo'},
                {title: 'Teaset测试demo'},
                {title: 'Fetch网络测试demo'},
                {title: 'Animate动画demo'},
                {title: 'Flatlist组件demo'},
                {title: 'ScrollView组件demo'},
                {title: 'Render测试demo'},
                {title: 'Responder手势demo'},
                {title: 'Swiper轮播demo'},
                {title: 'EventEmitter原生向RN通信'},
                {title: 'Spinkit网络加载动画库'},
                {title: '二维码展示,保存下载'},
                {title: '二维码识别'},
                {title: '手势密码'},
                {title: '滑动验证'},
                {title: '下载进度条'},
            ]
        };
    }

    render() {
        return (

            <View style={styles.container}>
                {this.renderNoLeftItemNaivgationBar('Home页面-----1---')}
                <FlatList
                    style={styles.flatlist}
                    data={this.state.data}
                    renderItem={(item) => <CellView {...item} cellClick={() => this.cellView(item.index)}/>}
                    ItemSeparatorComponent={() => <View style={{backgroundColor: '#dddf00', height: 5}}/>}
                    horizontal={false}
                    keyExtractor={(item, index) => index}
                    columnWrapperStyle={{paddingHorizontal: 5, flexWrap: 'nowrap', alignItems: 'center'}}
                    numColumns={4}
                />


            </View>

        )
    }


    /**************************************** 逻辑处理 ****************************************/

    cellView(tag) {

        if (tag === 0) {
            this.push('LHome1')
        }

        if (tag === 1) {
            this.push('LTestDemo')
        }
        if (tag === 2) {
            this.push('LTeasetSelect')
        }
        if (tag === 3) {
            this.push('LFetchTest')
        }
        if (tag === 4) {
            this.push('LAnimatedDemo')
        }
        if (tag === 5) {
            this.push('LFlatListDemo')
        }
        if (tag === 6) {
            this.push('LScrollViewDemo')
        }
        if (tag === 7) {
            this.push('LRenderTest')
        }
        if (tag === 8) {
            this.push('LResponderDemo');
        }
        if (tag === 9) {
            this.push('LSwiperDemo');
        }
        if (tag === 10) {
            this.push('LEventEmitterDemo');
        }
        if (tag === 11) {
            this.push('LSpinkit');
        }
        if (tag === 12) {
            this.push('LQrcode');
        }
        if (tag === 13) {
            this.push('LScanQrcode');
        }
        if (tag === 14) {
            this.push('LGesturePasswordA');
        }
        if (tag === 15) {
            this.push('LSlideMoveBar');
        }
        if (tag === 16){
            this.push('LdownLoadBar');
        }

    }

}

const styles = StyleSheet.create({

    container: {},
    flatlist: {
        alignSelf: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 100,

    },

    text: {
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#889',
        borderWidth: 1,
        borderColor: '#090',

    },
    cellViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        paddingHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: '#0f0',
        borderColor: '#088eff',
        borderWidth: 1,
        borderRadius: 10,
        width: (Dimensions.get('window').width - 10 - 20) / 4
    },
    cellViewText: {

        fontSize: 20,
        textAlign: 'center',
    },

})


/**************************************** CellView ****************************************/
class CellView extends Component {

    static propTypes = {
        cellClick: PropsTyps.func.isRequired,
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.cellClick(this.props.item.index)}>
                <View style={styles.cellViewContainer}>
                    <Text style={styles.cellViewText}>{this.props.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
