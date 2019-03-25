/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-09-27 16:28
 * @Profile:  NavigationAPP
 * @Project:  reduxReactDemo

 * @Description:
 *
 */

import Login from './Pages/Login'
import Car from './Pages/Car'

import {StackNavigator} from 'react-navigation'

const NavigationApp = StackNavigator(
	{
		Login: {screen: Login},
		Car: {screen: Car}
	},
	{
		// 启动app进入登录页
		initialRouteName: 'Login',
	}
)

export default NavigationApp