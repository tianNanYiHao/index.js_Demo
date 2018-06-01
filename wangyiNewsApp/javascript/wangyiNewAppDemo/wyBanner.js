import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    AlertIOS,
    ListView,
} from 'react-native';


//导入自定义常量
import { fitSizeW, fitSizeH, screenW, screeH } from '../comm/helper/sizeHelp'

var timer = null;
export default class WyBanner extends Component {

    //默认属性
    static defaultProps = {
        durationTime: 2000,
        imageArr: []
    }

    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            bannerTitleStr: ''
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
                    {/*创建文字标题*/}
                    {this.bannerTitle()}
                    <View style={Style.circleContainerViewStyle} >
                        {/*返回相应的小圆点*/}
                        {this.circleItems()}
                    </View>

                </View>
            </View>
        );
    }

    //重写开始拖拽方法
    onScrollBeginDrag = () => {
        //停止定时器
        clearInterval(timer);
    }
    //重写结束拖拽方法
    onScrollEndDrag = () => {
        //启动定时器
        this.startTime()
    }

    //组件加载完成
    componentDidMount = () => {
        //开启定时器
        this.startTime();
    }

    //定时器运行
    startTime = () => {
        //1.拿到Scrollview
        let scrollview = this.refs.scrollABCD;
        //2.添加定时器

        timer = setInterval(() => {
            //2.1初始化下标为0
            let currentIndex = 0;
            let currentTitle;
            //计算有效的数据量
            let indexArr = [];
            for (let i = 0; i < this.props.imageArr.length; i++) {
                //获取图片地址
                let picInfos = this.props.imageArr[i].picInfo;
                let picInfoObj;
                if (picInfos.length > 0) {
                    let picInfoObj = picInfos[0];
                    indexArr.push(this.props.imageArr[i].title);
                }
            }
            if (this.state.currentPage < indexArr.length - 1) {
                currentIndex = this.state.currentPage + 1;
                currentTitle = indexArr[currentIndex];
            } else {
                currentIndex = 0;
                currentTitle = indexArr[0];
            }
            //2.2更新当前页下标记录
            this.setState({
                currentPage: currentIndex,
                bannerTitleStr: currentTitle
            });
            //2.3scrollView滚动
            let offsetX = currentIndex * screenW;
            scrollview.scrollTo({ x: offsetX, y: 0, animated: true })
        }
            , this.props.durationTime);
    }

    //创建banner图片
    bannerImgs = () => {
        let imgUrlArr = [];
        let imgItemArr = [];

        for (let i = 0; i < this.props.imageArr.length; i++) {
            //获取图片地址
            let picInfos = this.props.imageArr[i].picInfo;
            let picInfoObj;
            if (picInfos.length > 0) {
                let picInfoObj = picInfos[0];
                imgUrlArr.push(picInfoObj.url);
            }
        }
        for (let a = 0; a < imgUrlArr.length; a++) {
            const imgItemUrl = imgUrlArr[a];
            imgItemArr.push(
                <Image key={a} style={Style.imageStyle} source={{ uri: imgItemUrl }}></Image>,
            );
        }

        return imgItemArr;
    }

    //创建小圆点
    circleItems = () => {
        let circleArr = [];
        let circlePageArr = [];
        let style;
        for (let s = 0; s < this.props.imageArr.length; s++) {
            //获取图片地址
            let picInfos = this.props.imageArr[s].picInfo;
            let picInfoObj;
            if (picInfos.length > 0) {
                let picInfoObj = picInfos[0];
                circlePageArr.push(1);
            }
        }
        for (var j = 0; j < circlePageArr.length; j++) {
            style = (j == this.state.currentPage) ? { color: 'red' } : { color: 'white' };
            circleArr.push(
                <Text key={j} style={[{ fontSize: 25 }, style]}>&bull;</Text>
            );
        }
        return circleArr;
    }

    //创建文字标题
    bannerTitle = () => {
        return (
            <Text style={Style.bannerTitleStyle} >{this.state.bannerTitleStr}</Text>
        );
    }


    //重写onAnimationEnd方法
    onAnimationEnd = (e) => {
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
        backgroundColor: '#10f',

    },
    imageStyle: {
        width: screenW,
        height: fitSizeH(120),
    },
    bannerTitleViewStyle: {
        width: screenW,
        height: fitSizeH(25),
        backgroundColor: 'rgba(0,0,0,0.2)',
        //定位
        position: 'absolute',
        bottom: 0,
        //布局
        //设置主轴的方向
        flexDirection: 'row',
        //设置侧轴方向的对齐方式
        alignItems: 'center',
        justifyContent:'space-between'
    },
    circleContainerViewStyle:{
        //布局
        flexDirection: 'row',
    },
    bannerTitleStyle: {
        color: '#fff',
    }
})