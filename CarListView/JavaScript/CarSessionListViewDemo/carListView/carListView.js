import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    AlertIOS,
    TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';
import carData from '../../../scr/json/Car.json'


var screenWidth = Dimensions.get('window').width;

export default class carListView extends Component {

    constructor(Props) {
        super(Props);
        //获取组数据
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        }
        //获取
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        }
        this.state = {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        }
    }

    componentDidMount() {
        this.loadDataFromJson();
    }

    //从json加载并组装数据
    loadDataFromJson = () => {
        //json数据
        var jsonData = carData.data;
        //定义相关变量
        var dataBlob = {},
            sectionIDs = [], //组标识
            rowIDs = [], //行标识
            cars = []; //汽车数据

        for (let i = 0; i < jsonData.length; i++) {
            //获取组ID
            sectionIDs.push(i + 1);
            //把每组头部显示的内容放入dataBlob中
            dataBlob[i + 1] = jsonData[i].title;
            //取出该组中所有的车
            cars = jsonData[i].cars;
            rowIDs[i] = [];
            //遍历所有的车数组
            for (let j = 0; j < cars.length; j++) {
                //获取rowID
                rowIDs[i].push(j);
                //根据唯一的 组+行 标识,把数据放入dataBlob中
                dataBlob[i + 1 + ':' + j] = cars[j];
            }
        }
        //刷新状态
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });
    }

    render() {
        return (
            <View style={style.container}>
                <ListView style={style.listViewStyle}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                />
            </View>
        );
    }

    //绘制cell
    renderRow = (rowdata, sectionid, rowid) => {

        return (
            <View style={style.cellStyle}>
                <View style={style.cellcontainerStyle}>
                    <Image style={style.imgeStyle}
                        source={{ uri: rowdata.icon }}
                        style={style.imgeStyle}
                    />
                    <Text style={style.textstyle} >{rowdata.name}</Text>
                </View>
                <View style={style.lineStyle} />
            </View>
        );

    }
    //绘制sectionHeade
    renderSectionHeader = (secticonData) => {
        return (
            <View style={style.sectionViewStyle} >
                <Text style={style.sectionTextStyle} >{secticonData}</Text>
            </View>
        );
    }
}


const style = StyleSheet.create({
    container: {

    },
    listViewStyle: {

    },
    cellStyle: {
        

    },
    cellcontainerStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    imgeStyle: {
        height: 60,
        width: 60,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    textstyle: {
        fontSize: 15,
        color: '#77d',
        marginLeft: 15
    },
    lineStyle: {
        height: 0.3,
        width: screenWidth,
        backgroundColor: '#A9A9A9',
        marginLeft:10
    },
    sectionViewStyle: {
        height: 40,
        width: screenWidth,
        backgroundColor: '#00FA9A',
        flexDirection: 'row',
        alignItems: 'center'
    },
    sectionTextStyle: {
        color: '#000000',
        marginLeft: 15,
        fontSize: 24

    }


});

