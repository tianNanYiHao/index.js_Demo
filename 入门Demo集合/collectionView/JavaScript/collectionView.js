import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    Image,
    ListView,
    View,
    TouchableOpacity,
    AlertIOS,
} from 'react-native';

import Dimensions from 'Dimensions';

var screenW = Dimensions.get('window').width;
var iconData = [];
const cols = 3;
const itemWH = 100;
const itemSpace = (screenW - (3 * itemWH)) / (cols + 1);
const itemBottom = 15;

export default class CollectionView extends Component {

    //构造函数
    constructor(Props) {
        super(Props);

        //构建数据源
        iconData.push(
            {
                "title": "方式的",
                "iconName": require('../scr/img/icon1.png')
            },
            {
                "title": "是否是",
                "iconName": require('../scr/img/icon2.png')
            },
            {
                "title": "打发",
                "iconName": require('../scr/img/icon3.png')
            },
            {
                "title": "是的反对",
                "iconName": require('../scr/img/icon4.png')
            },
            {
                "title": "是的发生",
                "iconName": require('../scr/img/icon5.png')
            },
            {
                "title": "级酒店",
                "iconName": require('../scr/img/icon6.png')
            },
            {
                "title": "扑克牌就",
                "iconName": require('../scr/img/icon7.png')
            },
            {
                "title": "那你的",
                "iconName": require('../scr/img/icon8.png')
            },
            {
                "title": "魔女",
                "iconName": require('../scr/img/icon9.png')
            },
            {
                "title": "VBA",
                "iconName": require('../scr/img/icon10.png')
            },
        );

        console.log(iconData);

        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            dataSource: ds.cloneWithRows(iconData)
        }
    }

    render() {
        return (
            <View style={style.container}>
                <ListView contentContainerStyle={style.lisetViewStyle}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }

    //绘制cell
    renderRow = (dataRow, sessionID, rowID) => {
        return (
            <TouchableOpacity setOpacityTo={0.5} onPress={() => this.itemClick()}>
                <View style={style.itemStyle}>
                    <Image style={style.imgStyle} source={dataRow.iconName} />
                    <Text style={style.textStyle}>
                        {dataRow.title + rowID + ''}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    //didSelect方法
    itemClick = () => {
        AlertIOS.alert('ssss!');
    }

}





const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    lisetViewStyle: {
        //主轴改变为x轴
        flexDirection: 'row',
        //居中布局
        alignItems: 'center',
        //多行展示
        flexWrap: 'wrap',
        //距离顶部
        marginTop: 80,
    },
    itemStyle: {
        height: itemWH,
        width: itemWH,
        marginLeft: itemSpace,
        marginBottom: itemBottom,
        //侧轴上居中
        alignItems: 'center',
    },
    imgStyle: {
        height: 60,
        width: 60
    },
    textStyle: {
        marginTop: 10
    },

});



