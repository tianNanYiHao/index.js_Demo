/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-10-24 14:11
 * @Profile:  page1
 * @Project:  FlatlistDemo

 * @Description:
 *
 */
import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    AlertIOS

} from 'react-native'
import {ImageFile} from "../../src/Home";


let headViewWidth = 300;
let numColumn = 3;
let itemWidt = headViewWidth/numColumn;

export default class page1 extends Component {


    constructor(props) {
        super(props);
        this.state = {

            listData: [
                {title: "银行卡", imag: ImageFile.bank_card},
                {title: "书签", imag: ImageFile.bill},
                {title: "卡券", imag: ImageFile.card},
                {title: "设置", imag: ImageFile.cpu},
                {title: "ebay", imag: ImageFile.ebay},
                {title: "锁头", imag: ImageFile.friends},
                {title: "礼物", imag: ImageFile.integral},
                {title: "盒子", imag: ImageFile.store},
                {title: "银联", imag: ImageFile.transfer},
                {title: "钱包", imag: ImageFile.wallet},
            ]

        };
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
                <Text>page1</Text>
                <FlatList
                    // 数据
                    data={this.state.listData}
                    // 头部组件
                    ListHeaderComponent={() => {
                        return <HeadView/>
                    }}
                    // 尾部组件
                    ListFooterComponent={() => {
                        return <FootView/>
                    }}
                    // 组件
                    renderItem={(item) => {
                        return <ItemView {...item}/>
                    }}
                    // 行与行分隔组件
                    ItemSeparatorComponent={() => {
                        return <View style={{height: 10, backgroundColor: '#ff9'}}/>
                    }}
                    // 3列
                    numColumns={numColumn}
                    // 设置key,防止警告!
                    keyExtractor={(item, index) => index}
                    // 能否滚动
                    scrollEnabled={true}

                />
            </View>
        )
    }
}

class HeadView extends Component {

    render() {
        return (
            <View style={{height: 20, width: 300, backgroundColor: '#887'}}>
                <Text>这是头部</Text>
            </View>
        )
    }
}

class FootView extends Component {
    render() {
        return (
            <View style={{height: 20, width: headViewWidth, backgroundColor: '#837'}}>
                <Text>这是尾部</Text>
            </View>
        )
    }
}


class ItemView extends Component {
    render() {
        return (
            <TouchableOpacity onPress={()=>this.clickItem(this.props.item)}>
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft: 10,
                    paddingRight: 10,
                    width:itemWidt
                }}>
                    <Image source={this.props.item.imag} style={{height: 30, width: 30}}/>
                    <Text>{this.props.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    clickItem(item){
        AlertIOS.alert(item.title)
    }

}

const styles = StyleSheet.create({})