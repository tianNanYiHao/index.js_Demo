/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-09-27 16:21
 * @Profile:  Login
 * @Project:  reduxReactDemo

 * @Description:
 *
 */


import React, {Component} from 'react'
import {
	Platform,
	View,
	Text,
	StyleSheet,
	AlertIOS,
	TextInput

} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Button from "../Component/Button";
import * as LoginActions from '../Actions/LoginActions'
import {NavigationActions} from 'react-navigation'


class Login extends Component {


	constructor(props) {
		super(props);
		this.state = {
			userNameStr: '',
			userAge: '',
			userSex: '',
		};
	}

	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: -100}}>
				<TextInput placeholder='请输入用户名'
				           style={{
					           width: 150,
					           height: 40,
					           borderColor: 'gray',
					           borderWidth: 1,
					           borderRadius: 10,
					           paddingLeft: 20,
					           marginTop: 10
				           }}
				           onEndEditing={(event) => this.endEditting(event, 1)}
				/>
				<TextInput placeholder='请输入用户年龄'
				           style={{
					           width: 150,
					           height: 40,
					           borderColor: 'gray',
					           borderWidth: 1,
					           borderRadius: 10,
					           paddingLeft: 20,
					           marginTop: 10
				           }}
				           onEndEditing={(event) => this.endEditting(event, 2)}
				           keyboardType={'numeric'}
				/>
				<TextInput placeholder='请输入用户性别'
				           style={{
					           width: 150,
					           height: 40,
					           borderColor: 'gray',
					           borderWidth: 1,
					           borderRadius: 10,
					           paddingLeft: 20,
					           marginTop: 10
				           }}
				           onEndEditing={(event) => this.endEditting(event, 3)}
				/>
				<TextInput/>
				<Button text={this.props.currentLogFlag} onClick={this.onClick.bind(this)}/>
				{this.showBtnTitleState()}
			</View>
		)
	}

    /***************** 初始化登陆状态 *****************/
	showBtnTitleState() {
		if (this.props.currentLogFlag === '登出成功') {
			setTimeout(() => {
				/***************** 当登出成功后, 发送充值登陆状态的Action *****************/
				this.props.dispatch(LoginActions.loginNoState())
			}, 2000)
		}
		if (this.props.currentLogFlag.length == 0){
			/***************** 当未登录时, 发送未登录的Action *****************/
			this.props.dispatch(LoginActions.loginNoState())
		}




	}


	endEditting(text, tag) {

		switch (tag) {
			case 1:
				this.setState({
					userNameStr: text.nativeEvent.text
				})
				break;
			case 2:
				this.setState({
					userAge: text.nativeEvent.text
				})
				break;
			case 3:
				this.setState({
					userSex: text.nativeEvent.text
				})
				break;
			default:
				return null
		}

	}


	// 设置登录的延迟效果
	loginSleepTime() {
		return () => {
			// 登陆成功,切换路由到Car页面
			this.props.navigation.replace('Car')

			/***************** 发送登陆成功后,可退出状态的Action *****************/
			this.props.dispatch(LoginActions.shouldLogOut())
		}
	}

	// 点击登陆请求 - 模拟
	onClick() {
		fetch('https://www.baidu.com/')
			.then((res) => {

				let userInfoDic = {
					"name": this.state.userNameStr,
					"age": this.state.userAge,
					"sex": this.state.userSex
				}
				/***************** 发送登录成功的Action *****************/
				// 登陆成功 - 写法一
				this.props.dispatch(LoginActions.loginSuccess(JSON.stringify(userInfoDic)))
				// 登陆成功 - 写法二
				// this.props.currentFunLogin()

				// 延迟2s 执行登陆 - 便于演示按钮的状态变化
				setTimeout(this.loginSleepTime(), 2000)

			})
			.catch((err) => {
				// 登陆失败
				AlertIOS.alert(err)
				/***************** 发送登录错误的Action*****************/
				this.props.dispatchEvent(LoginActions.loginError())
			})
	}

}

const styles = StyleSheet.create({})


/***************** 关联Redux *****************/
const mapStateToProps = (store) => {
	return {
		currentLogFlag: store.loginReducer.logFlag,
		currentUserInfo: store.loginReducer.user
	}
}

// // 该方法可以不写, 由redux自动帮我们关联,在方法多的情况下
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		currentFunLogin: bindActionCreators(LoginActions.loginSuccess, dispatch)
//
// 	}
// }

export default connect(mapStateToProps)(Login)