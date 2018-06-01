import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    AlertIOS,
} from 'react-native';

//导入json数据
import LocalData from '../../src/data/wyNews.json';
//导入自定义常量
import { screenW, screeH, percentW, percentH, fitSizeW, fitSizeH } from '../comm/helper/sizeHelp';
//导入wyBanner
import WyBanner from '../wangyiNewAppDemo/wyBanner';
//导入wyNwsDetail
import wyNewsDetail from '../wangyiNewAppDemo/wyNewsDetail'




export default class wyHome extends Component {

    static defaultProps = {
        url_api: "http://3g.163.com/touch/jsonp/sy/recommend/0-9.html?miss=48&refresh=B02callback=syrec4",
        url_api2: "https://facebook.github.io/react-native/movies.json"
    }

    constructor(Props) {
        super(Props);
        this.state = {
            //banner数据源
            bannerDataSource: [],
            //listView数据源
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })
        }
    }

    //组件加载完成后执行复杂操作
    componentDidMount() {
        //1.通过网络获取数据
        this.getDataWithNet();
    }

    //获取网络方法实现
    getDataWithNet = () => {
        fetch(this.props.url_api)
            .then((resp) => resp.json())
            .then((respData) => {
                console.log('请求成功,输出如下↓')
                console.log(respData)
                //处理网络数据
                this.manageNetData(respData);
            })
            .catch((error) => {
                console.log('请求失败,输出如下↓')
                console.log(error)
                //加载本地数据
                this.manageNetData(LocalData);
            });
    }

    //处理网络数据
    manageNetData = (data) => {
        //获取banner数据
        let bannerArr = data.focus;
        //获取list数据
        let newArr = data.news;
        //更新状态机
        this.setState({
            bannerDataSource: bannerArr,
            dataSource: this.state.dataSource.cloneWithRows(newArr)
        })
    }


    render() {
        return (
            <View style={style.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderHeader={this.renderHeader}
                    renderRow={this.renderRow}
                >
                </ListView>
            </View>
        );
    }

    //renderHeader,绘制头部
    renderHeader = () => {
        return (
            <WyBanner
                imageArr={this.state.bannerDataSource}
            >
            </WyBanner>
        );
    }

    //renderRow,绘制cell
    renderRow = (rowData) => {
        var imgArr = rowData.picInfo;
        var picInfoJson = imgArr[0];
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.cellCilic(rowData)} >
                <View style={style.container}>
                    <Image style={style.imgStyle} source={{ uri: picInfoJson.url }} />
                    <View style={style.rightViewStyle} >
                        <Text style={style.titleStyle} >{rowData.title}</Text>
                        <Text style={style.subTitleStyle} >{rowData.digest}</Text>
                        <Text style={style.bottomTextStyle} >{rowData.source}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    //cell点击事件
    cellCilic = (data) => {
        this.props.navigator.push({
            component: wyNewsDetail,
            title: data.source,
            passProps:{data}

        })
    }


}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,

    },
    imgStyle: {
        height: fitSizeW(100),
        width: fitSizeW(140),
    },
    rightViewStyle: {
        width: fitSizeW(200),
        marginLeft: 8
    },
    titleStyle: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5

    },
    subTitleStyle: {
        fontSize: 13,
        color: 'gray'

    },
    bottomTextStyle: {
        //绝对定位:
        position: 'absolute',
        right: 10,
        bottom: 0,
        color: 'gray',

        borderWidth: 0.8,
        borderColor: '#c32',
        borderRadius: 5,
        padding: 3
    }
});