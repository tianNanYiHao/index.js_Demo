/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ListView
} from 'react-native';


import Dimensions from 'Dimensions';
import BankArr from '../icon/dataSource.json';
var scerrnW = Dimensions.get('window').width;
export default class Lunch extends Component {

	// static defaultProps = {
	// 	videoSrc: 'sdfa',
	// };  // 注意这里有分号
	// static propTypes = {
	// 	videoSrc: React.PropTypes.string.isRequired,
	// };  // 注意这里有分号

	//构造方法
	constructor(props) {
		super(props);
		//设置数据源(固定用法)
		var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			//设置标题
			name: 'nihao',
			//设置数据源返回
			dataSource: ds.cloneWithRows(BankArr),
		};
	}
	//导航栏标题
	static navigationOptions = {
		title: '银行卡列表',
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={style.container}>
				<ListView
					//填充数据源
					dataSource={this.state.dataSource}
					//返回具体cell
					renderRow={this.renderRow}
				/>
			</View>
		);
	}

	//返回具体cell
	renderRow(dateRow, sessionID, rowID) {
		console.log('-----> ' + dateRow.title);
		return (
			<View style={style.cellViewStyle}>
				<Image source={{ uri: dateRow.iconName }} style={style.iconStyle}></Image>
				<View style={style.titleBackGroundViewStyle}>
					<Text style={style.topTitleStyle}>{dateRow.title} </Text>
					<Text style={style.bottomTitleStyle}>{dateRow.money} </Text>
					<View style={style.lineViewStyle}/>
				</View>
			</View>
		);
	}
}





const style = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#090',

	},
	//cell样式
	cellViewStyle: {
		// backgroundColor: '#00d',
		flexDirection: 'row',
		alignItems: 'center',
		height: 60 + 20
	},
	//图标样式
	iconStyle: {
		height: 60,
		width: 60,
		borderRadius: 30,
		// backgroundColor: '#fff',
		marginLeft: 15
	},
	//文字背景视图样式
	titleBackGroundViewStyle: {
		marginLeft: 20,
		// backgroundColor: '#fff',
		width: (scerrnW - 20 - 60 - 15 - 15)
	},
	//顶部文字样式
	topTitleStyle: {
		marginTop: 10,
		fontSize: 18,
	},
	//底部文字样式
	bottomTitleStyle: {
		color: 'red',
		fontSize: 15,
		marginTop: 5,
	},
	lineViewStyle:{
		backgroundColor:'#8e8e8e',
		height:0.5,
		width:scerrnW
	}

});
