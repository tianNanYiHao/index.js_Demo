import { AppRegistry, YellowBox } from 'react-native';

import carRouter from './JavaScript/CarSessionListViewDemo/carRouter/carRouter';


//消除react-navigation导航组件的警告
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('CarListView', () => carRouter);
