/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-12 16:16
 * @Profile:  StackNavigatorConfig
 * @Project:  test

 * @Description:
 *
 */


// 配置安卓实现iOS push动画
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'

/*配置跳转方式*/
const screenInterpolater = (sceneProps) => {
    const {route} = sceneProps.scene;
    const params = route.params || {};
    const transition = params.transition || 'forHorizontal';
    return CardStackStyleInterpolator[transition](sceneProps);
};




const StackNavigatorConfig = {
    //导航样式设置
    initialRouteName: "LLunch",
    transitionConfig: (() => ({
        screenInterpolator: screenInterpolater,
    })),
    navigationOptions: {
        header: null,
    }
};


export default StackNavigatorConfig;