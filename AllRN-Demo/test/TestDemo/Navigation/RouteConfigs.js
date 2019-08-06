/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-02 16:16
 * @Profile:  RouteConfigs
 * @Project:  test

 * @Description: 路由配置
 *
 */


import {
  LLunch,
  LHome,
  LHome1,
  LHome2,
  LHome3,
  LHome4,
  LHome5,
  LTestDemo,
  LTeasetSelect,
  LFetchTest,
  LAnimatedDemo,
  LFlatListDemo,
  LScrollViewDemo,
  LRenderTest,
  LAnimation1,
  LAnimation2,
  LAnimation3,
  LAnimation4,
  LAnimation5,
  LResponderDemo,
  LChooseCellIndex,
  LSwiperDemo,
  LEventEmitterDemo,
  LSpinkit,
  LQrcode,
  LScanQrcode,
  LGesturePasswordA,
  LSlideMoveBarPage,
  LdownLoadBar,


} from '../Page'

import { config } from './RouteConfigHelp'


/*写法一*/
const RouteConfigs = {

  /*由于config()方法接受一个对象,故而通过{}将下面对象包裹, 需通过...将类数组的新RouteConfig展开*/
  ...config({

    LLunch: {screen: LLunch},
    /**************************************** 业务 ****************************************/
    LHome: {screen: LHome},
    LHome1: {screen: LHome1},
    LHome2: {screen: LHome2},
    LHome3: {screen: LHome3},
    LHome4: {screen: LHome4},
    LHome5: {screen: LHome5},
    LTestDemo: {screen: LTestDemo},
    LTeasetSelect: {screen: LTeasetSelect},
    LFetchTest: {screen: LFetchTest},
    LAnimatedDemo: {screen: LAnimatedDemo},
    LFlatListDemo: {screen: LFlatListDemo},
    LScrollViewDemo: {screen: LScrollViewDemo},
    LRenderTest: {screen: LRenderTest},
    LAnimation1: {screen: LAnimation1},
    LAnimation2: {screen: LAnimation2},
    LAnimation3: {screen: LAnimation3},
    LAnimation4: {screen: LAnimation4},
    LAnimation5: {screen: LAnimation5},
    LResponderDemo: {screen: LResponderDemo},
    LChooseCellIndex: {screen: LChooseCellIndex},
    LSwiperDemo: {screen: LSwiperDemo},
    LEventEmitterDemo: {screen: LEventEmitterDemo},
    LSpinkit: {screen: LSpinkit},
    LQrcode: {screen: LQrcode},
    LScanQrcode: {screen: LScanQrcode},
    LGesturePasswordA: {screen: LGesturePasswordA},
    LSlideMoveBar: {screen: LSlideMoveBarPage},
    LdownLoadBar: {screen: LdownLoadBar},


  }),
}
export default RouteConfigs


/*写法二*/
// const RouteConfigs = {
//
//         LTestDemo: {screen: LTestDemo},
//         LTeasetSelect: {screen: LTeasetSelect},
//         LHome: {screen: LHome},
// };
// export default config(RouteConfigs);

