import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    AlertIOS,
    ListView,
} from 'react-native';

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;
var jsonData = require('./src/bannerIMG.json');

var timer=null;
export default class BannerView extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            durationTime: 1000,
        }
    }

    render() {
        return (
            <View style={Style.container}>
                <ScrollView ref="scrollABCD"
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            horizontal={true}
                            //滚动结束
                            onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                             //当开始拖动
                            onScrollBeginDrag={this.onScrollBeginDrag}
                            //当拖拽结束
                            onScrollEndDrag={this.onScrollEndDrag}
                >
                    {/*创建banner图片*/}
                    {this.bannerImgs()}
                </ScrollView>
                {/*创建透明视图*/}
                <View style={Style.bannerTitleViewStyle}>
                    {/*返回相应的小圆点*/}
                    {this.circleItems()}
                </View>
            </View>
        );
    }



    //重写开始拖拽方法
    onScrollBeginDrag() {
        //停止定时器
        clearInterval(timer);
    }
    //重写结束拖拽方法
    onScrollEndDrag() {
        //启动定时器
        this.startTime()
    }

    //组件加载完成
    componentDidMount() {
        //开启定时器
        this.startTime();
    }

    //定时器运行
    startTime() {
        //1.拿到Scrollview
        let scrollview = this.refs.scrollABCD;
        //2.添加定时器

        timer = setInterval(() => {
                //2.1初始化下标为0
                let currentIndex = 0;
                if (this.state.currentPage < jsonData.data.length - 1) {
                    currentIndex = this.state.currentPage + 1;
                } else {
                    currentIndex = 0;
                }
                //2.2更新当前页下标记录
                this.setState({
                    currentPage: currentIndex,
                });
                //2.3scrollView滚动
                let offsetX = currentIndex * screenW;
                scrollview.scrollTo({x: offsetX, y: 0, animated: true})
            }
            , this.state.durationTime);
    }

    //创建banner图片
    bannerImgs() {
        var imgItemArr = [];
        for (let i = 0; i < jsonData.data.length; i++) {
            let imgName = jsonData.data[i].icon;
            let imgTitle = jsonData.data[i].title;
            console.log(imgName);
            imgItemArr.push(
                <Image key={i} style={Style.imageStyle} source={{uri: imgName}}></Image>,
                // <Text key={i}>{imgTitle}</Text>
            );
        }
        return imgItemArr;
    }

    //创建小圆点
    circleItems() {
        var circleArr = [];
        var style;
        for (var j = 0; j < jsonData.data.length; j++) {
            console.log(this.state.currentPage);
            style = (j == this.state.currentPage) ? {color: 'red'} : {color: 'white'};
            circleArr.push(
                <Text key={j} style={[{fontSize: 25}, style]}>&bull;</Text>
            );
        }
        return circleArr;
    }

    //重写onAnimationEnd方法
    onAnimationEnd(e) {
        //1.水平方向的偏移量
        var offsetX = e.nativeEvent.contentOffset.x;
        console.log('偏移了' + offsetX);
        var page = Math.floor(offsetX / screenW);
        console.log('当前页下标为:' + page);
        this.setState({
            currentPage: page
        });

    }



}

const Style = StyleSheet.create({

    container: {
        marginTop: 64,
        backgroundColor: '#10f',

    },
    imageStyle: {
        width: screenW,
        height: 120,
    },
    bannerTitleViewStyle: {
        width: screenW,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        //定位
        position: 'absolute',
        bottom: 0,
        //布局
        flexDirection: 'row',
        alignItems: 'center',

    },
})

// export default BannerView;